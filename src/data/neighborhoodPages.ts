export type NeighborhoodProfile = 'central' | 'residential' | 'hillside' | 'commercial' | 'outer';

export type NeighborhoodPage = {
  districtSlug: string;
  districtName: string;
  name: string;
  slug: string;
  profile: NeighborhoodProfile;
  localContext: string;
  heroImageKey:
    | 'stockAnkaraRoad'
    | 'stockRoadsideAssistance'
    | 'stockCarTransport'
    | 'districtGallery5';
};

type NeighborhoodSeed = [name: string, profile: NeighborhoodProfile, localContext: string];

type NeighborhoodGroup = {
  districtSlug: string;
  districtName: string;
  heroImageKey: NeighborhoodPage['heroImageKey'];
  items: NeighborhoodSeed[];
};

const slugify = (value: string) =>
  value
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const groups: NeighborhoodGroup[] = [
  {
    districtSlug: 'cankaya',
    districtName: 'Çankaya',
    heroImageKey: 'stockCarTransport',
    items: [
      ['Ümitköy', 'residential', 'Site girişleri, geniş bulvarlar ve Eskişehir Yolu bağlantılarında doğru yön bilgisinin paylaşılması önemlidir.'],
      ['Kavaklıdere', 'central', 'Yoğun cadde trafiği, yol kenarı parkları ve kısa süreli duraklama alanları çekici yaklaşımını etkileyebilir.'],
      ['Beysukent', 'hillside', 'Eğimli site yolları ve kontrollü girişler nedeniyle blok, kapı ve rampa bilgisinin önceden verilmesi faydalıdır.'],
      ['Beytepe', 'residential', 'Kampüs, site ve çevre yolu bağlantılarında alınacak noktanın giriş yönüyle birlikte tarif edilmesi gerekir.'],
      ['Çayyolu', 'residential', 'Geniş yerleşim alanı, site otoparkları ve bulvar bağlantıları nedeniyle canlı konum süreci hızlandırır.'],
      ['Esat', 'central', 'Yoğun konut dokusu ve park edilmiş araçların bulunduğu sokaklarda yol genişliği bilgisi önem taşır.'],
      ['Öveçler', 'hillside', 'Eğimli sokaklar, apartman otoparkları ve farklı kotlardaki bağlantılar araç alımını etkileyebilir.'],
      ['Anıttepe', 'central', 'Merkez trafiği ve sınırlı bekleme alanlarında araç konumu ile yol yönünün net paylaşılması gerekir.'],
      ['Bahçelievler', 'central', 'Yoğun cadde ve sokaklarda park durumu, araç yönü ve güvenli yükleme noktası birlikte değerlendirilir.'],
      ['Gaziosmanpaşa', 'hillside', 'Eğimli yollar ve yoğun konut alanlarında sokak genişliği ile aracın duruş yönü önemlidir.'],
      ['Yaşamkent', 'residential', 'Site girişleri, kapalı otoparklar ve geniş yerleşim alanlarında kapı veya blok bilgisi yönlendirmeyi kolaylaştırır.'],
      ['Dikmen', 'hillside', 'Eğimli arterler ve dar bağlantı sokaklarında çekicinin güvenli yaklaşabileceği nokta önceden belirlenir.'],
      ['Ayrancı', 'hillside', 'Dar ve eğimli sokaklarda park yoğunluğu ile aracın hareket kabiliyeti taşıma yöntemini belirler.'],
      ['Balgat', 'commercial', 'İş merkezleri, konut alanları ve Konya Yolu bağlantılarında giriş veya servis noktası açıkça tarif edilmelidir.'],
      ['Oran', 'hillside', 'Site yolları, eğimli güzergâhlar ve Turan Güneş bağlantılarında araç konumu ayrıntılı paylaşılmalıdır.'],
      ['Kızılay', 'central', 'Yoğun merkez trafiğinde yol yönü, en yakın cadde ve güvenli bekleme noktası çekici planını doğrudan etkiler.'],
      ['İşçi Blokları', 'commercial', 'Konut, iş merkezi ve ana yol bağlantılarında otopark çıkışı veya bina girişinin belirtilmesi faydalıdır.'],
      ['Söğütözü', 'commercial', 'İş merkezleri, AVM otoparkları ve Eskişehir Yolu bağlantılarında giriş kapısı ile kat bilgisi önemlidir.'],
      ['Çukurambar', 'commercial', 'İş merkezi ve rezidans otoparklarında giriş yüksekliği, rampa ve teslim noktası önceden netleştirilir.'],
      ['Yıldız', 'hillside', 'Eğimli konut yollarında sokak genişliği, park durumu ve aracın yönü güvenli yaklaşım için gereklidir.'],
      ['Tunalı Hilmi', 'central', 'Yoğun yaya ve araç trafiğinde kısa süreli yükleme imkânı ile cadde yönünün doğru bildirilmesi önemlidir.']
    ]
  },
  {
    districtSlug: 'golbasi',
    districtName: 'Gölbaşı',
    heroImageKey: 'stockAnkaraRoad',
    items: [
      ['İncek', 'residential', 'Genişleyen site bölgeleri, villa yolları ve çevre bağlantılarında kapı ile yol yönü bilgisi önemlidir.'],
      ['Tulumtaş', 'outer', 'Yerleşim içi yollar ve gelişen bağlantı güzergâhlarında açık konum ile yol zemini bilgisi paylaşılmalıdır.'],
      ['Eymir', 'outer', 'Göl çevresi ve bağlantı yollarında bulunduğunuz giriş, yol yönü ve yakın referans noktası belirtilmelidir.'],
      ['Seğmenler', 'residential', 'Konut sokakları ve Gölbaşı merkez bağlantılarında araç durumu ile teslim adresi birlikte netleştirilir.'],
      ['Hacılar', 'outer', 'Merkez dışındaki bağlantılarda canlı konum, yol zemini ve aracın güvenli bekleme durumu önem taşır.'],
      ['Hacımuratlı', 'outer', 'Kırsal bağlantı yollarında çekici yönlendirmesi için konum pini ve yakın yol ayrımı bilgisi gereklidir.'],
      ['Hacıhasan', 'outer', 'Yerleşim dışı veya tali yollarda aracın bulunduğu yön ve yol koşulları önceden paylaşılmalıdır.'],
      ['Ballıkpınar', 'outer', 'Uzun bağlantı yollarında canlı konum, araç tipi ve gidilecek teslim noktası süreci kolaylaştırır.'],
      ['Ahiboz', 'outer', 'Konya Yolu çevresi ve yerleşim bağlantılarında gidiş yönü ile yakın kavşak bilgisinin verilmesi önemlidir.'],
      ['Gaziosmanpaşa', 'residential', 'Gölbaşı merkezindeki konut ve cadde bağlantılarında sokak, araç yönü ve park durumu değerlendirilir.'],
      ['Karşıyaka', 'residential', 'Merkez ve konut yollarında araç konumu, servis adresi ve güvenli yükleme alanı birlikte planlanır.']
    ]
  },
  {
    districtSlug: 'kecioren',
    districtName: 'Keçiören',
    heroImageKey: 'stockRoadsideAssistance',
    items: [
      ['Etlik', 'commercial', 'Hastane, iş alanı ve yoğun konut bağlantılarında giriş kapısı ile yol yönü net paylaşılmalıdır.'],
      ['Aşağı Eğlence', 'central', 'Yoğun cadde ve ara sokaklarda park durumu ile çekicinin yaklaşabileceği yön önem taşır.'],
      ['Ayvalı', 'residential', 'Konut sokakları ve ana arter bağlantılarında araç konumu ile teslim noktası baştan netleştirilir.'],
      ['Ovacık', 'residential', 'Yeni yerleşim alanları, site girişleri ve çevre yolu bağlantılarında kapı veya blok bilgisi faydalıdır.'],
      ['Forum AVM', 'commercial', 'AVM otoparkında kat, sıra, giriş yüksekliği ve kullanılacak çıkış kapısı çekici seçiminde belirleyicidir.'],
      ['Bağlum', 'outer', 'Geniş yerleşim alanı ve merkez bağlantılarında canlı konum ile yol yönü doğru paylaşılmalıdır.'],
      ['Çaldıran', 'hillside', 'Eğimli konut sokaklarında yol genişliği, park yoğunluğu ve aracın duruş yönü önemlidir.'],
      ['Esertepe', 'hillside', 'Eğimli yollar ve yoğun konut dokusunda aracın bulunduğu sokak ile yaklaşım yönü değerlendirilir.'],
      ['Yükseltepe', 'hillside', 'Yüksek kotlu ve eğimli bağlantılarda yol zemini, sokak genişliği ve araç yönü paylaşılmalıdır.'],
      ['Ufuktepe', 'hillside', 'Eğimli mahalle yollarında güvenli yükleme alanı ve çekicinin yaklaşabileceği yön önceden belirlenir.'],
      ['Sancaktepe', 'hillside', 'Konut sokaklarındaki eğim ve park yoğunluğu araç alım yöntemini etkileyebilir.'],
      ['Kafkas', 'residential', 'Site ve konut bağlantılarında açık adresin yanında blok, giriş veya yakın referans bilgisi verilmelidir.'],
      ['Karakaya', 'hillside', 'Eğimli ve yer yer dar sokaklarda aracın çalışır durumu ile yol genişliği önem taşır.'],
      ['Yayla', 'residential', 'Yoğun konut alanlarında sokak girişi, park durumu ve teslim edilecek servis bilgisi paylaşılmalıdır.'],
      ['Yakacık', 'outer', 'Merkez dışı bağlantılarda canlı konum, yol yönü ve yakın kavşak bilgisi yönlendirmeyi kolaylaştırır.'],
      ['Kalaba', 'central', 'Merkez bağlantıları ve yoğun sokaklarda kısa süreli yükleme alanı ile trafik yönü dikkate alınır.'],
      ['İncirli', 'central', 'Cadde trafiği ve konut sokaklarında araç yönü, park yoğunluğu ve yakın referans noktası önemlidir.'],
      ['Basınevleri', 'residential', 'Konut ve iş alanı bağlantılarında bina girişi, sokak yönü ve aracın hareket durumu netleştirilir.']
    ]
  },
  {
    districtSlug: 'etimesgut',
    districtName: 'Etimesgut',
    heroImageKey: 'districtGallery5',
    items: [
      ['Bağlıca', 'residential', 'Site girişleri, bulvar bağlantıları ve geniş yerleşim alanında blok ile kapı bilgisi önemlidir.'],
      ['Eryaman', 'residential', 'Büyük site bölgeleri, kapalı otoparklar ve geniş bulvarlarda etap veya blok bilgisi paylaşılmalıdır.'],
      ['Elvankent', 'residential', 'Konut alanları ve ana yol bağlantılarında araç konumu ile gidilecek servis baştan netleştirilir.'],
      ['Süvari', 'residential', 'Konut sokaklarında park durumu, bina girişi ve çekicinin yaklaşabileceği yön önem taşır.'],
      ['Piyade', 'residential', 'Yerleşim içi sokaklar ve Etimesgut merkez bağlantılarında açık konum yönlendirmeyi kolaylaştırır.'],
      ['Ahi Mesgut', 'commercial', 'Sanayi, iş alanı ve konut bağlantılarında servis adı, giriş kapısı ve araç tipi bilgisi faydalıdır.'],
      ['Topçu', 'residential', 'Konut yollarında sokak yönü, park yoğunluğu ve aracın çalışır durumu birlikte değerlendirilir.'],
      ['Alsancak', 'residential', 'Site ve apartman otoparklarında giriş yüksekliği ile rampa koşulları önceden paylaşılmalıdır.'],
      ['Göksu', 'residential', 'Park çevresi, site girişleri ve bulvar bağlantılarında konumun giriş yönüyle birlikte iletilmesi önemlidir.'],
      ['Atakent', 'residential', 'Konut ve site yollarında blok, kapı ve yakın cadde bilgisi çekici yönlendirmesini hızlandırır.'],
      ['Elvan', 'residential', 'Yerleşim içi bağlantılarda araç yönü, sokak genişliği ve teslim noktası netleştirilmelidir.'],
      ['Tunahan', 'residential', 'Eryaman çevresindeki site ve bulvar bağlantılarında etap ya da blok bilgisi paylaşılması faydalıdır.'],
      ['30 Ağustos', 'central', 'Etimesgut merkezine bağlanan yoğun caddelerde yol yönü ve güvenli yükleme noktası önemlidir.'],
      ['Kazım Karabekir', 'central', 'Merkez trafiği ve konut sokaklarında araç konumu ile park durumu birlikte değerlendirilir.'],
      ['Altay', 'residential', 'Geniş konut alanları ve site bağlantılarında kapı, blok ve otopark çıkış bilgisi verilmelidir.'],
      ['Oğuzlar', 'residential', 'Konut yollarında canlı konum, araç tipi ve gidilecek servis veya otopark bilgisi süreci kolaylaştırır.']
    ]
  },
  {
    districtSlug: 'kizilcahamam',
    districtName: 'Kızılcahamam',
    heroImageKey: 'stockAnkaraRoad',
    items: [
      ['Merkez', 'central', 'Kızılcahamam merkezindeki cadde, çarşı ve konut bağlantılarında yol yönü ile güvenli yükleme noktası önemlidir.'],
      ['Çeltikçi', 'outer', 'Ankara–Kızılcahamam güzergâhına bağlanan yollarda canlı konum, gidiş yönü ve yakın kavşak bilgisi paylaşılmalıdır.'],
      ['Kocalar 1', 'outer', 'Yerleşim ve çevre yollarında araç konumu, yol zemini ve en yakın bilinen referans çekici yönlendirmesini kolaylaştırır.'],
      ['Kocalar 2', 'outer', 'Merkez dışındaki bağlantılarda canlı konumla birlikte aracın bulunduğu yön ve hareket durumu belirtilmelidir.'],
      ['Tatlak', 'outer', 'Kırsal bağlantı yollarında yol ayrımı, zemin koşulu ve aracın güvenli bekleme durumu önceden paylaşılmalıdır.'],
      ['Tatlar', 'outer', 'Kızılcahamam çevresindeki uzun bağlantılarda konum pini, araç tipi ve gidilecek teslim noktası önem taşır.'],
      ['Pazar', 'outer', 'İlçe merkezi dışındaki güzergâhlarda yakın kavşak, yol yönü ve araç durumu doğru yönlendirme için gereklidir.']
    ]
  },
  {
    districtSlug: 'kahramankazan',
    districtName: 'Kahramankazan',
    heroImageKey: 'districtGallery5',
    items: [
      ['Saray', 'commercial', 'Sanayi tesisleri, fabrika girişleri ve ana yol bağlantılarında kapı numarası ile tesis adı açıkça paylaşılmalıdır.'],
      ['Keresteciler', 'commercial', 'Kereste ve sanayi işletmelerinin bulunduğu sahalarda araç tipi, yükleme alanı ve tesis girişi önceden netleştirilir.'],
      ['Dempa Sanayi', 'commercial', 'Sanayi sitesi içinde blok, dükkân veya giriş kapısı bilgisi çekicinin doğru noktaya yönlendirilmesini sağlar.'],
      ['Akıncı', 'outer', 'İstanbul Yolu ve çevre bağlantılarında gidiş yönü, yakın kavşak ve aracın emniyetli bekleme konumu önemlidir.'],
      ['Fatih', 'residential', 'Konut ve merkez bağlantılarında sokak yönü, park durumu ve gidilecek servis bilgisi birlikte değerlendirilir.']
    ]
  },
  {
    districtSlug: 'ayas',
    districtName: 'Ayaş',
    heroImageKey: 'stockCarTransport',
    items: [
      ['Ayşantı', 'outer', 'Ayaş çevresindeki bağlantı yollarında canlı konum, yol yönü ve yakın referans noktası paylaşılmalıdır.'],
      ['Başbereket', 'outer', 'Kırsal yerleşim bağlantılarında yol zemini, araç tipi ve güvenli bekleme alanı çekici planını etkiler.'],
      ['Çanıllı', 'outer', 'Ayaş Yolu bağlantılarında gidiş yönü, yakın kavşak ve aracın bulunduğu nokta açık biçimde tarif edilmelidir.'],
      ['Çanıllı Uluyol', 'outer', 'Uzun yol ve yerleşim bağlantılarında canlı konumla birlikte yol yönü ile araç durumu iletilmelidir.'],
      ['Çanıllı Çiğdemci', 'outer', 'Çanıllı çevresindeki tali yollarda en yakın yol ayrımı, zemin koşulu ve araç konumu önemlidir.'],
      ['Başayaş', 'outer', 'Ayaş merkezine bağlanan güzergâhlarda konum pini, yakın referans ve teslim adresi süreci kolaylaştırır.'],
      ['Tekke', 'outer', 'Yerleşim dışı bağlantılarda yol zemini, aracın hareket kabiliyeti ve en yakın bilinen nokta paylaşılmalıdır.'],
      ['Ilıca', 'outer', 'Kaplıca ve çevre yollarında tesis veya yol girişi, canlı konum ve araç yönü çekici yönlendirmesinde kullanılır.'],
      ['Ortabereket', 'outer', 'Kırsal bağlantı yollarında yol ayrımı, araç tipi ve gidilecek servis ya da teslim noktası netleştirilmelidir.']
    ]
  }
];

export const neighborhoodPages: NeighborhoodPage[] = groups.flatMap((group) =>
  group.items.map(([name, profile, localContext]) => ({
    districtSlug: group.districtSlug,
    districtName: group.districtName,
    name,
    slug: slugify(name),
    profile,
    localContext,
    heroImageKey: group.heroImageKey
  }))
);

export const neighborhoodsByDistrict = new Map(
  groups.map((group) => [
    group.districtSlug,
    neighborhoodPages.filter((item) => item.districtSlug === group.districtSlug)
  ])
);

export const getNeighborhoodsForDistrict = (districtSlug: string) =>
  neighborhoodsByDistrict.get(districtSlug) ?? [];

export const getNearbyNeighborhoods = (page: NeighborhoodPage, limit = 5) => {
  const siblings = getNeighborhoodsForDistrict(page.districtSlug);
  const currentIndex = siblings.findIndex((item) => item.slug === page.slug);
  if (currentIndex < 0) return siblings.slice(0, limit);

  return Array.from({ length: Math.min(limit, siblings.length - 1) }, (_, offset) =>
    siblings[(currentIndex + offset + 1) % siblings.length]
  );
};
