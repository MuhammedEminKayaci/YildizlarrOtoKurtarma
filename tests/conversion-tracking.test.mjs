import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const layout = readFileSync(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');
const script = [...layout.matchAll(/<script is:inline>([\s\S]*?)<\/script>/g)]
  .map(match => match[1]).find(source => source.includes("gtag('config'"));
assert.ok(script, 'Google Ads tracking script exists');

function setup({ storage = new Map(), blockedStorage = false, navigator = {} } = {}) {
  let click;
  const context = {
    window: {}, navigator: { userAgent: 'Mozilla/5.0', webdriver: false, ...navigator },
    document: { addEventListener(type, handler) { assert.equal(type, 'click'); click = handler; } },
    sessionStorage: {
      getItem(key) { if (blockedStorage) throw new Error('blocked'); return storage.get(key); },
      setItem(key, value) { if (blockedStorage) throw new Error('blocked'); storage.set(key, value); }
    }
  };
  // Browser globals window.dataLayer and dataLayer refer to the same object.
  context.window = context;
  vm.runInNewContext(script, context);
  return {
    click(href, { trusted = true, nested = true } = {}) {
      const link = { getAttribute: () => href };
      click({ isTrusted: trusted, target: nested ? { closest: () => link } : null });
    },
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
