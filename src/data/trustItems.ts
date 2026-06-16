export const trustMetrics = [
  { title: '7/24 Hizmet', description: 'Gece gündüz ulaşılabilir çekici ve yol yardım desteği.' },
  { title: 'Ankara Geneli', description: 'Merkez ilçeler ve çevre bölgeler için operasyon odağı.' },
  { title: 'Güvenli Taşıma', description: 'Araç tipine uygun sabitleme ve kontrollü taşıma yaklaşımı.' },
  { title: 'Hızlı Yönlendirme', description: 'Konum ve ihtiyaç bilgisine göre net iletişim süreci.' }
];

export type WhyUsItem = { icon: string; title: string; description: string };

export const whyUsItems: WhyUsItem[] = [
  {
    icon: 'navigation',
    title: 'Ankara odaklı hızlı operasyon',
    description: 'İlçeleri ve bağlantı yollarını bilen ekip, konumunuza en kısa güzergahla ulaşır.'
  },
  {
    icon: 'clock',
    title: '7/24 ulaşılabilir destek',
    description: 'Gece, gündüz, hafta sonu fark etmez; telefonun diğer ucunda her zaman biri var.'
  },
  {
    icon: 'shield-check',
    title: 'Her araca güvenli taşıma',
    description: 'Klasikten lükse, SUV’dan spora her araca uygun sabitleme ve kontrollü taşıma.'
  },
  {
    icon: 'message-circle',
    title: 'Net iletişim, çözüm odağı',
    description: 'Süreç, fiyat ve teslim noktası baştan netleşir — sürpriz maliyet yok.'
  }
];
