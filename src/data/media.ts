export type SiteImage = {
  src: string;
  webp?: string;
  avif?: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  caption?: string;
};

export const media = {
  brand: {
    logoDark: {
      src: '/images/brand/logo-dark.png',
      alt: 'Yıldızlar Oto Kurtarma logosu',
      width: 300,
      height: 100
    },
    logoWhite: {
      src: '/images/brand/logo-white.png',
      alt: 'Yıldızlar Oto Kurtarma logosu',
      width: 300,
      height: 100
    }
  },
  hero: {
    primary: {
      src: '/images/hero/hero-tow-truck.png',
      alt: 'Ankara oto çekici hizmeti için hazır bekleyen çekici aracı',
      width: 914,
      height: 536,
      priority: true
    },
    background: {
      src: '/images/optimized/hero/hero-bg.jpg',
      alt: 'Ankara yol yardım ve oto çekici hizmet alanı',
      width: 1920,
      height: 1080
    }
  },
  stock: {
    towTruckNight: {
      src: '/images/optimized/stock/tow-truck-night.jpg',
      alt: 'Gece oto çekici ve yol yardım görseli',
      width: 1400,
      height: 1866
    },
    roadsideAssistance: {
      src: '/images/optimized/stock/roadside-assistance.jpg',
      alt: 'Yol yardım süreci için araç başı destek görseli',
      width: 1400,
      height: 933
    },
    carTransport: {
      src: '/images/optimized/stock/car-transport.jpg',
      alt: 'Araç taşıma hizmeti görseli',
      width: 1400,
      height: 2100
    },
    ankaraRoad: {
      src: '/images/optimized/stock/ankara-road.jpg',
      alt: 'Ankara yol bağlantıları ve araç taşıma güzergahı',
      width: 1400,
      height: 2117
    },
    supportOperator: {
      src: '/images/optimized/stock/support-operator.jpg',
      alt: 'Çekici hizmeti için telefon ve WhatsApp destek görseli',
      width: 1400,
      height: 2100
    }
  },
  services: {
    emergencyTowing: {
      src: '/images/optimized/services/acil-oto-cekici.jpg',
      webp: '/images/optimized/services/acil-oto-cekici.webp',
      alt: 'Yıldızlar Oto Kurtarma çekicisiyle taşınan beyaz Mercedes E-Serisi — Ankara 7/24 acil oto çekici',
      width: 1280,
      height: 720
    },
    towingRecovery: {
      src: '/images/optimized/services/oto-kurtarma.jpg',
      webp: '/images/optimized/services/oto-kurtarma.webp',
      alt: 'Lacivert Jaguar F-Pace SUV çekici platformunda güvenle taşınıyor — Ankara oto kurtarma',
      width: 1280,
      height: 720
    },
    roadsideAssistance: {
      src: '/images/optimized/services/yol-yardim.jpg',
      webp: '/images/optimized/services/yol-yardim.webp',
      alt: 'Gümüş Mercedes E-Serisi çekiciyle taşınırken — Ankara acil yol yardım',
      width: 1280,
      height: 720
    },
    accidentTowing: {
      src: '/images/optimized/services/kaza-sonrasi-arac-cekimi.jpg',
      webp: '/images/optimized/services/kaza-sonrasi-arac-cekimi.webp',
      alt: 'Siyah Volkswagen Passat kaza sonrası çekiciyle taşınıyor — Ankara kaza sonrası araç çekimi',
      width: 1280,
      height: 720
    },
    intercityTransport: {
      src: '/images/optimized/services/sehirlerarasi-arac-tasima.jpg',
      webp: '/images/optimized/services/sehirlerarasi-arac-tasima.webp',
      alt: 'BMW 5 Serisi gün batımında çekiciyle taşınıyor — Ankara şehirlerarası araç taşıma',
      width: 1280,
      height: 720
    },
    motorcycleTowing: {
      src: '/images/optimized/services/motosiklet-cekici.jpg',
      webp: '/images/optimized/services/motosiklet-cekici.webp',
      alt: 'Motosiklet çekici ve güvenli motosiklet taşıma hizmeti — Ankara motosiklet çekici',
      width: 1280,
      height: 720
    },
    parkingServiceTransport: {
      src: '/images/optimized/services/servis-otopark-tasima.jpg',
      webp: '/images/optimized/services/servis-otopark-tasima.webp',
      alt: 'Klasik gümüş Mercedes-Benz SLC servis taşıması için çekicide — Ankara servis ve otopark araç taşıma',
      width: 1280,
      height: 720
    }
  },
  blogCovers: {
    roadBreakdown: {
      src: '/images/optimized/blog/ankarada-arac-yolda-kalirsa-ne-yapilmali.jpg',
      alt: 'Ankara’da araç yolda kalırsa yapılması gerekenler rehberi',
      width: 1200,
      height: 1800
    },
    locationSharing: {
      src: '/images/optimized/blog/cekici-cagirirken-konum-nasil-paylasilir.jpg',
      alt: 'Çekici çağırırken konum paylaşma rehberi',
      width: 1200,
      height: 1800
    },
    accidentTowing: {
      src: '/images/optimized/blog/kaza-sonrasi-arac-cekimi-nasil-yapilir.jpg',
      alt: 'Kaza sonrası araç çekimi rehberi',
      width: 1200,
      height: 800
    },
    beforeCallingTow: {
      src: '/images/optimized/blog/oto-cekici-cagirmadan-once-bilinmesi-gerekenler.jpg',
      alt: 'Oto çekici çağırmadan önce bilinmesi gerekenler',
      width: 1200,
      height: 800
    },
    intercityTransport: {
      src: '/images/optimized/blog/sehirlerarasi-arac-tasima-ne-zaman-gerekir.jpg',
      alt: 'Şehirlerarası araç taşıma rehberi',
      width: 1200,
      height: 1800
    },
    nightRoadside: {
      src: '/images/optimized/blog/ankarada-gece-yolda-kalinca-ne-yapmali.jpg',
      alt: 'Ankara’da gece yolda kalınca yapılması gerekenler',
      width: 1200,
      height: 1600
    }
  },
  districts: {
    ankaraCover: {
      src: '/images/districts/ankara-cover.png',
      alt: 'Ankara ilçe yollarında oto çekici hizmet alanı',
      width: 914,
      height: 536
    },
    genericTowTruck: {
      src: '/images/optimized/districts/district-tow-truck.jpg',
      alt: 'Ankara ilçeleri için oto çekici hizmet görseli',
      width: 1400,
      height: 933
    }
  },
  brandLogoDark: {
    src: '/images/brand/logo-dark.png',
    alt: 'Yıldızlar Oto Kurtarma logosu',
    width: 300,
    height: 100
  },
  brandLogoWhite: {
    src: '/images/brand/logo-white.png',
    alt: 'Yıldızlar Oto Kurtarma logosu',
    width: 300,
    height: 100
  },
  heroPrimary: {
    src: '/images/hero/hero-tow-truck.png',
    alt: 'Ankara oto çekici hizmeti için hazır bekleyen çekici aracı',
    width: 914,
    height: 536,
    priority: true
  },
  heroSecondary: {
    src: '/images/optimized/hero/hero-bg.jpg',
    alt: 'Ankara yol yardım ve oto çekici hizmet alanı',
    width: 1920,
    height: 1080
  },
  serviceTowing: {
    src: '/images/gallery/tow-truck-ankara-1.jpg',
    alt: 'Oto çekici ile güvenli araç taşıma hizmeti',
    width: 480,
    height: 400
  },
  serviceRoadside: {
    src: '/images/gallery/tow-truck-ankara-2.jpg',
    alt: 'Ankara yol yardım hizmeti için araç başında destek',
    width: 480,
    height: 400
  },
  serviceAccident: {
    src: '/images/gallery/tow-truck-ankara-3.jpg',
    alt: 'Kaza sonrası araç çekimi için güvenli taşıma hazırlığı',
    width: 480,
    height: 400
  },
  districtAnkara: {
    src: '/images/optimized/districts/district-tow-truck.jpg',
    alt: 'Ankara ilçe yollarında oto çekici hizmet alanı',
    width: 1400,
    height: 933
  },
  blogGeneric: {
    src: '/images/gallery/tow-truck-ankara-4.jpg',
    alt: 'Oto çekici ve yol yardım rehberi görseli',
    width: 480,
    height: 400
  },
  supportVisual: {
    src: '/images/optimized/stock/support-operator.jpg',
    alt: 'Yıldızlar Oto Kurtarma iletişim ve konum paylaşımı desteği',
    width: 1400,
    height: 2100
  },
  galleryImages: [
    {
      src: '/images/gallery/fleet-porsche-911-targa.jpg',
      webp: '/images/gallery/fleet-porsche-911-targa.webp',
      caption: 'Porsche 911 Targa',
      alt: 'Kırmızı klasik Porsche 911 Targa\u2019nın Yıldızlar Oto Kurtarma çekici platformunda güvenle taşınması — Ankara lüks araç taşıma',
      width: 1200,
      height: 900
    },
    {
      src: '/images/gallery/fleet-ford-mustang-mach1.jpg',
      webp: '/images/gallery/fleet-ford-mustang-mach1.webp',
      caption: 'Ford Mustang Mach 1',
      alt: 'Klasik Ford Mustang Mach 1\u2019in çekici ile güvenli taşınması — Ankara klasik araç taşıma',
      width: 1200,
      height: 900
    },
    {
      src: '/images/gallery/fleet-jaguar-f-pace.jpg',
      webp: '/images/gallery/fleet-jaguar-f-pace.webp',
      caption: 'Jaguar F-Pace',
      alt: 'Lacivert Jaguar F-Pace\u2019in çekici platformuna sabitlenerek taşınması — Ankara oto çekici hizmeti',
      width: 1200,
      height: 900
    },
    {
      src: '/images/gallery/fleet-mercedes-slc-klasik.jpg',
      webp: '/images/gallery/fleet-mercedes-slc-klasik.webp',
      caption: 'Mercedes-Benz SLC (Klasik)',
      alt: 'Klasik gümüş Mercedes-Benz SLC\u2019nin çekici ile taşınması — Ankara klasik araç kurtarma',
      width: 1200,
      height: 900
    },
    {
      src: '/images/gallery/fleet-mercedes-e-serisi.jpg',
      webp: '/images/gallery/fleet-mercedes-e-serisi.webp',
      caption: 'Mercedes-Benz E-Serisi',
      alt: 'Gümüş Mercedes-Benz E-Serisi sedanın çekici ile taşınması — Ankara oto çekici',
      width: 1200,
      height: 900
    },
    {
      src: '/images/gallery/fleet-bmw-5-serisi.jpg',
      webp: '/images/gallery/fleet-bmw-5-serisi.webp',
      caption: 'BMW 5 Serisi',
      alt: 'BMW 5 Serisi sedanın gün batımında çekici ile taşınması — Ankara yol yardım',
      width: 1200,
      height: 900
    },
    {
      src: '/images/gallery/fleet-vw-passat.jpg',
      webp: '/images/gallery/fleet-vw-passat.webp',
      caption: 'Volkswagen Passat',
      alt: 'Siyah Volkswagen Passat\u2019ın çekici ile taşınması — Ankara oto çekici hizmeti',
      width: 1200,
      height: 900
    },
    {
      src: '/images/gallery/fleet-mercedes-s-klasik.jpg',
      webp: '/images/gallery/fleet-mercedes-s-klasik.webp',
      caption: 'Mercedes-Benz S-Serisi (Klasik)',
      alt: 'Klasik siyah Mercedes-Benz S-Serisi\u2019nin çekici ile taşınması — Ankara klasik araç taşıma',
      width: 1200,
      height: 900
    },
    {
      src: '/images/gallery/fleet-mercedes-e-beyaz.jpg',
      webp: '/images/gallery/fleet-mercedes-e-beyaz.webp',
      caption: 'Mercedes-Benz E-Serisi',
      alt: 'Beyaz Mercedes-Benz E-Serisi\u2019nin benzin istasyonunda çekiciye yüklenmesi — Ankara yol yardım',
      width: 1200,
      height: 900
    }
  ] satisfies SiteImage[]
};

