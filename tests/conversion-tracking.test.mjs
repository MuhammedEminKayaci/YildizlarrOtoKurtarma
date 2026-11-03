import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const layout = readFileSync(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');
const script = [...layout.matchAll(/<script is:inline>([\s\S]*?)<\/script>/g)]
  .map(match => match[1]).find(source => source.includes("gtag('config'"));
assert.ok(script, 'Google Ads tracking script exists');

function setup({ storage = new Map(), blockedStorage = false, navigator = {}, clock = { now: 1_000_000 } } = {}) {
  let click;
  const listeners = {};
  const context = {
    window: {}, navigator: { userAgent: 'Mozilla/5.0', webdriver: false, ...navigator },
    document: {
      visibilityState: 'visible',
      addEventListener(type, handler) { listeners[type] = handler; if (type === 'click') click = handler; }
    },
    sessionStorage: {
      getItem(key) { if (blockedStorage) throw new Error('blocked'); return storage.get(key); },
      setItem(key, value) { if (blockedStorage) throw new Error('blocked'); storage.set(key, value); }
    }
  };
  // Browser globals window.dataLayer and dataLayer refer to the same object.
  context.window = context;
  context.Date = Object.assign(function () { return new globalThis.Date(clock.now); }, { now: () => clock.now });
  vm.runInNewContext(script, context);
  return {
    click(href, { trusted = true, nested = true } = {}) {
      const link = { getAttribute: () => href };
      click({ isTrusted: trusted, target: nested ? { closest: () => link } : null });
    },
    hide() { context.document.visibilityState = 'hidden'; listeners.visibilitychange(); },
    show() { context.document.visibilityState = 'visible'; listeners.visibilitychange(); },
    advance(ms) { clock.now += ms; },
    events: () => context.dataLayer.filter(args => args[0] === 'event' && args[1] === 'conversion')
  };
}

test('page load does not send a conversion', () => assert.equal(setup().events().length, 0));
test('immediate trusted phone click is measured once', () => {
  const tracker = setup();
  tracker.click('tel:+905378994818');
  tracker.click('tel:+905378994818');
  assert.equal(tracker.events().length, 1);
  assert.equal(tracker.events()[0][2].send_to, 'AW-18457068527/Yqw3CI3p4aYdEO-HguFE');
});
test('WhatsApp has a separate conversion and duplicate protection', () => {
  const tracker = setup();
  tracker.click('tel:+905378994818');
  tracker.click('https://wa.me/905378994818');
  tracker.click('https://api.whatsapp.com/send?phone=905378994818');
  assert.equal(tracker.events().length, 2);
  assert.equal(tracker.events()[1][2].send_to, 'AW-18457068527/K_VOCJDp4aYdEO-HguFE');
});
test('synthetic clicks and ordinary links are not conversions', () => {
  const tracker = setup();
  tracker.click('tel:+905378994818', { trusted: false });
  tracker.click('/iletisim/');
  tracker.click('tel:+905378994818', { nested: false });
  assert.equal(tracker.events().length, 0);
});
test('duplicate protection survives navigation in the same session', () => {
  const storage = new Map();
  setup({ storage }).click('tel:+905378994818');
  const nextPage = setup({ storage });
  nextPage.click('tel:+905378994818');
  assert.equal(nextPage.events().length, 0);
});
test('blocked sessionStorage does not break links or in-page duplicate protection', () => {
  const tracker = setup({ blockedStorage: true });
  tracker.click('tel:+905378994818');
  tracker.click('tel:+905378994818');
  assert.equal(tracker.events().length, 1);
});
test('automation filter remains enabled', () => {
  const tracker = setup({ navigator: { webdriver: true } });
  tracker.click('tel:+905378994818');
  assert.equal(tracker.events().length, 0);
});

const QUALIFIED = 'AW-18457068527/Jbb4CI_mmrEdEO-HguFE';
const qualified = (tracker) => tracker.events().filter(e => e[2].send_to === QUALIFIED).length;
test('qualified call: tap, phone app for 20s, return -> counted once', () => {
  const t = setup();
  t.click('tel:+905510951418'); t.advance(500); t.hide(); t.advance(20000); t.show();
  assert.equal(qualified(t), 1);
  t.click('tel:+905510951418'); t.advance(500); t.hide(); t.advance(30000); t.show();
  assert.equal(qualified(t), 1);
});
test('qualified call: cancel / quick return is not counted', () => {
  const t = setup();
  t.click('tel:+905510951418'); t.advance(500); t.hide(); t.advance(4000); t.show();
  assert.equal(qualified(t), 0);
  t.click('tel:+905510951418'); t.advance(10000); t.show();
  assert.equal(qualified(t), 0);
});
test('qualified call: leaving the page without tapping call is not counted', () => {
  const t = setup();
  t.hide(); t.advance(60000); t.show();
  assert.equal(qualified(t), 0);
});
test('qualified call survives page reload after returning from the phone app', () => {
  const storage = new Map(); const clock = { now: 1_000_000 };
  const t = setup({ storage, clock });
  t.click('tel:+905510951418'); t.advance(300); t.hide(); t.advance(45000);
  const reloaded = setup({ storage, clock });
  assert.equal(qualified(reloaded), 1);
});
test('qualified call ignored for automation browsers', () => {
  const t = setup({ navigator: { webdriver: true } });
  t.click('tel:+905510951418'); t.hide(); t.advance(30000); t.show();
  assert.equal(qualified(t), 0);
});
