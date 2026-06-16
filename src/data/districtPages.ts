export type DistrictPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  shortIntro: string;
  longIntro: string;
  localFocus: string;
  neighborhoods: string[];
  mainRoads: string[];
  commonScenarios: {
    title: string;
    description: string;
  }[];
  serviceHighlights: {
    title: string;
    description: string;
  }[];
  processNote: string;
  nearbyDistricts: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const coreDistrictPages: DistrictPage[] = [
  {
    slug: 'cankaya',
    name: 'Çankaya',
    title: 'Çankaya Oto Çekici | 7/24 Yol Yardım ve Araç Taşıma',
    description:
      'Çankaya’da oto çekici, yol yardım ve araç taşıma desteği. Kızılay, Balgat, Dikmen ve çevresinde konum paylaşarak profesyonel destek alabilirsiniz.',
    h1: 'Çankaya Oto Çekici Hizmeti',
    shortIntro:
      'Çankaya’nın yoğun iş, konut ve merkez bölgelerinde arıza, kaza veya servis taşıma ihtiyaçları için 7/24 çekici desteği.',
    longIntro:
      'Çankaya; Kızılay, Balgat, Bahçelievler, Dikmen ve Çukurambar gibi gün içinde trafiğin yoğunlaştığı bölgeleriyle Ankara’nın en hareketli ilçelerinden biridir. Araç arızası, otoparktan servise taşıma veya kaza sonrası çekim gibi durumlarda konumun doğru paylaşılması ve aracın güvenli noktadan alınması önemlidir.',
    localFocus:
      'Merkezi arterler, kapalı otopark çıkışları, iş merkezleri ve yoğun konut bölgelerinde çekici sürecinin trafik akışı dikkate alınarak planlanması gerekir.',
    neighborhoods: ['Kızılay', 'Bahçelievler', 'Emek', 'Balgat', 'Dikmen', 'Oran', 'Ayrancı', 'Çukurambar'],
    mainRoads: ['Eskişehir Yolu', 'Atatürk Bulvarı', 'Konya Yolu', 'Turan Güneş Bulvarı'],
    commonScenarios: [
      {
        title: 'Şehir içi arıza',
        description: 'Yoğun trafikte hareket edemeyen aracın güvenli şekilde servis veya otoparka taşınması gerekebilir.'
      },
      {
        title: 'Otoparktan servise taşıma',
        description: 'Kapalı otopark, site otoparkı veya iş merkezi çıkışlarında araç durumuna göre uygun taşıma planlanır.'
      },
      {
        title: 'Kaza sonrası güvenli çekim',
        description: 'Ana arterlerde kaza sonrası aracın trafikten kontrollü şekilde alınması önemlidir.'
      }
    ],
    serviceHighlights: [
      {
        title: '7/24 acil oto çekici',
        description: 'Çankaya içinde günün farklı saatlerinde oluşan yolda kalma talepleri için yönlendirme yapılır.'
      },
      {
        title: 'Servis ve otopark taşıma',
        description: 'Aracınız servis, otopark veya belirttiğiniz uygun noktaya taşınabilir.'
      },
      {
        title: 'Kaza sonrası araç çekimi',
        description: 'Kaza sonrası hareket edemeyen araçlar için güvenli taşıma süreci planlanır.'
      }
    ],
    processNote:
      'Çankaya’da konum paylaşırken bulunduğunuz cadde, otopark girişi veya yakın bina bilgisini iletmeniz yönlendirmeyi kolaylaştırır.',
    nearbyDistricts: ['yenimahalle', 'mamak', 'golbasi'],
    faqs: [
      {
        question: 'Çankaya’da çekici çağırmak için hangi bilgileri paylaşmalıyım?',
        answer: 'Konum, araç tipi, aracın hareket edip etmediği ve gidilecek servis ya da otopark bilgisi yeterli olur.'
      },
      {
        question: 'Kızılay veya Balgat gibi yoğun bölgelerde çekici hizmeti alabilir miyim?',
        answer: 'Evet. Yoğun trafik ve duraklama koşulları dikkate alınarak uygun çekici yönlendirmesi planlanır.'
      },
      {
        question: 'Çankaya’da otoparktan araç taşıma yapılır mı?',
        answer: 'Evet. Otoparkın giriş yüksekliği ve aracın durumu öğrenilerek uygun çözüm değerlendirilir.'
      },
      {
        question: 'Çankaya’dan şehir içi servis taşıması planlanabilir mi?',
        answer: 'Evet. Teslim servisi, araç durumu ve alınacak nokta bilgisiyle şehir içi taşıma talebi değerlendirilebilir.'
      }
    ]
  },
  {
    slug: 'kecioren',
    name: 'Keçiören',
    title: 'Keçiören Çekici Hizmeti | Ankara Oto Kurtarma',
    description:
      'Keçiören’de oto çekici ve yol yardım desteği. Etlik, Ovacık, Bağlum ve çevresinde arıza, dar sokak veya gece destek ihtiyaçları için iletişime geçin.',
    h1: 'Keçiören Çekici Hizmeti',
    shortIntro:
      'Keçiören’de konut bölgeleri, eğimli yollar ve dar sokaklarda oluşan çekici ihtiyaçları için 7/24 ulaşılabilir destek.',
    longIntro:
      'Keçiören; yoğun konut dokusu, eğimli yolları ve bazı bölgelerde dar sokak yapısıyla çekici planlamasında dikkat isteyen bir ilçedir. Ev önü arıza, akşam saatlerinde yolda kalma veya aracın servise taşınması gibi durumlarda doğru konum ve yol bilgisi süreci kolaylaştırır.',
    localFocus:
      'Etlik, Sanatoryum, Aktepe ve Bağlum gibi farklı yol karakterine sahip bölgelerde aracın bulunduğu noktanın açık tarif edilmesi önem taşır.',
    neighborhoods: ['Etlik', 'Sanatoryum', 'Ovacık', 'Bağlum', 'Aktepe', 'Kalaba', 'Ufuktepe'],
    mainRoads: ['Fatih Caddesi', 'Etlik Caddesi', 'Yozgat Bulvarı'],
    commonScenarios: [
      {
        title: 'Ev önü arıza',
        description: 'Konut bölgelerinde çalışmayan aracın bulunduğu sokaktan güvenli şekilde alınması gerekebilir.'
      },
      {
        title: 'Dar sokakta araç taşıma',
        description: 'Sokak genişliği ve park durumu öğrenilerek çekici erişimi için uygun yaklaşım planlanır.'
      },
      {
        title: 'Akşam veya gece destek ihtiyacı',
        description: 'Gece saatlerinde yolda kalma durumunda konum ve çevre bilgisi yönlendirme için önemlidir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Keçiören oto çekici',
        description: 'Arıza veya kaza sonrası aracın güvenli noktaya taşınması için destek sağlanır.'
      },
      {
        title: 'Yol yardım yönlendirmesi',
        description: 'Aracın durumuna göre çekici ya da yol yardım ihtiyacı birlikte değerlendirilir.'
      },
      {
        title: 'Servis taşıma',
        description: 'Aracınız Keçiören’den Ankara içindeki servis veya otopark noktalarına taşınabilir.'
      }
    ],
    processNote:
      'Keçiören’de eğimli veya dar sokak bilgisi, çekici seçimi ve yaklaşım planı açısından özellikle faydalıdır.',
    nearbyDistricts: ['altindag', 'yenimahalle', 'mamak'],
    faqs: [
      {
        question: 'Keçiören’de dar sokakta kalan araç için çekici çağrılabilir mi?',
        answer: 'Evet. Sokak genişliği, aracın yönü ve park durumu öğrenilerek uygun çözüm değerlendirilir.'
      },
      {
        question: 'Keçiören’de gece çekici hizmeti var mı?',
        answer: 'Yıldızlar Oto Kurtarma 7/24 ulaşılabilir destek sunar; konum paylaşmanız süreci hızlandırır.'
      },
      {
        question: 'Bağlum veya Ovacık çevresinden servis taşıması yapılır mı?',
        answer: 'Evet. Gidilecek servis veya teslim noktası bilgisiyle taşıma planı oluşturulabilir.'
      },
      {
        question: 'Keçiören’de eğimli yolda kalan araç için ne bilgi gerekir?',
        answer: 'Yol eğimi, sokak genişliği, aracın yönü ve canlı konum bilgisi çekici yaklaşımını planlamaya yardımcı olur.'
      }
    ]
  },
  {
    slug: 'yenimahalle',
    name: 'Yenimahalle',
    title: 'Yenimahalle Oto Çekici | Acil Yol Yardım Ankara',
    description:
      'Yenimahalle’de oto çekici, yol yardım ve servis taşıma desteği. Batıkent, Demetevler, Ostim ve İvedik çevresinde araç taşıma çözümleri.',
    h1: 'Yenimahalle Oto Çekici Hizmeti',
    shortIntro:
      'Yenimahalle’de sanayi, servis, iş alanları ve konut bölgeleri arasında araç çekimi ve taşıma desteği.',
    longIntro:
      'Yenimahalle; Batıkent ve Demetevler gibi yoğun konut alanlarının yanında Ostim ve İvedik gibi sanayi bölgelerini de barındırır. Bu nedenle ilçede çekici ihtiyacı hem bireysel araç arızalarında hem de servis, sanayi veya ticari araç taşıma süreçlerinde ortaya çıkabilir.',
    localFocus:
      'Sanayi bağlantıları, ana yollar ve iş çıkışı saatlerindeki trafik yoğunluğu dikkate alınarak taşıma süreci planlanır.',
    neighborhoods: ['Batıkent', 'Demetevler', 'İvedik', 'Ostim', 'Karşıyaka', 'Ragıp Tüzün'],
    mainRoads: ['İstanbul Yolu', 'Anadolu Bulvarı', 'İvedik Organize Sanayi bağlantıları'],
    commonScenarios: [
      {
        title: 'Sanayi veya servis taşıma',
        description: 'Aracın Ostim, İvedik veya farklı servis noktalarına taşınması gerekebilir.'
      },
      {
        title: 'İş çıkışı arıza',
        description: 'Yoğun saatlerde yolda kalan araçlar için konumun net paylaşılması önemlidir.'
      },
      {
        title: 'Ticari araç taşıma',
        description: 'Araç tipi ve yük durumu değerlendirilerek uygun taşıma çözümü planlanır.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Oto çekici',
        description: 'Yenimahalle içinde arıza veya kaza sonrası araç çekimi için destek verilir.'
      },
      {
        title: 'Sanayi bağlantılı taşıma',
        description: 'Ostim ve İvedik çevresindeki servis veya sanayi noktalarına taşıma yapılabilir.'
      },
      {
        title: 'Planlı araç taşıma',
        description: 'Randevulu servis, otopark veya teslim noktası taşıma talepleri değerlendirilebilir.'
      }
    ],
    processNote:
      'Yenimahalle’de özellikle sanayi bölgesi giriş kapısı, blok veya servis adı gibi detaylar konum doğruluğunu artırır.',
    nearbyDistricts: ['etimesgut', 'kecioren', 'cankaya'],
    faqs: [
      {
        question: 'Yenimahalle’de Ostim veya İvedik’e araç taşıma yapılır mı?',
        answer: 'Evet. Servis veya sanayi noktasının adresi paylaşıldığında taşıma planı oluşturulabilir.'
      },
      {
        question: 'Batıkent’ten çekici çağırabilir miyim?',
        answer: 'Evet. Batıkent ve çevresinde arıza, kaza veya servis taşıma ihtiyaçları için destek alınabilir.'
      },
      {
        question: 'Ticari araçlar için çekici hizmeti veriliyor mu?',
        answer: 'Araç tipi ve durumuna göre uygun taşıma yöntemi değerlendirilir.'
      },
      {
        question: 'Yenimahalle’den Ankara dışına araç taşıma talebi alınır mı?',
        answer: 'Rota, teslim noktası ve araç bilgisi netleştiğinde şehir dışı taşıma talebi değerlendirilebilir.'
      }
    ]
  },
  {
    slug: 'mamak',
    name: 'Mamak',
    title: 'Mamak Oto Çekici | Kaza Sonrası Araç Çekimi ve Yol Yardım',
    description:
      'Mamak’ta oto çekici, kaza sonrası araç çekimi ve yol yardım desteği. Natoyolu, Akdere, Cebeci ve Samsun Yolu bağlantıları için iletişime geçin.',
    h1: 'Mamak Oto Çekici Hizmeti',
    shortIntro:
      'Mamak’ta geniş yerleşim alanları, eğimli bölgeler ve şehir merkezi bağlantılarında çekici ve yol yardım desteği.',
    longIntro:
      'Mamak; Natoyolu, Tuzluçayır, Akdere ve Cebeci çevresiyle hem konut hem de şehir merkezi bağlantısı güçlü bir ilçedir. Eğimli yollar, yoğun güzergahlar ve Samsun Yolu bağlantıları nedeniyle yolda kalma veya kaza sonrası araç çekimi dikkatli planlanmalıdır.',
    localFocus:
      'Mamak’ta aracın bulunduğu yön, yakın kavşak ve ana yol bağlantısı çekici yönlendirmesi için önemli bilgiler sağlar.',
    neighborhoods: ['Tuzluçayır', 'Natoyolu', 'Akdere', 'Cebeci', 'Boğaziçi', 'Şahintepe'],
    mainRoads: ['Samsun Yolu', 'Natoyolu Caddesi', 'Doğukent Bulvarı'],
    commonScenarios: [
      {
        title: 'Yolda kalma',
        description: 'Arıza nedeniyle ilerleyemeyen araçlar güvenli noktaya veya servise taşınabilir.'
      },
      {
        title: 'Kaza sonrası çekim',
        description: 'Kaza sonrası hareket edemeyen aracın yol güvenliği gözetilerek alınması gerekir.'
      },
      {
        title: 'Konuttan servise taşıma',
        description: 'Ev önü veya site otoparkında çalışmayan araçlar servis noktasına taşınabilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Acil çekici',
        description: 'Mamak içinde arıza ve yolda kalma durumlarında çekici desteği sağlanır.'
      },
      {
        title: 'Kaza sonrası taşıma',
        description: 'Araç servis, otopark veya belirlediğiniz güvenli noktaya taşınabilir.'
      },
      {
        title: 'Yol yardım',
        description: 'İhtiyaca göre çekici veya yol yardım süreci birlikte değerlendirilir.'
      }
    ],
    processNote:
      'Mamak’ta yakın kavşak, yol yönü ve aracın emniyet şeridinde olup olmadığı gibi bilgiler paylaşılmalıdır.',
    nearbyDistricts: ['cankaya', 'altindag', 'kecioren'],
    faqs: [
      {
        question: 'Mamak’ta kaza sonrası çekici çağırabilir miyim?',
        answer: 'Evet. Kaza sonrası aracın durumu ve konumu alınarak güvenli taşıma planlanır.'
      },
      {
        question: 'Natoyolu çevresinde yol yardım desteği var mı?',
        answer: 'Evet. Konumunuzu paylaşarak çekici veya yol yardım ihtiyacınızı iletebilirsiniz.'
      },
      {
        question: 'Mamak’tan servise araç taşıma yapılır mı?',
        answer: 'Evet. Servis adresi ve araç bilgisiyle taşıma süreci netleştirilebilir.'
      },
      {
        question: 'Samsun Yolu bağlantısında yolda kalırsam ne paylaşmalıyım?',
        answer: 'Yol yönü, yakın kavşak, konum ve aracın güvenli bekleme noktasında olup olmadığı bilgisini paylaşmanız faydalıdır.'
      }
    ]
  },
  {
    slug: 'etimesgut',
    name: 'Etimesgut',
    title: 'Etimesgut Oto Çekici | 7/24 Araç Taşıma ve Yol Yardım',
    description:
      'Etimesgut’ta oto çekici, servis taşıma ve yol yardım desteği. Eryaman, Elvankent, Bağlıca ve Göksu çevresinde araç taşıma hizmeti.',
    h1: 'Etimesgut Oto Çekici Hizmeti',
    shortIntro:
      'Etimesgut’ta yeni yerleşimler, geniş bulvarlar ve servis bağlantıları için oto çekici ve araç taşıma desteği.',
    longIntro:
      'Etimesgut; Eryaman, Elvankent, Bağlıca ve Göksu gibi geniş yerleşim alanlarıyla Ankara’nın önemli ulaşım akslarına bağlanır. Site otoparklarında çalışmayan araçlar, uzun yol öncesi arıza veya servis taşıma talepleri ilçede sık karşılaşılan ihtiyaçlardandır.',
    localFocus:
      'Geniş bulvarlar, site girişleri ve otopark konumları doğru paylaşıldığında çekici yönlendirmesi daha sağlıklı planlanır.',
    neighborhoods: ['Eryaman', 'Elvankent', 'Bağlıca', 'Alsancak', 'Süvari', 'Göksu'],
    mainRoads: ['Ayaş Yolu', 'İstanbul Yolu bağlantısı', 'Bağlıca Bulvarı'],
    commonScenarios: [
      {
        title: 'Site veya otoparktan araç alma',
        description: 'Kapalı ya da açık otoparkta çalışmayan aracın servise taşınması gerekebilir.'
      },
      {
        title: 'Uzun yol öncesi arıza',
        description: 'Yola çıkmadan önce arıza veren aracın kontrol veya servis noktasına götürülmesi planlanabilir.'
      },
      {
        title: 'Servis taşıma',
        description: 'Etimesgut’tan Ankara içindeki servis ve otopark noktalarına taşıma yapılabilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Etimesgut çekici',
        description: 'İlçe içindeki arıza, kaza ve taşıma talepleri için çekici desteği verilir.'
      },
      {
        title: 'Otoparktan taşıma',
        description: 'Otopark koşulları öğrenilerek araç güvenliği gözetilen taşıma planlanır.'
      },
      {
        title: 'Şehirlerarası bağlantı',
        description: 'Ankara çıkışlı veya varışlı araç taşıma talepleri değerlendirilebilir.'
      }
    ],
    processNote:
      'Etimesgut’ta site adı, blok, otopark girişi ve güvenlik noktası bilgileri yönlendirme için yararlıdır.',
    nearbyDistricts: ['sincan', 'yenimahalle', 'cankaya'],
    faqs: [
      {
        question: 'Etimesgut’ta site otoparkından araç alınabilir mi?',
        answer: 'Evet. Otopark giriş bilgisi ve araç durumu öğrenilerek uygun taşıma değerlendirilir.'
      },
      {
        question: 'Eryaman veya Bağlıca’dan çekici çağırabilir miyim?',
        answer: 'Evet. Konumunuzu paylaşarak çekici veya yol yardım talebinizi iletebilirsiniz.'
      },
      {
        question: 'Etimesgut’tan şehirlerarası araç taşıma yapılır mı?',
        answer: 'Evet. Mesafe, teslim noktası ve araç bilgisiyle planlama yapılabilir.'
      },
      {
        question: 'Kapalı otoparkta kalan araç için hangi bilgiler gerekir?',
        answer: 'Otopark giriş yüksekliği, kat bilgisi, aracın çalışıp çalışmadığı ve çıkış alanı bilgisi paylaşılmalıdır.'
      }
    ]
  },
  {
    slug: 'sincan',
    name: 'Sincan',
    title: 'Sincan Oto Çekici | OSB ve Şehir Dışı Bağlantı Araç Taşıma',
    description:
      'Sincan’da oto çekici, OSB çevresi araç taşıma ve yol yardım desteği. Fatih, Törekent, Yenikent ve sanayi bağlantıları için destek alın.',
    h1: 'Sincan Oto Çekici Hizmeti',
    shortIntro:
      'Sincan’da organize sanayi, geniş yerleşim alanları ve Ankara çevre bağlantıları için çekici desteği.',
    longIntro:
      'Sincan; organize sanayi bölgeleri, Törekent ve Yenikent gibi geniş yerleşim alanları ve şehir dışı bağlantılarıyla araç taşıma ihtiyacının farklılaştığı bir ilçedir. İş aracı çekimi, sanayi bölgesi servis taşıması veya uzun mesafe planlı nakil taleplerinde araç tipi ve rota bilgisi önemlidir.',
    localFocus:
      'OSB yolları ve çevre bağlantılarında giriş kapısı, firma veya servis noktası gibi bilgiler konum doğruluğu sağlar.',
    neighborhoods: ['Fatih', 'Törekent', 'Yenikent', 'Plevne', 'Malazgirt', 'Organize Sanayi çevresi'],
    mainRoads: ['Ayaş Yolu', 'İstanbul Yolu bağlantıları', 'OSB yolları'],
    commonScenarios: [
      {
        title: 'Sanayi bölgesi araç taşıma',
        description: 'OSB çevresinde arızalanan araçların servis veya teslim noktasına taşınması gerekebilir.'
      },
      {
        title: 'İş aracı çekimi',
        description: 'Araç tipi ve kullanım durumu değerlendirilerek uygun taşıma çözümü planlanır.'
      },
      {
        title: 'Şehir dışı bağlantı',
        description: 'Ayaş Yolu ve bağlantı güzergahlarında yolda kalma veya planlı taşıma ihtiyacı oluşabilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Sincan oto çekici',
        description: 'İlçe içindeki arıza, kaza ve servis taşıma talepleri için destek sunulur.'
      },
      {
        title: 'OSB servis taşıma',
        description: 'Sanayi ve servis noktalarına araç taşıma talepleri planlanabilir.'
      },
      {
        title: 'Şehirlerarası araç taşıma',
        description: 'Ankara çıkışlı uzun mesafe taşıma ihtiyaçları için rota bilgisi alınır.'
      }
    ],
    processNote:
      'Sincan’da OSB kapısı, firma adı, yol yönü ve teslim noktası bilgileri süreci daha net hale getirir.',
    nearbyDistricts: ['etimesgut', 'yenimahalle', 'golbasi'],
    faqs: [
      {
        question: 'Sincan OSB çevresinde çekici hizmeti var mı?',
        answer: 'Evet. OSB giriş noktası veya firma konumu paylaşıldığında taşıma planı yapılabilir.'
      },
      {
        question: 'Törekent veya Yenikent’ten araç taşıma yapılır mı?',
        answer: 'Evet. Araç ve teslim noktası bilgisine göre çekici yönlendirmesi değerlendirilebilir.'
      },
      {
        question: 'Sincan’dan şehir dışına araç taşıma mümkün mü?',
        answer: 'Evet. Rota, mesafe ve araç tipi bilgileriyle planlı taşıma talebi alınabilir.'
      },
      {
        question: 'Sincan’da iş aracı çekimi için hangi bilgiler istenir?',
        answer: 'Araç tipi, yük durumu, bulunduğu tesis veya yol bilgisi ve teslim noktası paylaşılmalıdır.'
      }
    ]
  },
  {
    slug: 'altindag',
    name: 'Altındağ',
    title: 'Altındağ Oto Çekici | Merkezi Bölgelerde Yol Yardım',
    description:
      'Altındağ’da oto çekici ve yol yardım desteği. Ulus, Hacıbayram, Siteler, Aydınlıkevler ve Karapürçek çevresinde araç çekimi.',
    h1: 'Altındağ Oto Çekici Hizmeti',
    shortIntro:
      'Altındağ’da eski Ankara merkezi, dar sokaklar, tarihi bölgeler ve yoğun trafik koşullarında çekici desteği.',
    longIntro:
      'Altındağ; Ulus, Hacıbayram, Siteler ve Aydınlıkevler gibi hem tarihi hem de ticari hareketliliği yüksek alanlara sahiptir. Dar sokaklar, yoğun park düzeni ve merkezi trafik nedeniyle çekici ihtiyacında konum ve erişim bilgisi özellikle önemlidir.',
    localFocus:
      'Merkezi bölgelerde çekici yönlendirmesi yapılırken sokak genişliği, trafik akışı ve aracın bulunduğu güvenli nokta birlikte değerlendirilir.',
    neighborhoods: ['Ulus', 'Hacıbayram', 'Aydınlıkevler', 'Siteler', 'Karapürçek', 'Örnek'],
    mainRoads: ['Talatpaşa Bulvarı', 'İstanbul Caddesi', 'Samsun Yolu bağlantıları'],
    commonScenarios: [
      {
        title: 'Dar alanda çekici ihtiyacı',
        description: 'Sokak ve park yoğunluğu bulunan bölgelerde aracın alınacağı nokta dikkatle belirlenir.'
      },
      {
        title: 'Kaza sonrası taşıma',
        description: 'Merkezi yollarda kaza sonrası aracın güvenli noktaya çekilmesi gerekebilir.'
      },
      {
        title: 'Siteler ve çevresi servis taşıma',
        description: 'Ticari alanlarda servis veya otopark taşıma talepleri oluşabilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Altındağ çekici',
        description: 'İlçe içinde arıza, kaza ve taşıma ihtiyaçları için çekici desteği verilir.'
      },
      {
        title: 'Merkezi bölge yönlendirmesi',
        description: 'Ulus ve çevresi gibi yoğun bölgelerde konuma göre planlama yapılır.'
      },
      {
        title: 'Servis ve otopark taşıma',
        description: 'Araç uygun teslim noktasına kontrollü şekilde taşınabilir.'
      }
    ],
    processNote:
      'Altındağ’da sokak adı, yakın meydan, park durumu ve aracın trafiği etkileyip etkilemediği bilgileri önemlidir.',
    nearbyDistricts: ['kecioren', 'mamak', 'cankaya'],
    faqs: [
      {
        question: 'Altındağ’da dar sokaktan araç çekilebilir mi?',
        answer: 'Sokak koşulları ve aracın konumu öğrenilerek uygun çekici yaklaşımı değerlendirilir.'
      },
      {
        question: 'Ulus çevresinde çekici hizmeti alabilir miyim?',
        answer: 'Evet. Merkezi trafik ve duraklama koşulları dikkate alınarak yönlendirme planlanır.'
      },
      {
        question: 'Siteler bölgesinden servis taşıması yapılır mı?',
        answer: 'Evet. Teslim noktası ve araç bilgisiyle taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Altındağ’da merkezi bölgelerde konum nasıl tarif edilmeli?',
        answer: 'Yakın meydan, cadde, otopark girişi veya bilinen bina bilgisi paylaşmak yönlendirmeyi kolaylaştırır.'
      }
    ]
  },
  {
    slug: 'golbasi',
    name: 'Gölbaşı',
    title: 'Gölbaşı Oto Çekici | Konya Yolu ve Uzun Mesafe Araç Taşıma',
    description:
      'Gölbaşı’nda oto çekici, yol yardım ve uzun mesafe araç taşıma desteği. İncek, Taşpınar, Kızılcaşar ve Konya Yolu bağlantıları için iletişime geçin.',
    h1: 'Gölbaşı Oto Çekici Hizmeti',
    shortIntro:
      'Gölbaşı’nda şehir merkezi dışı bağlantılar, Konya Yolu ve çevre yolu güzergahları için çekici desteği.',
    longIntro:
      'Gölbaşı; Konya Yolu, İncek bağlantıları ve şehir dışı güzergahlarıyla Ankara içinde farklı bir çekici ihtiyacı profiline sahiptir. Uzun mesafe taşıma, şehir dışı bağlantıda arıza veya konumla çekici yönlendirme süreçlerinde net rota ve güvenli bekleme noktası bilgisi önemlidir.',
    localFocus:
      'Gölbaşı çevresinde ana yol yönü, kilometre bilgisi, yakın tesis veya kavşak bilgisi çekici yönlendirmesini kolaylaştırır.',
    neighborhoods: ['İncek', 'Taşpınar', 'Bahçelievler', 'Karşıyaka', 'Kızılcaşar'],
    mainRoads: ['Konya Yolu', 'İncek Bulvarı', 'Çevre yolu bağlantıları'],
    commonScenarios: [
      {
        title: 'Şehir dışı bağlantıda arıza',
        description: 'Ana yol üzerinde arıza durumunda güvenli bekleme noktası ve yol yönü bilgisi önemlidir.'
      },
      {
        title: 'Uzun mesafe taşıma',
        description: 'Ankara çıkışlı veya varışlı planlı araç taşıma talepleri rota bilgisiyle değerlendirilir.'
      },
      {
        title: 'Konumla çekici yönlendirme',
        description: 'Konya Yolu ve çevre bağlantılarında net konum paylaşımı süreci hızlandırır.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Gölbaşı çekici',
        description: 'İlçe merkezi ve çevre bağlantılarında çekici desteği sağlanır.'
      },
      {
        title: 'Uzun mesafe araç taşıma',
        description: 'Rota, mesafe ve teslim noktası bilgisiyle planlı taşıma yapılabilir.'
      },
      {
        title: 'Yol yardım süreci',
        description: 'Aracın durumuna göre çekici veya yol yardım ihtiyacı değerlendirilir.'
      }
    ],
    processNote:
      'Gölbaşı’nda ana yol yönü, en yakın kavşak, tesis veya mahalle bilgisi konumun doğru anlaşılmasına yardımcı olur.',
    nearbyDistricts: ['cankaya', 'etimesgut', 'sincan'],
    faqs: [
      {
        question: 'Gölbaşı Konya Yolu üzerinde çekici çağırabilir miyim?',
        answer: 'Evet. Yol yönü ve net konum bilgisiyle çekici yönlendirmesi değerlendirilebilir.'
      },
      {
        question: 'İncek veya Kızılcaşar çevresinden araç taşıma yapılır mı?',
        answer: 'Evet. Araç durumu ve teslim noktası bilgileriyle taşıma süreci planlanabilir.'
      },
      {
        question: 'Gölbaşı’ndan uzun mesafe araç taşıma hizmeti var mı?',
        answer: 'Evet. Rota, mesafe ve araç bilgisi alınarak planlı taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Gölbaşı çevre yolu bağlantısında hangi bilgiler gerekir?',
        answer: 'Yol yönü, yakın kavşak, konum bağlantısı ve aracın emniyetli bekleme durumu paylaşılmalıdır.'
      }
    ]
  }
];