export const getBlogCoverBySlug = (slug?: string) => {
  if (!slug) return media.blogGeneric;

  const blogCoverMap: Record<string, SiteImage> = {
    'ankarada-arac-yolda-kalirsa-ne-yapilmali': media.blogCovers.roadBreakdown,
    'cekici-cagirirken-konum-nasil-paylasilir': media.blogCovers.locationSharing,
    'kaza-sonrasi-arac-cekimi-nasil-yapilir': media.blogCovers.accidentTowing,
    'oto-cekici-cagirmadan-once-bilinmesi-gerekenler': media.blogCovers.beforeCallingTow,
    'sehirlerarasi-arac-tasima-ne-zaman-gerekir': media.blogCovers.intercityTransport,
    'ankarada-gece-yolda-kalinca-ne-yapmali': media.blogCovers.nightRoadside,
    'ankara-cekici-fiyatlari-neye-gore-degisir': media.stock.supportOperator,
    'kapali-otoparktan-arac-cekimi-nasil-yapilir': media.services.parkingServiceTransport,
    'otomatik-vites-arac-cekiciye-nasil-yuklenir': media.services.towingRecovery,
    'ankara-cevre-yolunda-arac-yolda-kalirsa-ne-yapilmali': media.stock.ankaraRoad,
    'sanayiye-arac-tasima-sureci-nasil-ilerler': media.services.parkingServiceTransport,
    'kaza-sonrasi-sigorta-ve-cekici-sureci': media.services.accidentTowing
  };

  return blogCoverMap[slug] ?? media.blogGeneric;
};

export const getServiceImageByTitle = (title: string) => {
  const serviceImageMap: Record<string, SiteImage> = {
    '7/24 Acil Oto Çekici': media.services.emergencyTowing,
    'Oto Kurtarma': media.services.towingRecovery,
    'Acil Yol Yardım': media.services.roadsideAssistance,
    'Yol Yardım': media.services.roadsideAssistance,
    'Kaza Sonrası Araç Çekimi': media.services.accidentTowing,
    'Şehirlerarası Araç Taşıma': media.services.intercityTransport,
    'Motosiklet Çekici': media.services.motorcycleTowing,
    'Servis / Otopark Araç Taşıma': media.services.parkingServiceTransport,
    'Otopark / Servis Taşıma': media.services.parkingServiceTransport
  };

  return serviceImageMap[title] ?? media.serviceTowing;
};
