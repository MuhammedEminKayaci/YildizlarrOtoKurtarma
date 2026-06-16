import { districtPages } from '@/data/districtPages';

export const districts = districtPages.map((district) => ({
  name: district.name,
  slug: district.slug,
  href: `/ankara-cekici/${district.slug}/`,
  description: district.shortIntro
}));