const outerDistrictPages: DistrictPage[] = [
  {
    slug: 'akyurt',
    name: 'Akyurt',
    title: 'Akyurt Oto Çekici | Esenboğa Yolu ve Yol Yardım',
    description:
      'Akyurt’ta oto çekici, yol yardım ve araç taşıma desteği. Esenboğa Yolu, sanayi çevresi ve havalimanı bağlantıları için güvenli çekici hizmeti.',
    h1: 'Akyurt Oto Çekici Hizmeti',
    shortIntro:
      'Akyurt’ta Esenboğa Havalimanı bağlantısı, sanayi bölgeleri ve kuzey Ankara aksında oto çekici desteği.',
    longIntro:
      'Akyurt; Ankara’nın kuzeyinde Esenboğa Yolu, havalimanı bağlantıları ve sanayi alanlarıyla öne çıkar. İlçe merkezinde, çevre mahallelerde veya ana yol üzerinde araç arızası yaşandığında net konum, yol yönü ve araç durumu bilgisinin paylaşılması çekici sürecini daha sağlıklı hale getirir.',
    localFocus:
      'Havalimanı bağlantıları ve sanayi çevresinde araç alım noktası bazen karmaşık olabilir; yakın kapı, tesis, kavşak veya yol yönü bilgisini paylaşmak faydalıdır.',
    neighborhoods: ['Merkez', 'Beyazıt', 'Balıkhisar', 'Büğdüz', 'Güzelhisar'],
    mainRoads: ['Esenboğa Yolu', 'Çankırı Yolu', 'Havalimanı bağlantıları'],
    commonScenarios: [
      {
        title: 'Havalimanı aksında arıza',
        description: 'Esenboğa bağlantısında yolda kalan araçlar için yol yönü ve güvenli bekleme noktası bilgisi önemlidir.'
      },
      {
        title: 'Sanayi çevresinden servis taşıma',
        description: 'Akyurt sanayi çevresindeki araçların servis veya otopark noktasına taşınması planlanabilir.'
      },
      {
        title: 'Kuzey Ankara bağlantısında çekici ihtiyacı',
        description: 'Çankırı Yolu ve çevre mahalle bağlantılarında uzun mesafe taşıma talepleri değerlendirilebilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Akyurt çekici',
        description: 'İlçe merkezi, sanayi çevresi ve ana bağlantı yolları için çekici yönlendirmesi yapılır.'
      },
      {
        title: 'Yol yardım desteği',
        description: 'Arıza tipine göre çekici ya da yol yardım ihtiyacı birlikte değerlendirilir.'
      },
      {
        title: 'Araç taşıma',
        description: 'Araç servis, otopark veya Ankara içindeki uygun teslim noktasına taşınabilir.'
      }
    ],
    processNote:
      'Akyurt’ta konum paylaşırken Esenboğa yönü, Çankırı yönü, sanayi girişi veya yakın işletme bilgisi yönlendirmeyi kolaylaştırır.',
    nearbyDistricts: ['pursaklar', 'cubuk', 'kahramankazan'],
    faqs: [
      {
        question: 'Akyurt’ta Esenboğa Yolu üzerinde çekici çağırabilir miyim?',
        answer: 'Evet. Yol yönü, yakın kavşak ve aracın emniyetli konumu paylaşıldığında çekici süreci daha net planlanır.'
      },
      {
        question: 'Akyurt sanayi çevresinden servis taşıması yapılır mı?',
        answer: 'Evet. Servis adresi, araç durumu ve teslim noktası bilgisiyle taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Havalimanı bağlantısında yolda kalınca ne paylaşmalıyım?',
        answer: 'Konum, yol yönü, araç tipi ve mümkünse en yakın çıkış veya referans noktasını paylaşmanız faydalıdır.'
      },
      {
        question: 'Akyurt’tan şehirlerarası araç taşıma yapılabilir mi?',
        answer: 'Rota, araç durumu ve teslim noktası netleştirilerek şehirlerarası taşıma talebi planlanabilir.'
      }
    ]
  },
  {
    slug: 'ayas',
    name: 'Ayaş',
    title: 'Ayaş Çekici Hizmeti | Ankara Batı Aksı Araç Taşıma',
    description:
      'Ayaş’ta oto çekici ve yol yardım desteği. Ayaş Yolu, Beypazarı bağlantısı ve çevre mahallelerde araç taşıma için iletişime geçin.',
    h1: 'Ayaş Çekici Hizmeti',
    shortIntro:
      'Ayaş ve Ankara batı aksında arıza, servis taşıma ve uzun yol bağlantılı çekici ihtiyaçları için destek.',
    longIntro:
      'Ayaş; Ankara merkez ile Beypazarı yönü arasında kalan batı aksında yer alır. İlçe merkezi, kaplıca çevresi ve mahalle yollarında araç arızası yaşandığında çekici yönlendirmesi için konumun açık tarif edilmesi ve gidilecek noktanın önceden belirlenmesi önemlidir.',
    localFocus:
      'Ayaş çevresinde mahalle yolları ve ana yol bağlantıları farklılık gösterebilir; yakın yerleşim, kilometre bilgisi veya yol ayrımı paylaşımı süreci kolaylaştırır.',
    neighborhoods: ['Ayaş Merkez', 'Sinanlı', 'Oltan', 'Başbereket', 'Feruz'],
    mainRoads: ['Ayaş Yolu', 'Beypazarı bağlantısı', 'Çevre mahalle yolları'],
    commonScenarios: [
      {
        title: 'Uzun yol öncesi arıza',
        description: 'Batı aksına çıkmadan önce arıza veren araçların servise veya güvenli noktaya taşınması gerekebilir.'
      },
      {
        title: 'Mahalle yolunda yolda kalma',
        description: 'Çevre mahalle yollarında konum ve yol tarifi bilgisi çekici erişimini kolaylaştırır.'
      },
      {
        title: 'Beypazarı yönüne araç taşıma',
        description: 'Rota ve teslim noktası netleştiğinde planlı araç taşıma talepleri değerlendirilebilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Ayaş oto çekici',
        description: 'İlçe merkezi ve çevre bağlantılarda yolda kalan araçlar için çekici desteği sağlanır.'
      },
      {
        title: 'Servis taşıma',
        description: 'Araç Ankara merkez, Ayaş veya yakın ilçelerdeki servis noktalarına taşınabilir.'
      },
      {
        title: 'Uzun mesafe taşıma',
        description: 'Araç durumu ve rota bilgisi alınarak uzun mesafe taşıma planı yapılabilir.'
      }
    ],
    processNote:
      'Ayaş’ta bulunduğunuz mahalle, yol ayrımı, yakın tesis veya kilometre bilgisini paylaşmanız doğru yönlendirme için değerlidir.',
    nearbyDistricts: ['beypazari', 'gudul', 'sincan'],
    faqs: [
      {
        question: 'Ayaş Yolu üzerinde çekici desteği alabilir miyim?',
        answer: 'Evet. Konum ve yol yönü paylaşıldığında çekici ihtiyacı değerlendirilebilir.'
      },
      {
        question: 'Ayaş çevre mahallelerinden araç alınır mı?',
        answer: 'Mahalle yolu ve araç konumu net tarif edildiğinde taşıma süreci planlanabilir.'
      },
      {
        question: 'Ayaş’tan Ankara merkeze araç taşıma yapılabilir mi?',
        answer: 'Evet. Teslim noktası ve araç durumu bilgisiyle taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Yolda kaldığımda hangi bilgileri göndermeliyim?',
        answer: 'Konum, araç tipi, arıza durumu ve gidilecek adres bilgisi yeterli olur.'
      }
    ]
  },
  {
    slug: 'bala',
    name: 'Bala',
    title: 'Bala Oto Çekici | Konya Yolu Bağlantılı Yol Yardım',
    description:
      'Bala’da oto çekici, yol yardım ve uzun mesafe araç taşıma desteği. Konya Yolu bağlantıları ve kırsal mahalle yolları için destek alın.',
    h1: 'Bala Oto Çekici Hizmeti',
    shortIntro:
      'Bala’da geniş kırsal alanlar, Konya Yolu bağlantıları ve mahalle yollarında çekici ve araç taşıma desteği.',
    longIntro:
      'Bala; geniş yüzölçümü, kırsal mahalle bağlantıları ve Konya Yolu aksına yakınlığıyla çekici planlamasında doğru konum bilgisinin önemli olduğu ilçelerden biridir. Araç arızası, uzun mesafe taşıma veya kaza sonrası çekim taleplerinde aracın bulunduğu yolun yönü ve en yakın yerleşim bilgisi süreci netleştirir.',
    localFocus:
      'Kırsal bağlantılarda telefonla tarif, canlı konum ve yakın mahalle bilgisi birlikte paylaşıldığında çekici yönlendirmesi daha sağlıklı yapılır.',
    neighborhoods: ['Bala Merkez', 'Kesikköprü', 'Afşar', 'Beynam', 'Karaali'],
    mainRoads: ['Konya Yolu bağlantıları', 'Bala Yolu', 'Köy ve mahalle yolları'],
    commonScenarios: [
      {
        title: 'Kırsal yolda arıza',
        description: 'Mahalle yollarında yolda kalan araçlar için net tarif ve konum bilgisi gerekir.'
      },
      {
        title: 'Konya Yolu bağlantısında çekici ihtiyacı',
        description: 'Ana yol bağlantısında arıza durumunda güvenli bekleme ve yol yönü bilgisi önemlidir.'
      },
      {
        title: 'Uzun mesafe araç taşıma',
        description: 'Bala çıkışlı veya varışlı taşımalarda rota, araç tipi ve teslim adresi birlikte planlanır.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Bala çekici',
        description: 'İlçe merkezi ve mahalle bağlantıları için çekici yönlendirmesi yapılabilir.'
      },
      {
        title: 'Kaza sonrası çekim',
        description: 'Araç hareket edemiyorsa servis, otopark veya uygun adrese taşıma planlanır.'
      },
      {
        title: 'Şehirlerarası taşıma',
        description: 'Uzun mesafe güzergahlarında araç taşıma talepleri rota bilgisiyle değerlendirilir.'
      }
    ],
    processNote:
      'Bala’da yakın mahalle adı, yol yönü, konum bağlantısı ve aracın çalışıp çalışmadığı bilgisini paylaşmanız önerilir.',
    nearbyDistricts: ['golbasi', 'haymana', 'sereflikochisar'],
    faqs: [
      {
        question: 'Bala’da kırsal mahalle yollarında çekici hizmeti alınabilir mi?',
        answer: 'Evet. Yol tarifi ve konum bilgisi net olduğunda çekici yönlendirmesi değerlendirilebilir.'
      },
      {
        question: 'Konya Yolu bağlantısında yolda kaldım, ne yapmalıyım?',
        answer: 'Güvenli bir noktada bekleyip yol yönü, konum ve araç durumunu paylaşmanız süreci kolaylaştırır.'
      },
      {
        question: 'Bala’dan Ankara merkeze araç taşıma yapılır mı?',
        answer: 'Evet. Teslim adresi ve araç bilgisiyle taşıma planı oluşturulabilir.'
      },
      {
        question: 'Bala’da kaza sonrası çekici çağrılabilir mi?',
        answer: 'Kaza sonrası güvenlik ve resmi süreçler tamamlandıktan sonra araç taşıma talebi değerlendirilebilir.'
      }
    ]
  },
  {
    slug: 'beypazari',
    name: 'Beypazarı',
    title: 'Beypazarı Oto Çekici | Uzun Mesafe Araç Taşıma',
    description:
      'Beypazarı’nda oto çekici, yol yardım ve şehirlerarası araç taşıma desteği. Ayaş-Beypazarı yolu ve Nallıhan bağlantıları için ulaşın.',
    h1: 'Beypazarı Oto Çekici Hizmeti',
    shortIntro:
      'Beypazarı’nda batı Ankara bağlantıları, uzun mesafe güzergahları ve ilçe içi araç taşıma için çekici desteği.',
    longIntro:
      'Beypazarı; Ankara’nın batısında, Ayaş ve Nallıhan bağlantılarıyla uzun mesafe araç taşıma ihtiyacının sık görülebildiği bir ilçedir. İlçe merkezinde, sanayi çevresinde veya şehirlerarası bağlantılarda kalan araçlar için güvenli taşıma planı konum ve rota bilgisiyle oluşturulur.',
    localFocus:
      'Batı aksında mesafeler uzayabildiği için arıza noktası, teslim adresi ve aracın hareket kabiliyeti baştan netleştirilmelidir.',
    neighborhoods: ['Beypazarı Merkez', 'Başağaç', 'Hacıkara', 'Ayvaşık', 'Rüstempaşa'],
    mainRoads: ['Ayaş-Beypazarı Yolu', 'Nallıhan bağlantısı', 'Ankara Yolu'],
    commonScenarios: [
      {
        title: 'Şehirlerarası taşıma ihtiyacı',
        description: 'Beypazarı çıkışlı veya varışlı uzun mesafe araç taşıma talepleri rota bilgisiyle planlanır.'
      },
      {
        title: 'İlçe sanayi çevresinde arıza',
        description: 'Servis veya sanayi noktasına taşınacak araçlar için teslim adresinin net paylaşılması faydalıdır.'
      },
      {
        title: 'Nallıhan yönünde yolda kalma',
        description: 'Ana yol üzerinde kalan araçlarda kilometre, yön ve yakın nokta bilgisi önemlidir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Beypazarı çekici',
        description: 'İlçe merkezi, çevre mahalleler ve ana yol bağlantıları için çekici desteği verilir.'
      },
      {
        title: 'Uzun mesafe taşıma',
        description: 'Ankara içi veya şehir dışı teslim noktalarına araç taşıma planlanabilir.'
      },
      {
        title: 'Yol yardım yönlendirmesi',
        description: 'Arıza durumuna göre çekici veya yol yardım ihtiyacı değerlendirilir.'
      }
    ],
    processNote:
      'Beypazarı’nda rota ve teslim noktası baştan netleşirse taşıma süreci daha öngörülebilir ilerler.',
    nearbyDistricts: ['ayas', 'nallihan', 'gudul'],
    faqs: [
      {
        question: 'Beypazarı’ndan şehirlerarası araç taşıma yapılır mı?',
        answer: 'Evet. Rota, mesafe ve araç bilgisi netleştiğinde taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Ayaş-Beypazarı yolunda çekici çağırabilir miyim?',
        answer: 'Yol yönü ve konum paylaşımıyla çekici ihtiyacı planlanabilir.'
      },
      {
        question: 'Beypazarı ilçe merkezinden servise taşıma yapılır mı?',
        answer: 'Evet. Teslim servisi veya otopark adresi paylaşıldığında taşıma süreci oluşturulabilir.'
      },
      {
        question: 'Nallıhan bağlantısında arıza olursa hangi bilgiler gerekir?',
        answer: 'Konum, kilometre bilgisi, yol yönü ve aracın yürür durumda olup olmadığı bilgisi faydalıdır.'
      }
    ]
  },
  {
    slug: 'camlidere',
    name: 'Çamlıdere',
    title: 'Çamlıdere Çekici Hizmeti | Dağ Yolu ve Uzun Mesafe Destek',
    description:
      'Çamlıdere’de oto çekici ve yol yardım desteği. Kızılcahamam bağlantısı, orman yolları ve ilçe yollarında araç taşıma hizmeti.',
    h1: 'Çamlıdere Çekici Hizmeti',
    shortIntro:
      'Çamlıdere’de dağ yolu, orman çevresi ve Kızılcahamam bağlantılı güzergahlarda çekici desteği.',
    longIntro:
      'Çamlıdere; Ankara’nın kuzeybatısında, ormanlık alanlar ve dağ yolu bağlantılarıyla dikkat çeker. Bu bölgede yolda kalma durumlarında konum paylaşımı kadar yol şartı, hava durumu ve aracın güvenli bekleme noktasında olup olmadığı da önemlidir.',
    localFocus:
      'Çamlıdere çevresinde bazı güzergahlar dar veya virajlı olabilir; yakın mahalle, yol ayrımı ve araç konumu çekici planlamasını etkiler.',
    neighborhoods: ['Çamlıdere Merkez', 'Peçenek', 'Osmansin', 'Elmalı', 'Yahyalar'],
    mainRoads: ['Kızılcahamam bağlantısı', 'Gerede-Ankara aksı', 'İlçe yolları'],
    commonScenarios: [
      {
        title: 'Dağ yolunda arıza',
        description: 'Virajlı veya eğimli yolda kalan araçlar için güvenli bekleme noktası bilgisi önemlidir.'
      },
      {
        title: 'Kızılcahamam bağlantısında çekici ihtiyacı',
        description: 'Kuzeybatı aksında rota ve konum bilgisiyle çekici planlaması yapılır.'
      },
      {
        title: 'Uzun mesafe taşıma',
        description: 'Çamlıdere’den Ankara merkez veya farklı teslim noktalarına araç taşıma değerlendirilebilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Çamlıdere oto çekici',
        description: 'İlçe merkezi ve bağlantı yollarında çekici desteği sağlanabilir.'
      },
      {
        title: 'Güvenli taşıma',
        description: 'Yol şartı ve araç durumu dikkate alınarak taşıma planı oluşturulur.'
      },
      {
        title: 'Yol yardım',
        description: 'Aracın durumuna göre çekici veya temel yol yardım ihtiyacı değerlendirilir.'
      }
    ],
    processNote:
      'Çamlıdere’de yol şartı, yakın mahalle, hava durumu ve konum bağlantısı gibi bilgileri paylaşmanız faydalıdır.',
    nearbyDistricts: ['kizilcahamam', 'gudul', 'kahramankazan'],
    faqs: [
      {
        question: 'Çamlıdere’de dağ yolunda kalan araç için çekici çağrılır mı?',
        answer: 'Evet. Yol şartı, konum ve aracın güvenli bekleme noktası bilgisiyle talep değerlendirilir.'
      },
      {
        question: 'Kızılcahamam bağlantısında araç taşıma yapılır mı?',
        answer: 'Rota ve teslim noktası netleştiğinde araç taşıma planı oluşturulabilir.'
      },
      {
        question: 'Çamlıdere’den Ankara merkeze çekici hizmeti var mı?',
        answer: 'Araç durumu ve teslim adresiyle Ankara merkeze taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Konum yoksa nasıl tarif vermeliyim?',
        answer: 'Yakın mahalle, yol ayrımı, tabela veya tesis bilgisi paylaşmanız yönlendirmeye yardımcı olur.'
      }
    ]
  },
  {
    slug: 'cubuk',
    name: 'Çubuk',
    title: 'Çubuk Oto Çekici | Esenboğa ve Kuzey Ankara Yol Yardım',
    description:
      'Çubuk’ta oto çekici ve yol yardım desteği. Esenboğa Yolu, Akyurt bağlantıları ve Çubuk ilçe merkezi için araç taşıma hizmeti.',
    h1: 'Çubuk Oto Çekici Hizmeti',
    shortIntro:
      'Çubuk’ta Esenboğa, Akyurt ve kuzey Ankara bağlantılarında çekici ve araç taşıma desteği.',
    longIntro:
      'Çubuk; Esenboğa Yolu ve Akyurt bağlantılarına yakın konumu nedeniyle hem ilçe içi hem de kuzey Ankara aksında çekici ihtiyacının oluşabildiği bir bölgedir. Araç arızası, servis taşıma veya ana yol üzerinde yolda kalma durumlarında konum ve yol yönü bilgisi önemlidir.',
    localFocus:
      'Çubuk’ta ilçe merkezi ile ana yol bağlantıları arasında mesafe ve yol karakteri değişebilir; yakın mahalle ve yol yönü paylaşımı süreci hızlandırır.',
    neighborhoods: ['Çubuk Merkez', 'Yıldırım Beyazıt', 'Barbaros', 'Atatürk', 'Cumhuriyet'],
    mainRoads: ['Esenboğa Yolu', 'Çubuk Yolu', 'Akyurt bağlantıları'],
    commonScenarios: [
      {
        title: 'İlçe merkezinde araç arızası',
        description: 'Çalışmayan araç servis, otopark veya belirlediğiniz teslim noktasına taşınabilir.'
      },
      {
        title: 'Esenboğa bağlantısında yolda kalma',
        description: 'Ana yol üzerinde konum, yön ve emniyetli bekleme noktası bilgisi önemlidir.'
      },
      {
        title: 'Akyurt yönüne taşıma',
        description: 'Yakın ilçeler arası taşıma talepleri rota ve araç durumuna göre planlanır.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Çubuk çekici',
        description: 'İlçe merkezi ve kuzey aks bağlantıları için çekici yönlendirmesi yapılabilir.'
      },
      {
        title: 'Servis taşıma',
        description: 'Aracın servise veya otoparka güvenli şekilde taşınması planlanır.'
      },
      {
        title: 'Acil yol yardım',
        description: 'Arıza durumuna göre çekici veya yol yardım ihtiyacı birlikte değerlendirilir.'
      }
    ],
    processNote:
      'Çubuk’ta konum paylaşırken ilçe merkezi mi, Esenboğa bağlantısı mı yoksa Akyurt yönü mü olduğunu belirtmeniz faydalıdır.',
    nearbyDistricts: ['akyurt', 'pursaklar', 'kalecik'],
    faqs: [
      {
        question: 'Çubuk’ta Esenboğa Yolu üzerinde çekici çağırabilir miyim?',
        answer: 'Evet. Yol yönü ve konum bilgisiyle çekici talebi değerlendirilebilir.'
      },
      {
        question: 'Çubuk ilçe merkezinden servise taşıma yapılır mı?',
        answer: 'Evet. Araç durumu ve teslim adresi paylaşıldığında taşıma süreci planlanabilir.'
      },
      {
        question: 'Akyurt veya Pursaklar yönüne araç taşıma olur mu?',
        answer: 'Rota ve teslim noktası netleştiğinde yakın ilçe taşıma talepleri değerlendirilebilir.'
      },
      {
        question: 'Çubuk’ta gece çekici desteği alınabilir mi?',
        answer: 'Yıldızlar Oto Kurtarma 7/24 ulaşılabilir destek sunar; konum paylaşımı süreci kolaylaştırır.'
      }
    ]
  },
  {
    slug: 'elmadag',
    name: 'Elmadağ',
    title: 'Elmadağ Oto Çekici | Samsun Yolu Araç Taşıma',
    description:
      'Elmadağ’da oto çekici, yol yardım ve araç taşıma desteği. Samsun Yolu, Lalahan ve Ankara-Kırıkkale güzergahı için destek alın.',
    h1: 'Elmadağ Oto Çekici Hizmeti',
    shortIntro:
      'Elmadağ’da Samsun Yolu, sanayi çevresi ve doğu Ankara bağlantılarında çekici desteği.',
    longIntro:
      'Elmadağ; Samsun Yolu ve Ankara-Kırıkkale güzergahı üzerinde yer aldığı için şehirlerarası trafikle ilçe içi ulaşımı bir arada barındırır. Araç arızası, kaza sonrası çekim veya servis taşıma taleplerinde yol yönü ve aracın güvenli konumu çekici sürecinin temel bilgisidir.',
    localFocus:
      'Lalahan, Hasanoğlan ve ana yol bağlantılarında yakın kavşak, tesis veya yol yönü bilgisi paylaşılması yönlendirmeyi kolaylaştırır.',
    neighborhoods: ['Elmadağ Merkez', 'Hasanoğlan', 'Lalahan', 'Kurtuluş', 'Yenice'],
    mainRoads: ['Samsun Yolu', 'Ankara-Kırıkkale yolu', 'Lalahan bağlantısı'],
    commonScenarios: [
      {
        title: 'Samsun Yolu üzerinde arıza',
        description: 'Ana yolda kalan araçlarda emniyetli bekleme noktası ve yol yönü bilgisi önemlidir.'
      },
      {
        title: 'Sanayi veya servis taşıma',
        description: 'Araç ilçe içindeki veya Ankara’daki servis noktasına taşınabilir.'
      },
      {
        title: 'Kaza sonrası çekim',
        description: 'Kaza sonrası hareket edemeyen araçlar için güvenli taşıma planı yapılır.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Elmadağ çekici',
        description: 'İlçe merkezi, Hasanoğlan ve Lalahan çevresinde çekici desteği sunulur.'
      },
      {
        title: 'Ana yol taşıma',
        description: 'Samsun Yolu ve Kırıkkale bağlantılarında araç taşıma talepleri değerlendirilir.'
      },
      {
        title: 'Yol yardım',
        description: 'Aracın durumuna göre çekici veya yol yardım çözümü planlanır.'
      }
    ],
    processNote:
      'Elmadağ’da yol yönü, yakın tesis ve aracın bulunduğu şerit ya da cep bilgisi özellikle ana yol taleplerinde önemlidir.',
    nearbyDistricts: ['mamak', 'altindag', 'kalecik'],
    faqs: [
      {
        question: 'Elmadağ Samsun Yolu üzerinde çekici çağrılır mı?',
        answer: 'Evet. Konum ve yol yönü paylaşıldığında çekici süreci değerlendirilebilir.'
      },
      {
        question: 'Lalahan veya Hasanoğlan’dan araç taşıma yapılır mı?',
        answer: 'Evet. Teslim adresi ve araç durumu netleştiğinde taşıma planı oluşturulabilir.'
      },
      {
        question: 'Elmadağ’da kaza sonrası araç çekimi var mı?',
        answer: 'Kaza sonrası resmi süreçler tamamlandıktan sonra araç güvenli noktaya taşınabilir.'
      },
      {
        question: 'Ankara-Kırıkkale yönünde arıza olursa hangi bilgileri vermeliyim?',
        answer: 'Yol yönü, kilometre veya yakın nokta, araç tipi ve arıza durumu bilgisi faydalıdır.'
      }
    ]
  },
  {
    slug: 'evren',
    name: 'Evren',
    title: 'Evren Çekici Hizmeti | Uzun Mesafe Oto Kurtarma',
    description:
      'Evren’de oto çekici, yol yardım ve uzun mesafe araç taşıma desteği. Şereflikoçhisar bağlantısı ve Hirfanlı çevresi için ulaşın.',
    h1: 'Evren Çekici Hizmeti',
    shortIntro:
      'Evren’de uzak güneydoğu Ankara aksı, Hirfanlı çevresi ve uzun mesafe taşıma ihtiyaçları için çekici desteği.',
    longIntro:
      'Evren; Ankara’nın merkeze en uzak ilçelerinden biri olduğu için çekici taleplerinde rota, mesafe ve araç durumu özellikle önemlidir. İlçe yollarında, Hirfanlı çevresinde veya Şereflikoçhisar bağlantısında yolda kalan araçlar için konumun doğru paylaşılması gerekir.',
    localFocus:
      'Uzak güzergahlarda çekici planlaması için teslim noktası, araç tipi, yol şartı ve yakın yerleşim bilgileri birlikte değerlendirilir.',
    neighborhoods: ['Evren Merkez', 'Solakuşağı', 'İnebeyli', 'Altınbaşak', 'Çatalpınar'],
    mainRoads: ['Şereflikoçhisar bağlantısı', 'Hirfanlı çevresi', 'İlçe yolları'],
    commonScenarios: [
      {
        title: 'Uzun mesafede arıza',
        description: 'Evren çevresinde mesafe uzun olduğu için rota ve teslim adresi önceden netleştirilmelidir.'
      },
      {
        title: 'Hirfanlı çevresinde yolda kalma',
        description: 'Yakın yerleşim, kıyı yolu veya bağlantı noktası bilgisi çekici erişimini kolaylaştırır.'
      },
      {
        title: 'Şereflikoçhisar yönüne taşıma',
        description: 'Yakın ilçe bağlantıları için araç durumu ve teslim noktasıyla taşıma planı yapılabilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Evren çekici',
        description: 'İlçe merkezi ve çevre bağlantılarda çekici talebi değerlendirilebilir.'
      },
      {
        title: 'Uzun mesafe taşıma',
        description: 'Evren çıkışlı veya varışlı taşıma süreçleri rota bilgisiyle planlanır.'
      },
      {
        title: 'Yol yardım değerlendirmesi',
        description: 'Arıza tipi ve araç durumuna göre uygun destek yöntemi belirlenir.'
      }
    ],
    processNote:
      'Evren’de canlı konum, yakın yerleşim ve teslim adresi bilgisini birlikte paylaşmanız planlamayı kolaylaştırır.',
    nearbyDistricts: ['sereflikochisar', 'bala', 'haymana'],
    faqs: [
      {
        question: 'Evren’de uzun mesafe araç taşıma yapılır mı?',
        answer: 'Evet. Rota, araç durumu ve teslim noktası bilgisiyle taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Hirfanlı çevresinde çekici çağırabilir miyim?',
        answer: 'Konum ve yakın referans noktası netleştiğinde çekici yönlendirmesi planlanabilir.'
      },
      {
        question: 'Evren’den Ankara merkeze araç taşınır mı?',
        answer: 'Araç tipi ve teslim adresi paylaşıldığında Ankara merkeze taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Konum paylaşamıyorsam ne yapmalıyım?',
        answer: 'Yakın mahalle, yol ayrımı, tabela veya bilinen referans noktasını tarif etmeniz faydalıdır.'
      }
    ]
  },
  {
    slug: 'gudul',
    name: 'Güdül',
    title: 'Güdül Oto Çekici | Kırsal Yol ve Araç Taşıma',
    description:
      'Güdül’de oto çekici ve yol yardım desteği. Ayaş-Güdül yolu, Beypazarı bağlantısı ve çevre mahallelerde araç taşıma hizmeti.',
    h1: 'Güdül Oto Çekici Hizmeti',
    shortIntro:
      'Güdül’de batı-kuzeybatı Ankara aksı, kırsal mahalle yolları ve uzun mesafe destek ihtiyaçları için çekici hizmeti.',
    longIntro:
      'Güdül; Ayaş ve Beypazarı bağlantılarıyla Ankara’nın daha sakin ancak mesafe planlaması isteyen ilçelerinden biridir. Kırsal mahalle yollarında veya ilçe merkezi çevresinde yaşanan arızalarda konum, yol tarifi ve gidilecek teslim noktası bilgisi önemlidir.',
    localFocus:
      'Çevre mahalle yollarında çekici erişimi için yakın yerleşim, yol ayrımı ve aracın yol üzerindeki konumu net paylaşılmalıdır.',
    neighborhoods: ['Güdül Merkez', 'Yeşilöz', 'Çağa', 'Sapanlı', 'Kamanlar'],
    mainRoads: ['Ayaş-Güdül Yolu', 'Beypazarı bağlantısı', 'Çevre mahalle yolları'],
    commonScenarios: [
      {
        title: 'Kırsal yolda yolda kalma',
        description: 'Mahalle yollarında konum ve tarif bilgisi çekici yönlendirmesi için kritik olur.'
      },
      {
        title: 'Ayaş bağlantısında arıza',
        description: 'Ana bağlantı yolunda kalan araçlar için yol yönü ve güvenli bekleme noktası paylaşılmalıdır.'
      },
      {
        title: 'Planlı araç taşıma',
        description: 'Güdül’den servis veya otopark noktasına taşıma talepleri rota bilgisiyle değerlendirilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Güdül çekici',
        description: 'İlçe merkezi ve çevre yollar için çekici desteği planlanabilir.'
      },
      {
        title: 'Servis taşıma',
        description: 'Araç Ankara içindeki servis veya teslim noktasına taşınabilir.'
      },
      {
        title: 'Uzun mesafe destek',
        description: 'Batı aksındaki uzun mesafe taşıma talepleri araç durumuna göre değerlendirilir.'
      }
    ],
    processNote:
      'Güdül’de yakın köy/mahalle, yol ayrımı ve canlı konum bilgisi çekici ekibinin doğru noktaya yönlenmesini kolaylaştırır.',
    nearbyDistricts: ['ayas', 'beypazari', 'camlidere'],
    faqs: [
      {
        question: 'Güdül çevre mahallelerinden araç alınır mı?',
        answer: 'Evet. Konum ve yol tarifi netleştiğinde çekici talebi değerlendirilebilir.'
      },
      {
        question: 'Ayaş-Güdül yolunda çekici çağırabilir miyim?',
        answer: 'Yol yönü ve güvenli bekleme noktası paylaşıldığında süreç planlanabilir.'
      },
      {
        question: 'Güdül’den servise araç taşıma yapılır mı?',
        answer: 'Araç durumu ve teslim adresiyle servis taşıma talebi oluşturulabilir.'
      },
      {
        question: 'Güdül’de hangi bilgileri paylaşmalıyım?',
        answer: 'Konum, mahalle adı, yol tarifi, araç tipi ve gidilecek adres bilgisi yeterli olur.'
      }
    ]
  },
  {
    slug: 'haymana',
    name: 'Haymana',
    title: 'Haymana Oto Çekici | Uzun Yol ve Kırsal Yol Yardım',
    description:
      'Haymana’da oto çekici, yol yardım ve şehir dışı araç taşıma desteği. Haymana Yolu, Konya Yolu bağlantısı ve çevre yollar için ulaşın.',
    h1: 'Haymana Oto Çekici Hizmeti',
    shortIntro:
      'Haymana’da uzun yol, kırsal bağlantılar ve şehir dışı taşıma ihtiyaçlarında çekici desteği.',
    longIntro:
      'Haymana; Ankara’nın güneyinde geniş mahalle bağlantıları ve uzun yol güzergahlarıyla çekici planlamasında konum doğruluğunun öne çıktığı ilçelerden biridir. Araç arızası, servis taşıma veya şehir dışı rota taleplerinde yol yönü ve teslim adresi sürecin temel bilgileridir.',
    localFocus:
      'Haymana çevresinde ana yol ile mahalle yolları arasında mesafe olabileceği için canlı konum ve yakın referans noktası paylaşımı önemlidir.',
    neighborhoods: ['Haymana Merkez', 'Medrese', 'Yenice', 'Balçıkhisar', 'Oyaca'],
    mainRoads: ['Haymana Yolu', 'Konya Yolu bağlantısı', 'İlçe çevre yolları'],
    commonScenarios: [
      {
        title: 'Uzun yol arızası',
        description: 'Haymana yolunda kalan araçlar için yol yönü ve güvenli bekleme noktası bilgisi gerekir.'
      },
      {
        title: 'Kırsal bağlantıda çekici ihtiyacı',
        description: 'Çevre mahallelerde yol tarifi ve yakın referans noktası çekici erişimini kolaylaştırır.'
      },
      {
        title: 'Şehir dışı taşıma',
        description: 'Haymana çıkışlı taşıma talepleri rota ve teslim noktasıyla planlanabilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Haymana çekici',
        description: 'İlçe merkezi ve çevre yollar için çekici desteği değerlendirilir.'
      },
      {
        title: 'Araç taşıma',
        description: 'Araç servis, otopark veya şehir dışı teslim noktasına taşınabilir.'
      },
      {
        title: 'Yol yardım',
        description: 'Arıza durumuna göre çekici veya yol yardım yönlendirmesi planlanır.'
      }
    ],
    processNote:
      'Haymana’da yol yönü, mahalle adı ve teslim adresi bilgilerini baştan paylaşmanız taşıma sürecini netleştirir.',
    nearbyDistricts: ['bala', 'golbasi', 'polatli'],
    faqs: [
      {
        question: 'Haymana Yolu üzerinde çekici çağırabilir miyim?',
        answer: 'Evet. Yol yönü, konum ve araç durumu bilgisiyle çekici talebi değerlendirilebilir.'
      },
      {
        question: 'Haymana’dan şehir dışına araç taşıma olur mu?',
        answer: 'Rota ve teslim noktası netleştiğinde şehir dışı taşıma talebi planlanabilir.'
      },
      {
        question: 'Çevre mahallelerde yolda kalırsam ne yapmalıyım?',
        answer: 'Konum, yakın mahalle ve yol tarifi bilgisini paylaşmanız çekici yönlendirmesini kolaylaştırır.'
      },
      {
        question: 'Haymana’da kaza sonrası araç çekimi yapılır mı?',
        answer: 'Güvenlik ve resmi süreçler tamamlandıktan sonra araç taşıma talebi değerlendirilebilir.'
      }
    ]
  },
  {
    slug: 'kahramankazan',
    name: 'Kahramankazan',
    title: 'Kahramankazan Oto Çekici | İstanbul Yolu Araç Taşıma',
    description:
      'Kahramankazan’da oto çekici, sanayi bölgesi araç taşıma ve yol yardım desteği. İstanbul Yolu ve Saray bağlantıları için ulaşın.',
    h1: 'Kahramankazan Oto Çekici Hizmeti',
    shortIntro:
      'Kahramankazan’da sanayi, lojistik alanları, İstanbul Yolu ve Saray bağlantılarında çekici desteği.',
    longIntro:
      'Kahramankazan; İstanbul Yolu üzerinde yer alan sanayi, lojistik ve yerleşim alanlarıyla araç taşıma ihtiyacının farklı senaryolarda görülebildiği bir ilçedir. İş aracı arızası, servis taşıma veya ana yol üzerinde yolda kalma durumlarında araç tipi ve konum bilgisi önemlidir.',
    localFocus:
      'Sanayi ve lojistik alanlarında kapı, blok, tesis adı ve araç tipi bilgisi çekici planlamasını daha doğru hale getirir.',
    neighborhoods: ['Kahramankazan Merkez', 'Saray', 'Kayı', 'Fatih', 'Atatürk'],
    mainRoads: ['İstanbul Yolu', 'Saray bağlantısı', 'Sanayi yolları'],
    commonScenarios: [
      {
        title: 'Sanayi bölgesinden araç taşıma',
        description: 'Servis, fabrika veya sanayi noktasındaki araçlar için teslim adresiyle taşıma planlanır.'
      },
      {
        title: 'İstanbul Yolu üzerinde arıza',
        description: 'Ana yol üzerinde konum, yön ve güvenli bekleme noktası bilgisi önemlidir.'
      },
      {
        title: 'İş aracı çekimi',
        description: 'Araç tipi ve kullanım durumu paylaşılarak uygun taşıma yaklaşımı değerlendirilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Kahramankazan çekici',
        description: 'İlçe merkezi, Saray ve sanayi çevresi için çekici desteği sağlanabilir.'
      },
      {
        title: 'Ticari araç taşıma',
        description: 'Araç tipi ve durumuna göre taşıma talebi değerlendirilir.'
      },
      {
        title: 'Servis ve otopark taşıma',
        description: 'Araç belirttiğiniz servis, otopark veya teslim noktasına taşınabilir.'
      }
    ],
    processNote:
      'Kahramankazan’da sanayi kapısı, tesis adı, İstanbul Yolu yönü ve araç tipi bilgisi paylaşılmalıdır.',
    nearbyDistricts: ['sincan', 'akyurt', 'pursaklar'],
    faqs: [
      {
        question: 'Kahramankazan sanayi bölgesinden araç taşıma yapılır mı?',
        answer: 'Evet. Tesis veya servis adresi paylaşıldığında taşıma süreci planlanabilir.'
      },
      {
        question: 'İstanbul Yolu üzerinde çekici çağırabilir miyim?',
        answer: 'Yol yönü ve konum bilgisiyle çekici talebi değerlendirilebilir.'
      },
      {
        question: 'Ticari araçlar için çekici desteği veriliyor mu?',
        answer: 'Araç tipi, ağırlık ve durum bilgisiyle uygun taşıma yöntemi değerlendirilir.'
      },
      {
        question: 'Saray bölgesinden servis taşıması yapılır mı?',
        answer: 'Evet. Araç durumu ve teslim adresi netleştiğinde taşıma planı oluşturulabilir.'
      }
    ]
  },
  {
    slug: 'kalecik',
    name: 'Kalecik',
    title: 'Kalecik Oto Çekici | Çankırı Yolu Yol Yardım',
    description:
      'Kalecik’te oto çekici, yol yardım ve araç taşıma desteği. Çankırı Yolu, ilçe bağlantıları ve çevre mahalleler için ulaşın.',
    h1: 'Kalecik Oto Çekici Hizmeti',
    shortIntro:
      'Kalecik’te kuzeydoğu Ankara aksı, Çankırı Yolu ve çevre mahalle bağlantılarında çekici desteği.',
    longIntro:
      'Kalecik; Ankara’nın kuzeydoğusunda Çankırı Yolu bağlantısıyla öne çıkar. İlçe merkezi, çevre mahalleler veya ana yol üzerinde oluşan arızalarda konum, yol yönü ve gidilecek teslim noktası bilgisi çekici sürecini netleştirir.',
    localFocus:
      'Kalecik çevresinde mesafe ve yol bağlantıları değişebildiği için yakın mahalle, kavşak ve ana yol yönü bilgisi değerlidir.',
    neighborhoods: ['Kalecik Merkez', 'Çandır', 'Gökdere', 'Hançılı', 'Elmapınar'],
    mainRoads: ['Çankırı Yolu', 'Kalecik bağlantısı', 'Çevre mahalle yolları'],
    commonScenarios: [
      {
        title: 'Çankırı Yolu üzerinde arıza',
        description: 'Ana yol üzerindeki arızalarda güvenli bekleme noktası ve yol yönü bilgisi gerekir.'
      },
      {
        title: 'İlçe merkezinden servis taşıma',
        description: 'Araç Kalecik veya Ankara’daki servis noktasına taşınabilir.'
      },
      {
        title: 'Mahalle yolunda çekici ihtiyacı',
        description: 'Çevre mahallelerde konum ve yol tarifi paylaşımı çekici erişimini kolaylaştırır.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Kalecik çekici',
        description: 'İlçe merkezi ve çevre bağlantılar için çekici talebi değerlendirilebilir.'
      },
      {
        title: 'Yol yardım',
        description: 'Arızanın durumuna göre çekici veya yol yardım yönlendirmesi planlanır.'
      },
      {
        title: 'Araç taşıma',
        description: 'Teslim adresiyle birlikte servis veya otopark taşıması yapılabilir.'
      }
    ],
    processNote:
      'Kalecik’te konum, yol yönü, yakın mahalle ve aracın çalışıp çalışmadığı bilgilerini paylaşmanız önerilir.',
    nearbyDistricts: ['cubuk', 'akyurt', 'elmadag'],
    faqs: [
      {
        question: 'Kalecik Çankırı Yolu üzerinde çekici çağırabilir miyim?',
        answer: 'Evet. Yol yönü ve konum bilgisiyle çekici ihtiyacı değerlendirilebilir.'
      },
      {
        question: 'Kalecik çevre mahallelerinden araç alınır mı?',
        answer: 'Konum ve yol tarifi netleştiğinde taşıma talebi planlanabilir.'
      },
      {
        question: 'Kalecik’ten Ankara merkeze araç taşıma olur mu?',
        answer: 'Araç durumu ve teslim adresi bilgisiyle taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Aracım çalışmıyorsa hangi bilgileri vermeliyim?',
        answer: 'Araç tipi, bulunduğu konum, yol durumu ve gidilecek adres bilgisi yeterli olur.'
      }
    ]
  },
  {
    slug: 'kizilcahamam',
    name: 'Kızılcahamam',
    title: 'Kızılcahamam Çekici | İstanbul Yolu ve Dağ Yolu Destek',
    description:
      'Kızılcahamam’da oto çekici ve yol yardım desteği. İstanbul Yolu, D750 aksı, Soğuksu çevresi ve uzun mesafe taşıma için ulaşın.',
    h1: 'Kızılcahamam Çekici Hizmeti',
    shortIntro:
      'Kızılcahamam’da İstanbul Yolu, D750 aksı, dağ yolu bağlantıları ve uzun mesafe çekici ihtiyaçları için destek.',
    longIntro:
      'Kızılcahamam; Ankara-İstanbul bağlantısı, D750 aksı ve Soğuksu çevresiyle hem şehirlerarası hem de turistik güzergah trafiğine sahiptir. Yolda kalma, kaza sonrası çekim veya şehir dışı taşıma taleplerinde yol yönü, güvenli bekleme noktası ve teslim adresi bilgisi önemlidir.',
    localFocus:
      'Dağ yolu ve ana yol bağlantılarında hava, yol şartı ve yakın referans noktası çekici sürecini etkileyebilir.',
    neighborhoods: ['Kızılcahamam Merkez', 'Soğuksu', 'İsmetpaşa', 'Akçay', 'Güvem'],
    mainRoads: ['İstanbul Yolu', 'D750 aksı', 'Soğuksu çevresi'],
    commonScenarios: [
      {
        title: 'İstanbul Yolu üzerinde arıza',
        description: 'Ana yol üzerinde kalan araçlar için yol yönü ve konum bilgisi kritik olur.'
      },
      {
        title: 'Dağ yolu bağlantısında çekici ihtiyacı',
        description: 'Eğimli ve virajlı güzergahlarda güvenli bekleme noktası paylaşılmalıdır.'
      },
      {
        title: 'Uzun mesafe araç taşıma',
        description: 'Ankara veya şehir dışı teslim noktalarına taşıma talepleri rota bilgisiyle planlanır.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Kızılcahamam çekici',
        description: 'İlçe merkezi, Soğuksu çevresi ve ana yol bağlantıları için çekici desteği sağlanır.'
      },
      {
        title: 'Şehirlerarası taşıma',
        description: 'D750 ve İstanbul Yolu aksında uzun mesafe taşıma talepleri değerlendirilebilir.'
      },
      {
        title: 'Kaza sonrası çekim',
        description: 'Araç güvenli noktaya, servise veya otoparka taşınabilir.'
      }
    ],
    processNote:
      'Kızılcahamam’da yol yönü, kilometre bilgisi, yakın tesis veya Soğuksu çevresi gibi referansları paylaşmanız faydalıdır.',
    nearbyDistricts: ['camlidere', 'kahramankazan', 'gudul'],
    faqs: [
      {
        question: 'Kızılcahamam İstanbul Yolu üzerinde çekici hizmeti alabilir miyim?',
        answer: 'Evet. Konum ve yol yönü bilgisiyle çekici talebi değerlendirilebilir.'
      },
      {
        question: 'Soğuksu çevresinden araç taşıma yapılır mı?',
        answer: 'Araç konumu ve teslim adresi paylaşıldığında taşıma planı oluşturulabilir.'
      },
      {
        question: 'Kızılcahamam’dan şehir dışına araç taşıma olur mu?',
        answer: 'Rota, araç durumu ve teslim noktasıyla şehir dışı taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Dağ yolunda arıza olursa ne paylaşmalıyım?',
        answer: 'Yol şartı, konum, yakın referans noktası ve aracın güvenli bekleme durumunu paylaşmanız önemlidir.'
      }
    ]
  },
  {
    slug: 'nallihan',
    name: 'Nallıhan',
    title: 'Nallıhan Oto Çekici | Batı Ankara Uzun Mesafe Taşıma',
    description:
      'Nallıhan’da oto çekici, yol yardım ve şehirlerarası araç taşıma desteği. Beypazarı-Nallıhan yolu ve Çayırhan çevresi için ulaşın.',
    h1: 'Nallıhan Oto Çekici Hizmeti',
    shortIntro:
      'Nallıhan’da batı Ankara’nın uzak bağlantıları, şehirlerarası taşıma ve uzun mesafe çekici ihtiyaçları için destek.',
    longIntro:
      'Nallıhan; Ankara’nın batıdaki uzak ilçelerinden biri olduğu için çekici taleplerinde mesafe, rota ve teslim noktası planlaması öne çıkar. Beypazarı bağlantısı, Çayırhan çevresi veya ilçe yollarında yolda kalındığında doğru konum paylaşımı süreci kolaylaştırır.',
    localFocus:
      'Uzak mesafe güzergahlarında araç tipi, arıza durumu ve teslim noktası bilgisi taşıma planının doğru kurulmasına yardımcı olur.',
    neighborhoods: ['Nallıhan Merkez', 'Çayırhan', 'Nasuhpaşa', 'Atça', 'Uluhan'],
    mainRoads: ['Beypazarı-Nallıhan Yolu', 'İstanbul bağlantısı', 'İlçe yolları'],
    commonScenarios: [
      {
        title: 'Uzun mesafe arıza',
        description: 'Nallıhan çevresinde kalan araçlar için rota ve teslim adresi baştan netleştirilmelidir.'
      },
      {
        title: 'Çayırhan çevresinden taşıma',
        description: 'Araç servis, otopark veya belirlenen teslim noktasına taşınabilir.'
      },
      {
        title: 'Beypazarı bağlantısında yolda kalma',
        description: 'Ana yol yönü, kilometre ve yakın referans bilgisi çekici yönlendirmesine yardımcı olur.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Nallıhan çekici',
        description: 'İlçe merkezi, Çayırhan ve çevre bağlantılar için çekici talebi değerlendirilebilir.'
      },
      {
        title: 'Şehirlerarası taşıma',
        description: 'Uzun mesafe araç taşıma talepleri rota bilgisiyle planlanır.'
      },
      {
        title: 'Güvenli araç taşıma',
        description: 'Araç durumu ve yol şartı dikkate alınarak taşıma yaklaşımı belirlenir.'
      }
    ],
    processNote:
      'Nallıhan’da canlı konum, yakın mahalle, yol yönü ve teslim noktası bilgisini birlikte paylaşmanız önerilir.',
    nearbyDistricts: ['beypazari', 'ayas', 'gudul'],
    faqs: [
      {
        question: 'Nallıhan’dan Ankara merkeze araç taşıma yapılır mı?',
        answer: 'Evet. Rota ve teslim adresi bilgisiyle taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Çayırhan çevresinde çekici çağırabilir miyim?',
        answer: 'Konum ve araç durumu paylaşıldığında çekici yönlendirmesi planlanabilir.'
      },
      {
        question: 'Beypazarı-Nallıhan yolunda arıza olursa ne yapmalıyım?',
        answer: 'Güvenli noktada bekleyip yol yönü, konum ve araç bilgilerini paylaşmanız gerekir.'
      },
      {
        question: 'Nallıhan’da şehirlerarası taşıma var mı?',
        answer: 'Araç tipi, mesafe ve teslim noktası netleştiğinde şehirlerarası taşıma değerlendirilebilir.'
      }
    ]
  },
  {
    slug: 'polatli',
    name: 'Polatlı',
    title: 'Polatlı Oto Çekici | Eskişehir Yolu Yol Yardım',
    description:
      'Polatlı’da oto çekici, yol yardım ve servis taşıma desteği. Eskişehir Yolu, Ankara-Polatlı yolu ve sanayi çevresi için ulaşın.',
    h1: 'Polatlı Oto Çekici Hizmeti',
    shortIntro:
      'Polatlı’da Eskişehir Yolu, şehirlerarası trafik, sanayi ve servis taşıma ihtiyaçlarında çekici desteği.',
    longIntro:
      'Polatlı; Eskişehir Yolu üzerinde yer alması ve şehirlerarası trafiğin yoğun olduğu bir ilçe olması nedeniyle çekici planlamasında yol yönü, güvenli bekleme noktası ve teslim adresi önemlidir. Sanayi çevresi, ilçe merkezi veya ana yol üzerindeki arıza talepleri için araç durumu netleştirilerek taşıma planı yapılır.',
    localFocus:
      'Polatlı’da ana yol ve sanayi bağlantıları farklı ihtiyaçlar doğurur; servis adı, yol yönü ve araç tipi bilgisi paylaşılmalıdır.',
    neighborhoods: ['Polatlı Merkez', 'Şentepe', 'Zafer', 'Cumhuriyet', 'Fatih'],
    mainRoads: ['Eskişehir Yolu', 'Ankara-Polatlı Yolu', 'Çevre yolu bağlantıları'],
    commonScenarios: [
      {
        title: 'Eskişehir Yolu üzerinde arıza',
        description: 'Ana yolda kalan araçlar için konum, yön ve güvenli bekleme noktası bilgisi gereklidir.'
      },
      {
        title: 'Sanayi veya servis taşıma',
        description: 'Araç Polatlı sanayi çevresinden servis ya da otopark noktasına taşınabilir.'
      },
      {
        title: 'Şehirlerarası taşıma',
        description: 'Polatlı çıkışlı veya varışlı uzun mesafe araç taşıma talepleri değerlendirilebilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Polatlı çekici',
        description: 'İlçe merkezi, sanayi ve Eskişehir Yolu bağlantıları için çekici desteği verilir.'
      },
      {
        title: 'Servis taşıma',
        description: 'Araç belirttiğiniz servis veya teslim noktasına güvenli şekilde taşınabilir.'
      },
      {
        title: 'Acil yol yardım',
        description: 'Arıza durumuna göre çekici veya yol yardım ihtiyacı değerlendirilir.'
      }
    ],
    processNote:
      'Polatlı’da Eskişehir Yolu yönü, sanayi girişi veya yakın kavşak bilgisini paylaşmanız yönlendirmeyi kolaylaştırır.',
    nearbyDistricts: ['sincan', 'etimesgut', 'haymana'],
    faqs: [
      {
        question: 'Polatlı Eskişehir Yolu üzerinde çekici çağırabilir miyim?',
        answer: 'Evet. Yol yönü ve konum bilgisiyle çekici talebi değerlendirilebilir.'
      },
      {
        question: 'Polatlı sanayiden araç taşıma yapılır mı?',
        answer: 'Evet. Servis veya teslim noktası paylaşıldığında taşıma süreci planlanabilir.'
      },
      {
        question: 'Polatlı’dan Ankara merkeze çekici hizmeti var mı?',
        answer: 'Araç durumu ve teslim adresiyle taşıma talebi değerlendirilebilir.'
      },
      {
        question: 'Şehirlerarası taşıma için hangi bilgiler gerekir?',
        answer: 'Araç tipi, çıkış noktası, teslim adresi ve aracın çalışıp çalışmadığı bilgisi gerekir.'
      }
    ]
  },
  {
    slug: 'pursaklar',
    name: 'Pursaklar',
    title: 'Pursaklar Oto Çekici | Esenboğa Yolu ve Havalimanı Bağlantısı',
    description:
      'Pursaklar’da oto çekici ve yol yardım desteği. Esenboğa Yolu, Saray bağlantısı ve kuzey Ankara aksı için araç taşıma hizmeti.',
    h1: 'Pursaklar Oto Çekici Hizmeti',
    shortIntro:
      'Pursaklar’da Esenboğa Yolu, havaalanı bağlantısı ve kuzey Ankara güzergahlarında çekici desteği.',
    longIntro:
      'Pursaklar; Esenboğa Yolu ve havaalanı bağlantısına yakın konumuyla yoğun ana yol trafiği ve yerleşim alanlarını birlikte barındırır. Araç arızası, servis taşıma veya ana yol üzerinde yolda kalma durumlarında yol yönü ve güvenli bekleme noktası bilgisi önemlidir.',
    localFocus:
      'Saray, Altınova ve Esenboğa aksında konum tarifinin net yapılması çekici yönlendirmesini kolaylaştırır.',
    neighborhoods: ['Pursaklar Merkez', 'Saray', 'Altınova', 'Mimar Sinan', 'Fatih'],
    mainRoads: ['Esenboğa Yolu', 'Saray bağlantısı', 'Protokol yolu aksı'],
    commonScenarios: [
      {
        title: 'Esenboğa Yolu üzerinde yolda kalma',
        description: 'Ana yol üzerinde yön, konum ve güvenli duraklama noktası paylaşılmalıdır.'
      },
      {
        title: 'Site veya otoparktan araç alma',
        description: 'Kapalı veya açık otoparktaki araçlar için giriş yüksekliği ve araç durumu bilgisi önemlidir.'
      },
      {
        title: 'Kuzey aksına araç taşıma',
        description: 'Akyurt, Çubuk veya Ankara merkezi yönlerine taşıma talepleri planlanabilir.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Pursaklar çekici',
        description: 'İlçe merkezi ve Esenboğa bağlantıları için çekici desteği sunulur.'
      },
      {
        title: 'Yol yardım',
        description: 'Arıza tipine göre çekici veya yol yardım ihtiyacı birlikte değerlendirilir.'
      },
      {
        title: 'Servis taşıma',
        description: 'Araç Ankara içindeki servis veya otopark noktasına taşınabilir.'
      }
    ],
    processNote:
      'Pursaklar’da Esenboğa yönü, Saray bağlantısı, site adı veya yakın kavşak bilgisini paylaşmanız faydalıdır.',
    nearbyDistricts: ['akyurt', 'cubuk', 'kecioren'],
    faqs: [
      {
        question: 'Pursaklar Esenboğa Yolu üzerinde çekici çağırabilir miyim?',
        answer: 'Evet. Yol yönü ve konum bilgisiyle çekici talebi değerlendirilebilir.'
      },
      {
        question: 'Pursaklar’da otoparktan araç alınır mı?',
        answer: 'Araç durumu, otopark girişi ve teslim adresi bilgisiyle taşıma planlanabilir.'
      },
      {
        question: 'Saray çevresinden servis taşıması yapılır mı?',
        answer: 'Evet. Teslim noktası paylaşıldığında taşıma süreci oluşturulabilir.'
      },
      {
        question: 'Pursaklar’dan Akyurt veya Çubuk yönüne taşıma yapılır mı?',
        answer: 'Rota ve araç durumu netleştiğinde yakın ilçe taşıma talepleri değerlendirilebilir.'
      }
    ]
  },
  {
    slug: 'sereflikochisar',
    name: 'Şereflikoçhisar',
    title: 'Şereflikoçhisar Çekici | Aksaray Yolu Araç Taşıma',
    description:
      'Şereflikoçhisar’da oto çekici, yol yardım ve şehirlerarası araç taşıma desteği. Ankara-Aksaray yolu ve Tuz Gölü çevresi için ulaşın.',
    h1: 'Şereflikoçhisar Çekici Hizmeti',
    shortIntro:
      'Şereflikoçhisar’da güneydoğu Ankara aksı, Tuz Gölü çevresi ve şehirlerarası güzergahlarda çekici desteği.',
    longIntro:
      'Şereflikoçhisar; Ankara-Aksaray yolu, Tuz Gölü çevresi ve Evren bağlantısıyla uzun yol çekici ihtiyaçlarının öne çıktığı ilçelerden biridir. Araç arızası, kaza sonrası çekim veya şehirlerarası taşıma taleplerinde rota, konum ve teslim noktası bilgileri birlikte değerlendirilir.',
    localFocus:
      'Güneydoğu aksında mesafeler uzun olabileceği için yol yönü, kilometre bilgisi ve güvenli bekleme noktası paylaşımı önemlidir.',
    neighborhoods: ['Şereflikoçhisar Merkez', 'Sanayi', 'Tuzla', 'Yeşilova', 'Şeyhkuyusu'],
    mainRoads: ['Ankara-Aksaray Yolu', 'Tuz Gölü çevresi', 'Evren bağlantısı'],
    commonScenarios: [
      {
        title: 'Aksaray yolu üzerinde arıza',
        description: 'Ana yol üzerinde konum, yol yönü ve güvenli bekleme noktası bilgisi gerekir.'
      },
      {
        title: 'Tuz Gölü çevresinde yolda kalma',
        description: 'Yakın referans noktası ve canlı konum paylaşımı çekici erişimini kolaylaştırır.'
      },
      {
        title: 'Şehirlerarası araç taşıma',
        description: 'Şereflikoçhisar çıkışlı veya varışlı taşıma talepleri rota bilgisiyle planlanır.'
      }
    ],
    serviceHighlights: [
      {
        title: 'Şereflikoçhisar çekici',
        description: 'İlçe merkezi, sanayi ve ana yol bağlantıları için çekici desteği sağlanabilir.'
      },
      {
        title: 'Uzun mesafe taşıma',
        description: 'Aksaray yolu ve Ankara bağlantılı taşıma talepleri değerlendirilebilir.'
      },
      {
        title: 'Kaza sonrası çekim',
        description: 'Araç güvenli şekilde servis, otopark veya teslim noktasına taşınabilir.'
      }
    ],
    processNote:
      'Şereflikoçhisar’da yol yönü, kilometre, yakın tesis ve teslim noktası bilgisi çekici planlamasını netleştirir.',
    nearbyDistricts: ['evren', 'bala', 'haymana'],
    faqs: [
      {
        question: 'Şereflikoçhisar Ankara-Aksaray yolu üzerinde çekici çağırabilir miyim?',
        answer: 'Evet. Yol yönü ve konum bilgisiyle çekici talebi değerlendirilebilir.'
      },
      {
        question: 'Tuz Gölü çevresinde araç taşıma yapılır mı?',
        answer: 'Konum ve teslim adresi netleştiğinde taşıma talebi planlanabilir.'
      },
      {
        question: 'Şereflikoçhisar’dan şehirlerarası taşıma olur mu?',
        answer: 'Rota, araç durumu ve teslim noktası bilgisiyle şehirlerarası taşıma değerlendirilebilir.'
      },
      {
        question: 'Sanayi bölgesinden servise taşıma yapılır mı?',
        answer: 'Evet. Servis adresi ve araç durumu paylaşıldığında taşıma süreci oluşturulabilir.'
      }
    ]
  }
];

export const districtPages: DistrictPage[] = [...coreDistrictPages, ...outerDistrictPages];

export const districtPageBySlug = new Map(districtPages.map((district) => [district.slug, district]));
