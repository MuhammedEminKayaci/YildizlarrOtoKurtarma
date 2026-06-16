export type DistrictSeoEnhancement = {
  slug: string;
  focusTitle: string;
  focusIntro: string;
  routeNotes: string[];
  serviceLinks: {
    title: string;
    description: string;
    href: string;
  }[];
  callout: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
};

export const districtSeoEnhancements: DistrictSeoEnhancement[] = [
  {
    slug: 'cankaya',
    focusTitle: 'Çankaya’da çekici planı neden bölgeye göre değişir?',
    focusIntro:
      'Çankaya’da çekici ihtiyacı çoğu zaman ana arter trafiği, kapalı otopark girişi veya iş merkezi çevresindeki duraklama koşullarıyla birlikte değerlendirilir. Kızılay, Balgat, Çukurambar ve Dikmen hattında aracın tam konumu kadar bulunduğu yön de önemlidir.',
    routeNotes: [
      'Kızılay, Bahçelievler ve Emek çevresinde cadde yönü ile yakın bina bilgisi yönlendirmeyi hızlandırır.',
      'Balgat ve Çukurambar tarafında kapalı otopark yüksekliği, rampa eğimi ve güvenlik noktası önceden paylaşılmalıdır.',
      'Konya Yolu, Eskişehir Yolu ve Turan Güneş Bulvarı gibi ana bağlantılarda emniyet şeridi veya cep bilgisi önem taşır.'
    ],
    serviceLinks: [
      {
        title: 'Acil oto çekici',
        description: 'Merkezi noktalarda arıza veya kaza sonrası hızlı yönlendirme için uygundur.',
        href: '/hizmetler/acil-oto-cekici/'
      },
      {
        title: 'Servis ve otopark araç taşıma',
        description: 'İş merkezi, site otoparkı ve servis randevusu olan araçlarda tercih edilir.',
        href: '/hizmetler/servis-otopark-arac-tasima/'
      },
      {
        title: 'Kaza sonrası araç çekimi',
        description: 'Ana arterlerde hareket edemeyen aracın güvenli noktaya alınmasına odaklanır.',
        href: '/hizmetler/kaza-sonrasi-arac-cekimi/'
      }
    ],
    callout:
      'Çankaya’dan çekici çağırırken canlı konum, gidilecek servis ve aracın otoparkta mı yolda mı olduğu bilgisi süreci belirgin şekilde netleştirir.',
    faqs: [
      {
        question: 'Çankaya çekici fiyatı hangi bilgilere göre netleşir?',
        answer:
          'Çankaya’da çekici fiyatı alınacak nokta, gidilecek mesafe, aracın yürür durumda olup olmadığı, otopark koşulu ve taşıma saatine göre netleşir.'
      },
      {
        question: 'Çankaya’da kapalı otoparktan araç çekimi için ne bilgi gerekir?',
        answer:
          'Otopark giriş yüksekliği, kat bilgisi, rampa durumu, aracın çalışıp çalışmadığı ve çıkış alanının uygunluğu paylaşılmalıdır.'
      }
    ]
  },
  {
    slug: 'kecioren',
    focusTitle: 'Keçiören’de dar sokak ve eğimli yol bilgisi kritik olabilir',
    focusIntro:
      'Keçiören’de çekici sürecini belirleyen ana konu çoğu zaman aracın bulunduğu sokağın genişliği, yol eğimi ve park durumudur. Etlik, Ovacık, Bağlum, Aktepe ve Sanatoryum çevresinde doğru tarif çekici yaklaşımını kolaylaştırır.',
    routeNotes: [
      'Eğimli sokaklarda aracın burnunun hangi yöne baktığı ve el freninin durumu paylaşılmalıdır.',
      'Dar sokaklarda karşılıklı park yoğunluğu varsa çekicinin yaklaşabileceği en uygun giriş noktası belirtilmelidir.',
      'Bağlum ve Ovacık çevresinde cadde adıyla birlikte yakın site, okul veya kavşak bilgisi faydalı olur.'
    ],
    serviceLinks: [
      {
        title: 'Oto kurtarma',
        description: 'Sokak, rampa veya zor erişimli noktalarda hareket edemeyen araçlar için değerlendirilir.',
        href: '/hizmetler/oto-kurtarma/'
      },
      {
        title: 'Yol yardım',
        description: 'Aracın çekici mi yoksa yerinde destek mi gerektirdiği ilk görüşmede netleştirilebilir.',
        href: '/hizmetler/yol-yardim/'
      },
      {
        title: 'Acil oto çekici',
        description: 'Gece veya yoğun saatlerde yolda kalan araçlar için hızlı iletişim sağlar.',
        href: '/hizmetler/acil-oto-cekici/'
      }
    ],
    callout:
      'Keçiören’de konumla birlikte sokak genişliği ve yol eğimi bilgisini vermek doğru araç yönlendirmesi açısından değerlidir.',
    faqs: [
      {
        question: 'Keçiören’de dar sokaktan araç çekimi yapılabilir mi?',
        answer:
          'Sokak genişliği, park yoğunluğu, aracın yönü ve çekicinin yaklaşabileceği giriş noktası öğrenilerek uygun çözüm değerlendirilir.'
      },
      {
        question: 'Keçiören çekici fiyatı eğimli sokakta değişir mi?',
        answer:
          'Eğimli veya zor erişimli noktalarda taşıma yaklaşımı farklılaşabilir. Bu nedenle konum, eğim ve araç durumu fiyat bilgisini etkileyebilir.'
      }
    ]
  },
  {
    slug: 'yenimahalle',
    focusTitle: 'Yenimahalle’de sanayi ve servis bağlantıları öne çıkar',
    focusIntro:
      'Yenimahalle’de oto çekici talepleri Batıkent ve Demetevler gibi konut bölgelerinin yanında Ostim, İvedik ve servis yoğunluğu olan iş alanlarında da sıklaşır. Bu nedenle teslim noktası ve araç tipi bilgisi taşıma planını doğrudan etkiler.',
    routeNotes: [
      'Ostim ve İvedik tarafında sanayi sitesi kapısı, blok adı veya servis unvanı açık paylaşılmalıdır.',
      'İstanbul Yolu ve Anadolu Bulvarı bağlantılarında aracın yolun hangi tarafında kaldığı belirtilmelidir.',
      'Batıkent ve Demetevler çevresinde site içi otopark, kapı numarası ve giriş yüksekliği bilgisi iş planını kolaylaştırır.'
    ],
    serviceLinks: [
      {
        title: 'Servis ve otopark araç taşıma',
        description: 'Servis randevusu, sanayi teslimi veya otopark çıkışı gereken araçlar için uygundur.',
        href: '/hizmetler/servis-otopark-arac-tasima/'
      },
      {
        title: 'Acil oto çekici',
        description: 'İş çıkışı saatlerinde ya da ana bağlantılarda kalan araçlarda hızlı çözüm sağlar.',
        href: '/hizmetler/acil-oto-cekici/'
      },
      {
        title: 'Şehirlerarası araç taşıma',
        description: 'Yenimahalle’den Ankara dışına planlı araç taşıma taleplerinde rota netleştirilir.',
        href: '/hizmetler/sehirlerarasi-arac-tasima/'
      }
    ],
    callout:
      'Yenimahalle’de servis adı, teslim saati ve araç durumu baştan paylaşıldığında bekleme ve yanlış yönlendirme riski azalır.',
    faqs: [
      {
        question: 'Yenimahalle’den Ostim veya İvedik sanayiye araç taşınır mı?',
        answer:
          'Evet. Servis adı, sanayi sitesi girişi, blok veya teslim noktası bilgisi paylaşılırsa taşıma süreci daha net planlanır.'
      },
      {
        question: 'Yenimahalle çekici ücretinde servis teslimi etkili olur mu?',
        answer:
          'Alınacak konum, teslim servisi, mesafe, aracın durumu ve bekleme ihtimali ücret bilgisini etkileyen temel unsurlardır.'
      }
    ]
  },
  {
    slug: 'etimesgut',
    focusTitle: 'Etimesgut’ta site otoparkı ve çevre bağlantıları önemlidir',
    focusIntro:
      'Etimesgut’ta çekici ihtiyaçları Eryaman, Elvankent, Bağlıca ve Yapracık gibi geniş konut bölgeleri ile İstanbul Yolu, Ayaş Yolu ve çevre bağlantıları arasında yoğunlaşır. Site içi konum ve giriş bilgisi planlamayı kolaylaştırır.',
    routeNotes: [
      'Site içi otoparklarda blok adı, kapı numarası, bariyer girişi ve varsa tavan yüksekliği paylaşılmalıdır.',
      'Bağlıca ve Yapracık tarafında yeni yerleşimlerde canlı konumla birlikte yakın cadde adı faydalıdır.',
      'Ayaş Yolu ve İstanbul Yolu bağlantılarında aracın emniyetli bekleme noktası özellikle belirtilmelidir.'
    ],
    serviceLinks: [
      {
        title: 'Acil oto çekici',
        description: 'Ana yol veya konut bölgesi fark etmeksizin yolda kalma durumları için kullanılır.',
        href: '/hizmetler/acil-oto-cekici/'
      },
      {
        title: 'Servis ve otopark araç taşıma',
        description: 'Site otoparkı, kapalı otopark ve servis teslimlerinde uygun bir çözümdür.',
        href: '/hizmetler/servis-otopark-arac-tasima/'
      },
      {
        title: 'Yol yardım',
        description: 'Akü, lastik veya basit arıza şüphesinde çekici ihtiyacı görüşmede netleşir.',
        href: '/hizmetler/yol-yardim/'
      }
    ],
    callout:
      'Etimesgut’ta özellikle site içi yönlendirme için blok, giriş kapısı ve otopark bilgisi çekicinin doğru noktaya ulaşmasını sağlar.',
    faqs: [
      {
        question: 'Etimesgut’ta site otoparkından araç çekimi nasıl planlanır?',
        answer:
          'Site adı, blok, kapı girişi, otopark yüksekliği ve aracın bulunduğu kat bilgisi alınarak çekicinin yaklaşım planı netleştirilir.'
      },
      {
        question: 'Eryaman veya Bağlıca’dan acil çekici çağırırken ne paylaşmalıyım?',
        answer:
          'Canlı konum, cadde veya site adı, aracın çalışıp çalışmadığı ve gidilecek servis bilgisi paylaşmanız süreci hızlandırır.'
      }
    ]
  },
  {
    slug: 'sincan',
    focusTitle: 'Sincan’da OSB, Temelli ve ana yol rotaları belirleyici olur',
    focusIntro:
      'Sincan’da oto çekici planlamasında organize sanayi bölgeleri, Temelli hattı, Ayaş Yolu ve şehir dışı bağlantılar sık rol oynar. Ticari araç, servis teslimi veya uzun mesafe taşıma taleplerinde rota bilgisinin net olması gerekir.',
    routeNotes: [
      'OSB çevresinde kapı, fabrika adı, parsel veya servis noktası bilgisi konum doğruluğunu artırır.',
      'Temelli ve çevre bağlantılarında yolun yönü, dönüş noktası ve bekleme güvenliği belirtilmelidir.',
      'Ticari araçlarda araç tipi, yük durumu ve hareket edip etmediği önceden paylaşılmalıdır.'
    ],
    serviceLinks: [
      {
        title: 'Şehirlerarası araç taşıma',
        description: 'Sincan çıkışlı uzun rota veya il dışı teslimlerde planlı taşıma için uygundur.',
        href: '/hizmetler/sehirlerarasi-arac-tasima/'
      },
      {
        title: 'Servis ve otopark araç taşıma',
        description: 'OSB, servis veya filo teslimlerinde araç durumuna göre planlanır.',
        href: '/hizmetler/servis-otopark-arac-tasima/'
      },
      {
        title: 'Acil oto çekici',
        description: 'Ayaş Yolu ve bağlantılarda kalan araçlar için ilk iletişim noktasıdır.',
        href: '/hizmetler/acil-oto-cekici/'
      }
    ],
    callout:
      'Sincan’da rota ve teslim noktası netliği fiyat, süre ve doğru çekici seçimi açısından en kritik bilgidir.',
    faqs: [
      {
        question: 'Sincan OSB’den servis veya sanayiye araç taşıma yapılır mı?',
        answer:
          'Evet. OSB kapısı, firma adı, parsel veya servis noktası paylaşıldığında araç taşıma süreci daha doğru planlanır.'
      },
      {
        question: 'Sincan’dan şehirlerarası araç taşıma fiyatı nasıl belirlenir?',
        answer:
          'Rota, mesafe, teslim noktası, araç tipi ve aracın hareket edip etmediği bilgileri şehirlerarası taşıma fiyatını belirler.'
      }
    ]
  },
  {
    slug: 'golbasi',
    focusTitle: 'Gölbaşı’nda çevre yolu, İncek ve Konya Yolu hattı öne çıkar',
    focusIntro:
      'Gölbaşı’nda çekici ihtiyacı şehir içi yoğunluktan çok Konya Yolu, çevre yolu bağlantıları, İncek hattı ve mesafeli güzergahlarla ilişkilidir. Bu nedenle yön, kilometre ve güvenli bekleme noktası bilgisi daha belirleyici olur.',
    routeNotes: [
      'Konya Yolu üzerinde aracın Ankara yönünde mi Konya yönünde mi kaldığı mutlaka belirtilmelidir.',
      'İncek ve Taşpınar çevresinde site, kampüs veya cadde adı canlı konumla birlikte paylaşılmalıdır.',
      'Çevre yolu bağlantılarında aracın çekici bekleyebileceği güvenli cep veya çıkış bilgisi önemlidir.'
    ],
    serviceLinks: [
      {
        title: 'Acil oto çekici',
        description: 'Ana yol ve çevre yolu bağlantılarındaki yolda kalma durumları için uygundur.',
        href: '/hizmetler/acil-oto-cekici/'
      },
      {
        title: 'Şehirlerarası araç taşıma',
        description: 'Gölbaşı çıkışlı uzun mesafe taşımalarda rota ve teslim noktası netleştirilir.',
        href: '/hizmetler/sehirlerarasi-arac-tasima/'
      },
      {
        title: 'Kaza sonrası araç çekimi',
        description: 'Konya Yolu veya çevre bağlantılarında kaza sonrası kontrollü taşıma için değerlendirilir.',
        href: '/hizmetler/kaza-sonrasi-arac-cekimi/'
      }
    ],
    callout:
      'Gölbaşı’nda çekici çağırırken yol yönünü ve en yakın çıkış ya da kavşak bilgisini paylaşmak zaman kazandırır.',
    faqs: [
      {
        question: 'Gölbaşı Konya Yolu üzerinde çekici çağırırken ne bilgi gerekir?',
        answer:
          'Aracın Ankara yönünde mi Konya yönünde mi kaldığı, en yakın çıkış, kavşak veya güvenli bekleme noktası bilgisi paylaşılmalıdır.'
      },
      {
        question: 'Gölbaşı’ndan Ankara dışına araç taşıma yapılır mı?',
        answer:
          'Evet. Teslim adresi, rota, araç tipi ve aracın durumu netleştiğinde şehirlerarası veya uzun mesafe taşıma talebi değerlendirilebilir.'
      }
    ]
  },
  {
    slug: 'mamak',
    focusTitle: 'Mamak’ta eğimli yollar ve Samsun Yolu bağlantısı dikkate alınır',
    focusIntro:
      'Mamak’ta oto çekici talepleri hem konut bölgelerindeki eğimli yollar hem de Samsun Yolu, Natoyolu ve çevre bağlantılarında oluşan arıza veya kaza durumlarıyla ilgilidir. Bölge bilgisinin net verilmesi uygun yaklaşımı belirler.',
    routeNotes: [
      'Natoyolu ve çevresinde sokak yönü, rampa bilgisi ve park yoğunluğu paylaşılmalıdır.',
      'Samsun Yolu bağlantılarında aracın yönü ve güvenli durduğu nokta özellikle belirtilmelidir.',
      'Konut bölgelerinde site girişi, apartman önü ve çekicinin yanaşabileceği alan bilgisi önem taşır.'
    ],
    serviceLinks: [
      {
        title: 'Oto kurtarma',
        description: 'Eğimli veya zor erişimli noktalarda hareket edemeyen araçlar için değerlendirilir.',
        href: '/hizmetler/oto-kurtarma/'
      },
      {
        title: 'Kaza sonrası araç çekimi',
        description: 'Ana yol bağlantılarında kaza sonrası güvenli çekim ihtiyacına odaklanır.',
        href: '/hizmetler/kaza-sonrasi-arac-cekimi/'
      },
      {
        title: 'Acil oto çekici',
        description: 'Mamak içinde arıza, yolda kalma veya servis taşıma başlangıcı için uygundur.',
        href: '/hizmetler/acil-oto-cekici/'
      }
    ],
    callout:
      'Mamak’ta rampa, sokak genişliği ve yol yönü bilgisi çekicinin doğru ekipman ve yaklaşım ile gelmesine yardımcı olur.',
    faqs: [
      {
        question: 'Mamak’ta eğimli yolda kalan araç için çekici çağrılabilir mi?',
        answer:
          'Evet. Yol eğimi, aracın yönü, sokak genişliği, park durumu ve canlı konum bilgisiyle uygun taşıma yaklaşımı değerlendirilir.'
      },
      {
        question: 'Mamak Samsun Yolu bağlantısında kaza sonrası çekici desteği alınır mı?',
        answer:
          'Kaza sonrası aracın güvenli bekleme noktası, yol yönü ve teslim edilecek servis bilgisi alınarak çekim planlanabilir.'
      }
    ]
  },
  {
    slug: 'altindag',
    focusTitle: 'Altındağ’da merkez, sanayi ve ana yol geçişleri birlikte düşünülür',
    focusIntro:
      'Altındağ’da çekici ihtiyacı Siteler, Dışkapı, Ulus çevresi ve Samsun Yolu bağlantılarında farklı koşullarla ortaya çıkar. Merkez yoğunluğu, sanayi trafiği ve ana yol geçişleri taşıma planını etkileyebilir.',
    routeNotes: [
      'Siteler ve sanayi çevresinde sokak adı, dükkan veya blok bilgisi konum doğruluğunu artırır.',
      'Ulus ve Dışkapı tarafında duraklama alanı sınırlı olabileceği için yakın referans noktası önemlidir.',
      'Samsun Yolu bağlantısında aracın yönü ve güvenli bekleme noktası paylaşılmalıdır.'
    ],
    serviceLinks: [
      {
        title: 'Acil oto çekici',
        description: 'Merkez veya ana yol çevresinde kalan araçlar için hızlı iletişim sağlar.',
        href: '/hizmetler/acil-oto-cekici/'
      },
      {
        title: 'Servis ve otopark araç taşıma',
        description: 'Sanayi, servis ve otopark teslimlerinde planlı taşıma için uygundur.',
        href: '/hizmetler/servis-otopark-arac-tasima/'
      },
      {
        title: 'Kaza sonrası araç çekimi',
        description: 'Ana geçişlerde hareket edemeyen aracın kontrollü taşınması için değerlendirilir.',
        href: '/hizmetler/kaza-sonrasi-arac-cekimi/'
      }
    ],
    callout:
      'Altındağ’da merkez yoğunluğu nedeniyle konumun yanında aracın durduğu yön ve yaklaşılabilir cep bilgisi çok işe yarar.',
    faqs: [
      {
        question: 'Altındağ Siteler çevresinde sanayiye araç taşıma yapılır mı?',
        answer:
          'Evet. Sokak, dükkan, blok veya servis adı gibi net referanslar paylaşıldığında araç taşıma süreci daha kolay planlanır.'
      },
      {
        question: 'Ulus veya Dışkapı gibi yoğun noktalarda çekici çağırırken neye dikkat edilmeli?',
        answer:
          'Duraklama alanı, aracın yol yönü, yakın referans noktası ve güvenli bekleme bilgisi çekici yönlendirmesi için önemlidir.'
      }
    ]
  },
  {
    slug: 'polatli',
    focusTitle: 'Polatlı’da Eskişehir Yolu ve sanayi bağlantısı çekici planını belirler',
    focusIntro:
      'Polatlı çekici taleplerinde ilçe merkezi kadar Eskişehir Yolu, Ankara-Polatlı yolu ve sanayi çevresi de önemlidir. Ana yol üzerinde kalan araçlarda yol yönü, güvenli bekleme noktası ve teslim adresi baştan netleşmelidir.',
    routeNotes: [
      'Eskişehir Yolu üzerinde aracın Ankara yönünde mi Eskişehir yönünde mi kaldığı özellikle belirtilmelidir.',
      'Polatlı sanayi çevresinde servis adı, sokak, blok veya işletme tabelası konum doğruluğunu artırır.',
      'Uzun mesafe taşıma taleplerinde teslim adresi, araç tipi ve aracın çalışıp çalışmadığı bilgisi baştan paylaşılmalıdır.'
    ],
    serviceLinks: [
      {
        title: 'Şehirlerarası araç taşıma',
        description: 'Polatlı çıkışlı veya varışlı uzun mesafe taşımalarda rota ve teslim noktası netleştirilir.',
        href: '/hizmetler/sehirlerarasi-arac-tasima/'
      },
      {
        title: 'Acil oto çekici',
        description: 'Eskişehir Yolu ve ilçe içi yolda kalma durumlarında ilk iletişim noktasıdır.',
        href: '/hizmetler/acil-oto-cekici/'
      },
      {
        title: 'Servis ve otopark araç taşıma',
        description: 'Polatlı sanayi, servis veya otopark teslimlerinde planlı taşıma için uygundur.',
        href: '/hizmetler/servis-otopark-arac-tasima/'
      }
    ],
    callout:
      'Polatlı’da fiyat ve süreyi en çok etkileyen bilgiler rota, yol yönü, teslim noktası ve aracın yürür durumda olup olmadığıdır.',
    faqs: [
      {
        question: 'Polatlı çekici fiyatı hangi bilgilere göre belirlenir?',
        answer:
          'Polatlı’da çekici fiyatı alınacak nokta, teslim adresi, mesafe, araç tipi, ana yol veya sanayi konumu ve aracın durumuna göre netleşir.'
      },
      {
        question: 'Polatlı Eskişehir Yolu üzerinde yolda kalırsam ne paylaşmalıyım?',
        answer:
          'Yol yönü, canlı konum, en yakın kavşak veya tesis, aracın güvenli bekleme noktası ve gidilecek adres bilgisi paylaşılmalıdır.'
      }
    ]
  },
  {
    slug: 'pursaklar',
    focusTitle: 'Pursaklar’da Esenboğa Yolu ve Saray bağlantısı öne çıkar',
    focusIntro:
      'Pursaklar çekici taleplerinde Esenboğa Yolu, Saray bağlantısı, Altınova çevresi ve yerleşim içi otoparklar sık gündeme gelir. Ana yol trafiği nedeniyle yol yönü ve güvenli bekleme noktası bilgisi önemlidir.',
    routeNotes: [
      'Esenboğa Yolu üzerinde aracın havalimanı yönünde mi Ankara merkez yönünde mi kaldığı paylaşılmalıdır.',
      'Saray ve Altınova çevresinde site, cadde, güvenlik noktası veya yakın kavşak bilgisi yönlendirmeyi kolaylaştırır.',
      'Kapalı veya açık otoparktan araç alınacaksa giriş yüksekliği, blok ve araç durumu baştan belirtilmelidir.'
    ],
    serviceLinks: [
      {
        title: 'Acil oto çekici',
        description: 'Esenboğa Yolu ve ilçe içi arıza durumlarında hızlı iletişim için uygundur.',
        href: '/hizmetler/acil-oto-cekici/'
      },
      {
        title: 'Yol yardım',
        description: 'Akü, lastik veya basit arıza şüphesinde çekici ihtiyacı görüşmede netleşir.',
        href: '/hizmetler/yol-yardim/'
      },
      {
        title: 'Servis ve otopark araç taşıma',
        description: 'Site otoparkı veya servis teslimi olan Pursaklar taleplerinde planlı taşıma sağlar.',
        href: '/hizmetler/servis-otopark-arac-tasima/'
      }
    ],
    callout:
      'Pursaklar’da canlı konuma ek olarak Esenboğa yönü, Saray bağlantısı veya site girişi bilgisini vermek yönlendirmeyi hızlandırır.',
    faqs: [
      {
        question: 'Pursaklar Esenboğa Yolu çekici çağırırken hangi bilgi gerekir?',
        answer:
          'Yol yönü, en yakın çıkış veya kavşak, aracın güvenli durduğu nokta ve gidilecek servis bilgisi paylaşılmalıdır.'
      },
      {
        question: 'Pursaklar’da site otoparkından araç çekimi yapılır mı?',
        answer:
          'Evet. Otopark girişi, blok, araç durumu ve teslim adresi öğrenilerek uygun taşıma yaklaşımı değerlendirilir.'
      }
    ]
  },
  {
    slug: 'kahramankazan',
    focusTitle: 'Kahramankazan’da sanayi, lojistik ve İstanbul Yolu bilgisi kritiktir',
    focusIntro:
      'Kahramankazan’da çekici talepleri İstanbul Yolu, Saray bağlantısı, sanayi ve lojistik alanları çevresinde yoğunlaşabilir. Ticari araç, servis teslimi veya ana yolda arıza durumunda konumun ayrıntılı verilmesi gerekir.',
    routeNotes: [
      'Sanayi ve lojistik alanlarında tesis adı, kapı, blok veya firma bilgisi konum doğruluğunu artırır.',
      'İstanbul Yolu üzerinde aracın hangi yönde kaldığı ve güvenli bekleme noktası baştan paylaşılmalıdır.',
      'Ticari araçlarda araç tipi, yük durumu ve aracın hareket edip etmediği uygun taşıma planı için önemlidir.'
    ],
    serviceLinks: [
      {
        title: 'Servis ve otopark araç taşıma',
        description: 'Sanayi, servis, filo veya tesis teslimlerinde planlı taşıma için uygundur.',
        href: '/hizmetler/servis-otopark-arac-tasima/'
      },
      {
        title: 'Şehirlerarası araç taşıma',
        description: 'İstanbul Yolu bağlantılı uzun rota ve il dışı teslimlerde değerlendirilir.',
        href: '/hizmetler/sehirlerarasi-arac-tasima/'
      },
      {
        title: 'Acil oto çekici',
        description: 'Ana yol veya ilçe içinde kalan araçlar için hızlı iletişim sağlar.',
        href: '/hizmetler/acil-oto-cekici/'
      }
    ],
    callout:
      'Kahramankazan’da tesis adı, İstanbul Yolu yönü ve araç tipi bilgisi çekici seçimi ve rota planı açısından çok değerlidir.',
    faqs: [
      {
        question: 'Kahramankazan sanayi bölgesinden araç taşıma fiyatı nasıl netleşir?',
        answer:
          'Tesis veya servis adresi, araç tipi, mesafe, aracın çalışıp çalışmadığı ve teslim noktası bilgileri fiyatı belirler.'
      },
      {
        question: 'Kahramankazan İstanbul Yolu üzerinde çekici çağırırken ne söylemeliyim?',
        answer:
          'Yol yönü, canlı konum, yakın tesis veya kavşak, aracın durduğu cep ve gidilecek adres bilgisi paylaşılmalıdır.'
      }
    ]
  },
  {
    slug: 'cubuk',
    focusTitle: 'Çubuk’ta Esenboğa bağlantısı ve ilçe yolu bilgisi önemlidir',
    focusIntro:
      'Çubuk çekici taleplerinde ilçe merkezi, Esenboğa bağlantısı, Akyurt yönü ve çevre yolları farklı planlama gerektirebilir. Mesafe, yol yönü ve teslim noktası baştan netleştiğinde süreç daha sağlıklı ilerler.',
    routeNotes: [
      'Esenboğa bağlantısında aracın havalimanı yönü, Çubuk yönü veya Ankara dönüş yönü açıkça belirtilmelidir.',
      'İlçe merkezi ve çevre mahallelerde canlı konuma ek olarak cadde, mahalle veya yakın referans bilgisi faydalıdır.',
      'Akyurt veya Pursaklar yönüne taşımalarda rota ve teslim noktası ilk görüşmede netleştirilmelidir.'
    ],
    serviceLinks: [
      {
        title: 'Acil oto çekici',
        description: 'Çubuk merkezi ve Esenboğa bağlantısında yolda kalma durumları için uygundur.',
        href: '/hizmetler/acil-oto-cekici/'
      },
      {
        title: 'Yol yardım',
        description: 'Basit arıza veya çekici gerekip gerekmediği konum bilgisiyle değerlendirilir.',
        href: '/hizmetler/yol-yardim/'
      },
      {
        title: 'Şehirlerarası araç taşıma',
        description: 'Çubuk çıkışlı uzun rota veya Ankara dışı teslim taleplerinde planlama yapılır.',
        href: '/hizmetler/sehirlerarasi-arac-tasima/'
      }
    ],
    callout:
      'Çubuk’ta Esenboğa bağlantısı, Akyurt yönü veya ilçe merkezi bilgisi çekicinin doğru rotadan ilerlemesini sağlar.',
    faqs: [
      {
        question: 'Çubuk Esenboğa Yolu çekici talebinde hangi bilgiler gerekir?',
        answer:
          'Yol yönü, canlı konum, yakın kavşak, aracın güvenli bekleme noktası ve teslim adresi paylaşılmalıdır.'
      },
      {
        question: 'Çubuk’tan Ankara merkeze araç taşıma fiyatı nasıl belirlenir?',
        answer:
          'Alınacak nokta, Ankara içindeki teslim adresi, araç tipi, mesafe ve aracın yürür durumda olup olmadığı fiyat bilgisini etkiler.'
      }
    ]
  },
  {
    slug: 'akyurt',
    focusTitle: 'Akyurt’ta Esenboğa, sanayi ve kuzey bağlantıları birlikte değerlendirilir',
    focusIntro:
      'Akyurt çekici taleplerinde Esenboğa çevresi, sanayi alanları, Çubuk ve Pursaklar bağlantıları sık rol oynar. Havalimanı ve kuzey Ankara aksı nedeniyle yol yönü ve teslim noktası bilgisi önemlidir.',
    routeNotes: [
      'Esenboğa veya havalimanı çevresinde terminal, kavşak, otopark ya da yol yönü bilgisi açık paylaşılmalıdır.',
      'Sanayi ve tesis bölgelerinde kapı, firma adı, blok veya güvenlik noktası konum doğruluğunu artırır.',
      'Çubuk, Pursaklar veya Ankara merkez yönüne taşımalarda rota ve teslim adresi baştan netleştirilmelidir.'
    ],
    serviceLinks: [
      {
        title: 'Acil oto çekici',
        description: 'Esenboğa çevresi, Akyurt merkezi ve ana yol bağlantılarında yolda kalma durumları için uygundur.',
        href: '/hizmetler/acil-oto-cekici/'
      },
      {
        title: 'Servis ve otopark araç taşıma',
        description: 'Havalimanı çevresi, tesis veya servis teslimlerinde planlı taşıma sağlar.',
        href: '/hizmetler/servis-otopark-arac-tasima/'
      },
      {
        title: 'Şehirlerarası araç taşıma',
        description: 'Kuzey bağlantılı uzun rota ve il dışı teslim talepleri için değerlendirilir.',
        href: '/hizmetler/sehirlerarasi-arac-tasima/'
      }
    ],
    callout:
      'Akyurt’ta havalimanı, Esenboğa yönü veya tesis kapısı gibi referanslar çekici yönlendirmesinde canlı konum kadar önemlidir.',
    faqs: [
      {
        question: 'Akyurt Esenboğa çevresinde çekici çağırırken ne paylaşmalıyım?',
        answer:
          'Canlı konum, havalimanı veya Esenboğa yönü, en yakın kavşak, otopark ya da tesis bilgisi paylaşılmalıdır.'
      },
      {
        question: 'Akyurt sanayi veya tesis bölgesinden araç taşıma yapılır mı?',
        answer:
          'Evet. Firma adı, kapı, blok, araç tipi ve teslim adresi bilgisiyle taşıma planı oluşturulabilir.'
      }
    ]
  },
  {
    slug: 'elmadag',
    focusTitle: 'Elmadağ’da Samsun Yolu ve Kırıkkale yönü çekici planını etkiler',
    focusIntro:
      'Elmadağ çekici taleplerinde Samsun Yolu, Ankara-Kırıkkale güzergahı, Lalahan ve Hasanoğlan bağlantıları öne çıkar. Ana yolda kalan araçlarda yol yönü, güvenli cep ve hasar durumu özellikle önemlidir.',
    routeNotes: [
      'Samsun Yolu üzerinde Ankara yönü mü Kırıkkale yönü mü olduğu açıkça paylaşılmalıdır.',
      'Lalahan ve Hasanoğlan çevresinde yakın tesis, kavşak veya mahalle bilgisi konum tarifini güçlendirir.',
      'Kaza sonrası taleplerde aracın teker, direksiyon, sıvı akışı ve güvenli bekleme durumu belirtilmelidir.'
    ],
    serviceLinks: [
      {
        title: 'Kaza sonrası araç çekimi',
        description: 'Samsun Yolu ve Kırıkkale bağlantısında kaza sonrası güvenli taşıma için değerlendirilir.',
        href: '/hizmetler/kaza-sonrasi-arac-cekimi/'
      },
      {
        title: 'Acil oto çekici',
        description: 'Ana yol veya ilçe içinde kalan araçlar için hızlı iletişim sağlar.',
        href: '/hizmetler/acil-oto-cekici/'
      },
      {
        title: 'Yol yardım',
        description: 'Arıza tipine göre yerinde destek veya çekici ihtiyacı netleştirilebilir.',
        href: '/hizmetler/yol-yardim/'
      }
    ],
    callout:
      'Elmadağ’da yol yönü, yakın tesis ve güvenli bekleme noktası bilgisi ana yol çekici taleplerinde zaman kazandırır.',
    faqs: [
      {
        question: 'Elmadağ Samsun Yolu çekici fiyatı neye göre değişir?',
        answer:
          'Yol yönü, mesafe, teslim adresi, aracın hasar veya arıza durumu ve güvenli bekleme noktası fiyat bilgisini etkiler.'
      },
      {
        question: 'Elmadağ Kırıkkale yönünde kaza sonrası araç çekimi yapılır mı?',
        answer:
          'Resmi süreç ve güvenlik şartları tamamlandıktan sonra aracın durumu, konumu ve teslim adresine göre çekim planlanabilir.'
      }
    ]
  }
];

export const districtSeoEnhancementBySlug = new Map(
  districtSeoEnhancements.map((enhancement) => [enhancement.slug, enhancement])
);
