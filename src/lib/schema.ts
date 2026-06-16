import { site } from '@/data/site';

type BreadcrumbItem = {
  label: string;
  href: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type WebPageInput = {
  title: string;
  description: string;
  url: string;
  name: string;
  breadcrumbName?: string;
};

type ArticleInput = {
  title: string;
  description: string;
  url: string;
  publishDate: Date | string;
  updatedDate?: Date | string;
  authorName: string;
  publisherName: string;
  image?: string;
};

type ItemListInput = {
  items: {
    title: string;
    url: string;
  }[];
};

type ServiceCatalogInput = {
  items: {
    title: string;
    description: string;
    href?: string;
  }[];
};

const absoluteUrl = (path = '/') => new URL(path, site.url).toString();
const organizationId = absoluteUrl('/#organization');
const localBusinessId = absoluteUrl('/#localbusiness');
const websiteId = absoluteUrl('/#website');
const mergedProfiles = [...new Set([...(site.socialProfiles ?? []), ...(site.sameAs ?? [])])];

export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/images/brand/logo-dark.png'),
    width: 300,
    height: 100
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: site.phone,
      contactType: 'customer support',
      areaServed: site.country,
      availableLanguage: ['tr-TR']
    }
  ],
  sameAs: mergedProfiles
});

export const createWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  name: site.name,
  url: site.url,
  inLanguage: 'tr-TR',
  publisher: {
    '@type': 'Organization',
    '@id': organizationId,
    name: site.legalName
  }
});

export const createLocalBusinessSchema = (areaName?: string) => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutomotiveBusiness'],
  '@id': localBusinessId,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  priceRange: site.priceRange,
  image: absoluteUrl('/images/optimized/hero/hero-bg.jpg'),
  logo: absoluteUrl('/images/brand/logo-dark.png'),
  parentOrganization: {
    '@type': 'Organization',
    '@id': organizationId,
    name: site.legalName
  },
  areaServed: areaName
    ? [
        {
          '@type': 'AdministrativeArea',
          name: site.region,
          addressCountry: site.country
        },
        {
          '@type': 'City',
          name: `${areaName}, ${site.city}`,
          addressCountry: site.country
        }
      ]
    : {
        '@type': 'AdministrativeArea',
        name: site.region,
        addressCountry: site.country
      },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.9334,
    longitude: 32.8597
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }
  ],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: site.whatsappHref,
    servicePhone: site.phone,
    availableLanguage: {
      '@type': 'Language',
      name: 'Turkish'
    }
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: site.phone,
    contactType: 'customer support',
    areaServed: site.country,
    availableLanguage: ['tr-TR']
  },
  sameAs: mergedProfiles
});

export const createFAQSchema = (items: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
});

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: absoluteUrl(item.href)
  }))
});

export const createWebPageSchema = ({ title, description, url, name, breadcrumbName }: WebPageInput) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  headline: title,
  description,
  url: absoluteUrl(url),
  inLanguage: 'tr-TR',
  isPartOf: {
    '@type': 'WebSite',
    '@id': websiteId,
    name: site.name,
    url: site.url
  },
  breadcrumb: breadcrumbName
    ? {
        '@type': 'BreadcrumbList',
        name: breadcrumbName
      }
    : undefined
});

export const createArticleSchema = ({
  title,
  description,
  url,
  publishDate,
  updatedDate,
  authorName,
  publisherName,
  image = site.ogImage
}: ArticleInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url: absoluteUrl(url),
  image: absoluteUrl(image),
  datePublished: new Date(publishDate).toISOString(),
  dateModified: new Date(updatedDate ?? publishDate).toISOString(),
  inLanguage: 'tr-TR',
  author: {
    '@type': 'Organization',
    '@id': organizationId,
    name: authorName
  },
  publisher: {
    '@type': 'Organization',
    '@id': organizationId,
    name: publisherName,
    url: site.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/images/brand/logo-dark.png'),
      width: 300,
      height: 100
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': absoluteUrl(url)
  }
});

export const createItemListSchema = ({ items }: ItemListInput) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.title,
    url: absoluteUrl(item.url)
  }))
});

export const createServiceCatalogSchema = ({ items }: ServiceCatalogInput) => ({
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: `${site.name} hizmetleri`,
  itemListElement: items.map((item, index) => ({
    '@type': 'Offer',
    position: index + 1,
    itemOffered: {
      '@type': 'Service',
      name: item.title,
      description: item.description,
      provider: {
        '@type': 'LocalBusiness',
        '@id': localBusinessId,
        name: site.name
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: site.region,
        addressCountry: site.country
      },
      url: absoluteUrl(item.href ?? '/hizmetler/')
    }
  }))
});
