export type ServiceDetail = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  useCase: string;
  href: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  details: ServiceDetail[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: 'acil-oto-cekici',
    title: '7/24 Acil Oto Çekici',
    description:
      'Ankara’da arıza, kaza veya yolda kalma durumlarında günün her saati çekici desteği.',
    useCase:
      'Araç hareket edemediğinde, güvenli noktaya alınması gerektiğinde veya servise taşınması gerektiğinde tercih edilir.',
    href: '/hizmetler/acil-oto-cekici/',
    seoTitle: 'Ankara Acil Oto Çekici | 7/24 Çekici Hizmeti',
    seoDescription:
      'Ankara’da 7/24 acil oto çekici desteği. Arıza, kaza veya yolda kalma durumunda konum paylaşarak hızlı ve güvenli taşıma süreci başlatabilirsiniz.',
    h1: 'Ankara Acil Oto Çekici Hizmeti',
    intro:
      'Acil oto çekici ihtiyacı çoğu zaman beklenmedik anda ortaya çıkar. Konum, araç durumu ve gidilecek nokta netleştiğinde aracın güvenli şekilde taşınması için uygun süreç planlanır.',
    details: [
      {
        title: 'Konum ve yol yönü',
        description:
          'Ana yol, cadde, otopark veya site içinde bulunuyorsanız canlı konumla birlikte yol yönü ve yakın referans noktası paylaşmanız yönlendirmeyi kolaylaştırır.'
      },
      {
        title: 'Araç durumu',
        description:
          'Aracın çalışıp çalışmadığı, vitesin boşa alınıp alınamadığı, lastik ve direksiyon durumu taşıma yaklaşımını belirler.'
      },
      {
        title: 'Teslim noktası',
        description:
          'Araç servis, otopark, ev adresi veya belirlediğiniz güvenli noktaya taşınabilir. Teslim adresinin baştan netleşmesi süreci hızlandırır.'
      }
    ],
    faqs: [
      {
        question: 'Acil oto çekici çağırırken hangi bilgileri vermeliyim?',
        answer:
          'Konum, araç tipi, aracın çalışıp çalışmadığı, yol yönü ve gidilecek adres bilgisi çoğu durumda yeterlidir.'
      },
      {
        question: 'Gece saatlerinde acil çekici hizmeti alınabilir mi?',
        answer:
          'Evet. 7/24 ulaşılabilir destek sunulur; gece taleplerinde güvenli bekleme noktası ve görünürlük bilgisi özellikle önemlidir.'
      },
      {
        question: 'Acil çekici fiyatı nasıl belirlenir?',
        answer:
          'Fiyat mesafe, araç tipi, aracın durumu ve bulunduğu konuma göre netleşir. Konum ve teslim adresi paylaşıldığında daha sağlıklı bilgi verilebilir.'
      }
    ],
    relatedSlugs: ['yol-yardim', 'kaza-sonrasi-arac-cekimi', 'servis-otopark-arac-tasima']
  },
  {
    slug: 'oto-kurtarma',
    title: 'Oto Kurtarma',
    description:
      'Zorlu konumlarda kalan araçlar için kontrollü ve araç güvenliğini önceleyen kurtarma yaklaşımı.',
    useCase:
      'Araç park alanı, yol kenarı, eğimli zemin veya erişimi zor bir noktada kaldığında ihtiyaç duyulur.',
    href: '/hizmetler/oto-kurtarma/',
    seoTitle: 'Ankara Oto Kurtarma | Güvenli Araç Kurtarma Hizmeti',
    seoDescription:
      'Ankara’da oto kurtarma desteği. Eğimli yol, dar sokak, otopark veya zorlu konumlarda kalan araçlar için güvenli taşıma yaklaşımı.',
    h1: 'Ankara Oto Kurtarma Hizmeti',
    intro:
      'Oto kurtarma taleplerinde aracın yalnızca nerede kaldığı değil, bulunduğu zeminin ve çevrenin durumu da önemlidir. Araç güvenliği için konum ve erişim koşulları birlikte değerlendirilir.',
    details: [
      {
        title: 'Zorlu konum değerlendirmesi',
        description:
          'Eğim, sokak genişliği, park durumu, otopark rampası ve aracın hareket kabiliyeti kurtarma planını etkiler.'
      },
      {
        title: 'Kontrollü taşıma',
        description:
          'Araç hasarlı, kilitli, alçak veya lastiği dönmüyor olabilir. Bu bilgiler baştan paylaşıldığında uygun yaklaşım seçilir.'
      },
      {
        title: 'Güvenli teslim',
        description:
          'Kurtarma sonrası araç servis, otopark veya belirlediğiniz güvenli teslim noktasına yönlendirilir.'
      }
    ],
    faqs: [
      {
        question: 'Oto kurtarma ile oto çekici aynı şey mi?',
        answer:
          'Her talep aynı değildir. Oto kurtarma daha çok aracın bulunduğu konumdan güvenli şekilde alınmasını gerektiren durumları ifade eder.'
      },
      {
        question: 'Eğimli veya dar sokakta kalan araç için ne bilgi gerekir?',
        answer:
          'Sokak genişliği, eğim, aracın yönü, park durumu ve canlı konum bilgisi paylaşılmalıdır.'
      },
      {
        question: 'Kapalı otoparktan oto kurtarma yapılabilir mi?',
        answer:
          'Otopark giriş yüksekliği, rampa durumu ve aracın bulunduğu kat bilgisi öğrenilerek uygun çözüm değerlendirilir.'
      }
    ],
    relatedSlugs: ['acil-oto-cekici', 'servis-otopark-arac-tasima', 'yol-yardim']
  },
  {
    slug: 'yol-yardim',
    title: 'Acil Yol Yardım',
    description:
      'Beklenmeyen yol problemlerinde hızlı iletişim, doğru yönlendirme ve pratik destek.',
    useCase:
      'Arıza, lastik, akü, kilitlenme veya güvenli bekleme noktası ihtiyacı gibi durumlarda değerlendirilir.',
    href: '/hizmetler/yol-yardim/',
    seoTitle: 'Ankara Yol Yardım | 7/24 Acil Yol Yardım Desteği',
    seoDescription:
      'Ankara’da 7/24 yol yardım desteği. Arıza, lastik, akü, yolda kalma ve çekici ihtiyacı için konum paylaşarak destek alabilirsiniz.',
    h1: 'Ankara Acil Yol Yardım Hizmeti',
    intro:
      'Yol yardım talebinde önce aracın güvenli bekleme koşulları, teknik durumu ve çekici gerekip gerekmediği netleştirilir. Böylece doğru çözüm için gereksiz zaman kaybı azaltılır.',
    details: [
      {
        title: 'İlk bilgi alma',
        description:
          'Arıza türü, uyarı ışıkları, lastik durumu, akü belirtisi ve aracın bulunduğu konum hızlıca değerlendirilir.'
      },
      {
        title: 'Güvenli bekleme',
        description:
          'Ana yolda, gece veya düşük görüşte bekliyorsanız yol yönü ve güvenli alan bilgisi özellikle önemlidir.'
      },
      {
        title: 'Çekici ihtiyacının netleşmesi',
        description:
          'Araç yerinde çözülemeyecek durumdaysa servis, otopark veya uygun teslim noktasına taşıma planlanır.'
      }
    ],
    faqs: [
      {
        question: 'Yol yardım mı çekici mi gerektiğini nasıl anlarım?',
        answer:
          'Araç hareket edemiyor, güvenli sürüş mümkün değil veya kaza/teknik risk varsa çekici daha doğru seçenek olabilir.'
      },
      {
        question: 'Yol yardım için konum göndermek yeterli mi?',
        answer:
          'Konum çok önemlidir; ayrıca aracın sorunu, yol yönü ve güvenli bekleme alanı bilgisi paylaşılmalıdır.'
      },
      {
        question: 'Gece yol yardım talebi alınır mı?',
        answer:
          'Evet. Gece taleplerinde yakın referans noktası, aydınlık bekleme alanı ve aracın görünürlüğü bilgisi faydalıdır.'
      }
    ],
    relatedSlugs: ['acil-oto-cekici', 'oto-kurtarma', 'kaza-sonrasi-arac-cekimi']
  },
  {
    slug: 'kaza-sonrasi-arac-cekimi',
    title: 'Kaza Sonrası Araç Çekimi',
    description:
      'Kaza sonrası hareket edemeyen aracın servis, otopark veya uygun teslim noktasına taşınması.',
    useCase:
      'Trafik kazası sonrası aracın yol güvenliğini riske atmadan bulunduğu yerden alınması gerektiğinde gerekir.',
    href: '/hizmetler/kaza-sonrasi-arac-cekimi/',
    seoTitle: 'Kaza Sonrası Araç Çekimi | Ankara Oto Kurtarma',
    seoDescription:
      'Ankara’da kaza sonrası araç çekimi. Hasarlı, hareket edemeyen veya güvenli taşınması gereken araçlar için servis ve otopark taşıma desteği.',
    h1: 'Ankara Kaza Sonrası Araç Çekimi',
    intro:
      'Kaza sonrası araç çekiminde ilk öncelik can güvenliği ve resmi sürecin tamamlanmasıdır. Sonrasında aracın hasar durumu ve teslim noktası dikkate alınarak taşıma planlanır.',
    details: [
      {
        title: 'Hasar bilgisinin paylaşılması',
        description:
          'Ön takım, aks, lastik, tampon, sıvı akışı veya aracın yürür durumu taşıma yöntemini etkiler.'
      },
      {
        title: 'Resmi süreçlere uyum',
        description:
          'Tutanak veya resmi yönlendirme gereken durumlarda araç taşınmadan önce gerekli işlemler dikkate alınmalıdır.'
      },
      {
        title: 'Servis veya otopark teslimi',
        description:
          'Teslim alınacak servis, otopark ya da güvenli adres bilgisi netleştiğinde süreç daha kontrollü ilerler.'
      }
    ],
    faqs: [
      {
        question: 'Kaza sonrası araç hemen çekilmeli mi?',
        answer:
          'Önce can güvenliği ve gerekli resmi işlemler değerlendirilmelidir. Ardından aracın durumu ve teslim noktası netleştirilir.'
      },
      {
        question: 'Hasarlı aracın hangi bilgileri paylaşılmalı?',
        answer:
          'Darbe bölgesi, tekerleklerin dönüp dönmediği, sıvı akışı, direksiyon ve vites durumu paylaşılmalıdır.'
      },
      {
        question: 'Kaza sonrası araç servise taşınabilir mi?',
        answer:
          'Evet. Servis adı, açık adres ve teslim alacak kişi bilgisiyle taşıma planı oluşturulabilir.'
      }
    ],
    relatedSlugs: ['acil-oto-cekici', 'oto-kurtarma', 'servis-otopark-arac-tasima']
  },
  {
    slug: 'sehirlerarasi-arac-tasima',
    title: 'Şehirlerarası Araç Taşıma',
    description:
      'Ankara çıkışlı veya Ankara varışlı planlı şehirlerarası araç taşıma desteği.',
    useCase:
      'Aracın farklı bir şehirdeki servis, alıcı, satıcı veya teslim noktasına götürülmesi gerektiğinde uygundur.',
    href: '/hizmetler/sehirlerarasi-arac-tasima/',
    seoTitle: 'Şehirlerarası Araç Taşıma | Ankara Araç Nakli',
    seoDescription:
      'Ankara çıkışlı veya Ankara varışlı şehirlerarası araç taşıma. Planlı servis, satış sonrası teslim ve uzun yola çıkamayacak araçlar için taşıma desteği.',
    h1: 'Ankara Şehirlerarası Araç Taşıma',
    intro:
      'Şehirlerarası araç taşıma daha planlı ilerleyen bir süreçtir. Alınacak adres, teslim noktası, araç durumu ve rota bilgisi baştan netleştiğinde taşıma daha güvenli yapılır.',
    details: [
      {
        title: 'Rota ve teslim planı',
        description:
          'Araç hangi şehirden alınacak, nereye teslim edilecek ve teslim alacak kişi kim olacak bilgileri netleştirilir.'
      },
      {
        title: 'Araç hazırlığı',
        description:
          'Aracın çalışıp çalışmadığı, lastiklerin dönebilmesi, anahtar ve kişisel eşya durumu taşıma öncesi kontrol edilmelidir.'
      },
      {
        title: 'Planlı teslim',
        description:
          'Servis çalışma saatleri, otopark girişi veya teslim alanı uygunluğu önceden konuşulduğunda süreç rahat ilerler.'
      }
    ],
    faqs: [
      {
        question: 'Şehirlerarası araç taşıma hangi durumlarda gerekir?',
        answer:
          'Uzun yola çıkamayacak araçlar, satın alınan araç teslimleri, şehir dışı servis ihtiyaçları veya planlı nakiller için tercih edilebilir.'
      },
      {
        question: 'Araç çalışmıyorsa şehir dışına taşınabilir mi?',
        answer:
          'Araç durumu, lastik ve direksiyon bilgisi paylaşıldığında uygun taşıma yaklaşımı değerlendirilir.'
      },
      {
        question: 'Fiyat nasıl belirlenir?',
        answer:
          'Rota, mesafe, araç tipi, aracın yürür durumda olup olmaması ve teslim koşullarına göre netleşir.'
      }
    ],
    relatedSlugs: ['acil-oto-cekici', 'servis-otopark-arac-tasima', 'oto-kurtarma']
  },
  {
    slug: 'motosiklet-cekici',
    title: 'Motosiklet Çekici',
    description:
      'Motosikletler için hassas sabitleme ve dikkatli taşıma süreci.',
    useCase:
      'Motosiklet arızası, kaza veya servis taşıması gibi durumlarda güvenli nakil için kullanılır.',
    href: '/hizmetler/motosiklet-cekici/',
    seoTitle: 'Ankara Motosiklet Çekici | Motor Taşıma Hizmeti',
    seoDescription:
      'Ankara’da motosiklet çekici ve motor taşıma desteği. Arıza, kaza veya servis taşıması için güvenli sabitleme ve taşıma yaklaşımı.',
    h1: 'Ankara Motosiklet Çekici Hizmeti',
    intro:
      'Motosiklet taşıma süreci otomobil çekiminden farklı dikkat ister. Sabitleme, denge, hasar riski ve teslim noktası birlikte değerlendirilir.',
    details: [
      {
        title: 'Güvenli sabitleme',
        description:
          'Motosikletin taşıma sırasında dengede kalması ve temas noktalarının doğru korunması önemlidir.'
      },
      {
        title: 'Arıza veya kaza durumu',
        description:
          'Motorun yürür durumu, tekerlek ve gidon bilgisi taşıma yaklaşımını etkiler.'
      },
      {
        title: 'Servis taşıması',
        description:
          'Motosiklet servis, otopark veya belirttiğiniz güvenli teslim noktasına taşınabilir.'
      }
    ],
    faqs: [
      {
        question: 'Motosiklet çekici hizmeti 7/24 alınabilir mi?',
        answer:
          'Evet. Konum ve motosiklet durumu paylaşıldığında taşıma talebi değerlendirilir.'
      },
      {
        question: 'Kaza yapan motosiklet taşınabilir mi?',
        answer:
          'Hasar, teker ve gidon durumu paylaşılarak güvenli taşıma yaklaşımı belirlenir.'
      },
      {
        question: 'Motosiklet servise götürülebilir mi?',
        answer:
          'Evet. Servis adı ve açık adres bilgisiyle taşıma planlanabilir.'
      }
    ],
    relatedSlugs: ['acil-oto-cekici', 'yol-yardim', 'servis-otopark-arac-tasima']
  },
  {
    slug: 'servis-otopark-arac-tasima',
    title: 'Servis / Otopark Araç Taşıma',
    description:
      'Aracınızı servis, otopark veya belirlediğiniz teslim noktasına güvenle ulaştırma.',
    useCase:
      'Randevulu servis işlemleri, muayene, otopark teslimi veya planlı araç nakli için tercih edilir.',
    href: '/hizmetler/servis-otopark-arac-tasima/',
    seoTitle: 'Servis ve Otopark Araç Taşıma | Ankara Çekici',
    seoDescription:
      'Ankara’da servis, otopark ve planlı araç taşıma desteği. Çalışmayan, randevulu servise gidecek veya otoparktan alınacak araçlar için çözüm.',
    h1: 'Ankara Servis ve Otopark Araç Taşıma',
    intro:
      'Servis ve otopark taşıma taleplerinde zaman, giriş koşulları ve teslim bilgisi önemlidir. Planlı ilerlemek aracın doğru noktaya güvenle ulaştırılmasını sağlar.',
    details: [
      {
        title: 'Servis randevusu',
        description:
          'Servis adı, açık adres, giriş noktası ve teslim alacak kişi bilgisi taşıma sürecini hızlandırır.'
      },
      {
        title: 'Otopark koşulları',
        description:
          'Kapalı otoparklarda giriş yüksekliği, rampa eğimi, kat bilgisi ve aracın çalışıp çalışmadığı paylaşılmalıdır.'
      },
      {
        title: 'Planlı taşıma',
        description:
          'Araç ev, site, iş yeri, otopark veya servis arasında belirlenen programa göre taşınabilir.'
      }
    ],
    faqs: [
      {
        question: 'Kapalı otoparktan araç alınabilir mi?',
        answer:
          'Otopark yüksekliği, rampa ve aracın durumu uygunsa taşıma değerlendirilebilir. Bu bilgiler baştan paylaşılmalıdır.'
      },
      {
        question: 'Servis randevusu için araç taşınabilir mi?',
        answer:
          'Evet. Randevu saati, servis adresi ve teslim bilgisiyle planlı taşıma yapılabilir.'
      },
      {
        question: 'Çalışmayan araç otoparktan servise götürülür mü?',
        answer:
          'Araç durumu ve otopark koşulları değerlendirilerek uygun taşıma süreci planlanır.'
      }
    ],
    relatedSlugs: ['acil-oto-cekici', 'oto-kurtarma', 'sehirlerarasi-arac-tasima']
  }
];

export const serviceBySlug = new Map(services.map((service) => [service.slug, service]));
