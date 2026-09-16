import { districts } from '@/data/districts';

export const districtGroupDefinitions = [
  {
    title: 'Merkez ve yoğun bölgeler',
    description: 'Şehir merkezi, iş bölgeleri, sanayi bağlantıları ve yoğun konut alanları.',
    slugs: ['cankaya', 'kecioren', 'yenimahalle', 'mamak', 'etimesgut', 'sincan', 'altindag', 'golbasi']
  },
  {
    title: 'Batı aksı',
    description: 'Ayaş Yolu, Beypazarı, Nallıhan, Polatlı ve çevre bağlantıları.',
    slugs: ['ayas', 'beypazari', 'gudul', 'nallihan', 'polatli']
  },
  {
    title: 'Kuzey aksı',
    description: 'Esenboğa, İstanbul Yolu, Çankırı bağlantısı ve kuzey ilçeleri.',
    slugs: ['akyurt', 'camlidere', 'cubuk', 'kahramankazan', 'kalecik', 'kizilcahamam', 'pursaklar']
  },
  {
    title: 'Güney ve uzak ilçeler',
    description: 'Konya Yolu, Aksaray yolu, kırsal bağlantılar ve uzun mesafe ihtiyaçları.',
    slugs: ['bala', 'elmadag', 'evren', 'haymana', 'sereflikochisar']
  }
] as const;

export const districtGroups = districtGroupDefinitions.map((group) => ({
  ...group,
  items: group.slugs.map((slug) => districts.find((district) => district.slug === slug)).filter(Boolean)
}));
