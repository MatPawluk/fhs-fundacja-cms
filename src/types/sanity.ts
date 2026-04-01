// Typy dla artykułów z Sanity CMS

export interface SanityImageAsset {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface SanityArtykul {
  _id: string;
  _type: 'artykul';
  slug: { current: string };
  kategoria: 'Aktualności' | 'Nasze projekty' | 'Poradniki';
  // Tytuły wielojęzyczne
  titlePl: string;
  titleEn?: string;
  titleNl?: string;
  // Opisy wielojęzyczne
  descriptionPl: string;
  descriptionEn?: string;
  descriptionNl?: string;
  // Treść wielojęzyczna (Portable Text)
  contentPl?: PortableTextBlock[];
  contentEn?: PortableTextBlock[];
  contentNl?: PortableTextBlock[];
  // Metadane
  date: string;
  readTime: string;
  featured?: boolean;
  mainImage?: SanityImageAsset;
}

// Portable Text block type (uproszczony)
export interface PortableTextBlock {
  _type: string;
  _key: string;
  style?: string;
  children?: Array<{
    _type: string;
    _key: string;
    text?: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
  }>;
  listItem?: string;
  level?: number;
}

// Znormalizowany typ dla komponentów (niezależny od języka)
export interface Artykul {
  _id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  content?: PortableTextBlock[];
  date: string;
  readTime: string;
  featured?: boolean;
  mainImage?: SanityImageAsset;
}
