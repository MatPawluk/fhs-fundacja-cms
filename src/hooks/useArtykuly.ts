import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '@/lib/sanityClient';
import { articlesTranslations } from '@/i18n/contentTranslations';
import type { Language } from '@/i18n/translations';
import type { SanityArtykul, Artykul } from '@/types/sanity';

// GROQ query — pobiera wszystkie artykuły i projekty posortowane od najnowszych
const ARTYKULY_QUERY = `*[_type in ["artykul", "projekt"]] | order(coalesce(date, _createdAt) desc) {
  _id,
  _type,
  slug,
  kategoria,
  titlePl, titleEn, titleNl,
  descriptionPl, descriptionEn, descriptionNl,
  subtitlePl, subtitleEn, subtitleNl,
  date,
  _createdAt,
  readTime,
  featured,
  mainImage
}`;

// Pojedynczy artykuł/projekt po slug + treść
const ARTYKUL_QUERY = `*[_type in ["artykul", "projekt"] && slug.current == $slug][0] {
  _id,
  _type,
  slug,
  kategoria,
  titlePl, titleEn, titleNl,
  descriptionPl, descriptionEn, descriptionNl,
  subtitlePl, subtitleEn, subtitleNl,
  contentPl, contentEn, contentNl,
  sectionsPl, sectionsEn, sectionsNl,
  date,
  _createdAt,
  readTime,
  featured,
  mainImage
}`;

// Normalizacja SanityArtykul / Projekt → Artykul (w zależności od języka)
export function normalizeSanityArtykul(
  raw: any,
  language: Language
): Artykul {
  const isProjekt = raw._type === 'projekt';
  const suffix = language.charAt(0).toUpperCase() + language.slice(1); // Pl, En, Nl

  const title = raw[`title${suffix}`] || raw.titlePl || '';
  
  // Dla projektów 'description' to 'subtitle', dla artykułów to 'description'
  const description = isProjekt 
    ? (raw[`subtitle${suffix}`] || raw.subtitlePl || '') 
    : (raw[`description${suffix}`] || raw.descriptionPl || '');

  // Treść — dla projektów to 'sections', dla artykułów to 'content'
  const content = isProjekt
    ? (raw[`sections${suffix}`] || raw.sectionsPl || [])
    : (raw[`content${suffix}`] || raw.contentPl || []);

  const categoryMap: Record<string, Record<Language, string>> = {
    'Aktualności': { pl: 'Aktualności', en: 'News', nl: 'Nieuws' },
    'Nasze projekty': { pl: 'Nasze projekty', en: 'Our projects', nl: 'Onze projecten' },
    'Poradniki': { pl: 'Poradniki', en: 'Guides', nl: 'Gidsen' },
  };

  const rawKategoria = isProjekt ? 'Nasze projekty' : raw.kategoria;
  const category = categoryMap[rawKategoria]?.[language] || rawKategoria;

  const dateValue = raw.date || raw._createdAt;

  return {
    _id: raw._id,
    slug: raw.slug.current,
    category,
    title,
    description,
    content,
    date: dateValue
      ? new Date(dateValue).toLocaleDateString('pl-PL', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        }).replace(/\//g, '.')
      : '',
    readTime: raw.readTime || (isProjekt ? '15 min' : ''),
    featured: raw.featured,
    mainImage: raw.mainImage,
  };
}

// Hook — lista artykułów
export function useArtykuly(language: Language) {
  const fallback = articlesTranslations[language];

  const { data, isLoading, error } = useQuery<SanityArtykul[]>({
    queryKey: ['artykuly'],
    queryFn: () => sanityClient.fetch(ARTYKULY_QUERY),
    staleTime: 1000 * 60 * 5, // 5 minut cache
    retry: 1,
  });

  // Jeśli są dane z Sanity — normalizuj je
  const articles: Artykul[] = data 
    ? data.map((raw) => normalizeSanityArtykul(raw, language))
    : [];

  return { articles, isLoading, error, hasSanityData: !!data && data.length > 0 };
}

// Hook — pojedynczy artykuł po slug
export function useArtykul(slug: string, language: Language) {
  const { data, isLoading, error } = useQuery<SanityArtykul | null>({
    queryKey: ['artykul', slug],
    queryFn: () => sanityClient.fetch(ARTYKUL_QUERY, { slug }),
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
    retry: 1,
  });

  const article = data ? normalizeSanityArtykul(data, language) : null;

  return { article, isLoading, error };
}
