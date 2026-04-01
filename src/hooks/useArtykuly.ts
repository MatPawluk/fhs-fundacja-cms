import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '@/lib/sanityClient';
import { articlesTranslations } from '@/i18n/contentTranslations';
import type { Language } from '@/i18n/translations';
import type { SanityArtykul, Artykul } from '@/types/sanity';

// GROQ query — pobiera wszystkie artykuły posortowane od najnowszych
const ARTYKULY_QUERY = `*[_type == "artykul"] | order(date desc) {
  _id,
  slug,
  kategoria,
  titlePl,
  titleEn,
  titleNl,
  descriptionPl,
  descriptionEn,
  descriptionNl,
  date,
  readTime,
  featured,
  mainImage
}`;

// Pojedynczy artykuł po slug + treść
const ARTYKUL_QUERY = `*[_type == "artykul" && slug.current == $slug][0] {
  _id,
  slug,
  kategoria,
  titlePl,
  titleEn,
  titleNl,
  descriptionPl,
  descriptionEn,
  descriptionNl,
  contentPl,
  contentEn,
  contentNl,
  date,
  readTime,
  featured,
  mainImage
}`;

// Normalizacja SanityArtykul → Artykul (w zależności od języka)
export function normalizeSanityArtykul(
  raw: SanityArtykul,
  language: Language
): Artykul {
  const langMap: Record<Language, { title: string; description: string; content?: unknown[] }> = {
    pl: {
      title: raw.titlePl,
      description: raw.descriptionPl,
      content: raw.contentPl,
    },
    en: {
      title: raw.titleEn || raw.titlePl,
      description: raw.descriptionEn || raw.descriptionPl,
      content: raw.contentEn || raw.contentPl,
    },
    nl: {
      title: raw.titleNl || raw.titlePl,
      description: raw.descriptionNl || raw.descriptionPl,
      content: raw.contentNl || raw.contentPl,
    },
  };

  // Kategorie w językach
  const categoryMap: Record<string, Record<Language, string>> = {
    'Aktualności': { pl: 'Aktualności', en: 'News', nl: 'Nieuws' },
    'Nasze projekty': { pl: 'Nasze projekty', en: 'Our projects', nl: 'Onze projecten' },
    'Poradniki': { pl: 'Poradniki', en: 'Guides', nl: 'Gidsen' },
  };

  const lang = langMap[language];
  const category = categoryMap[raw.kategoria]?.[language] || raw.kategoria;

  return {
    _id: raw._id,
    slug: raw.slug.current,
    category,
    title: lang.title,
    description: lang.description,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: lang.content as any,
    date: raw.date
      ? new Date(raw.date).toLocaleDateString('pl-PL', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        }).replace(/\//g, '.')
      : '',
    readTime: raw.readTime,
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
  const articles: Artykul[] = data && data.length > 0
    ? data.map((raw) => normalizeSanityArtykul(raw, language))
    : fallback.map((a, i) => ({
        _id: `static-${i}`,
        slug: a.slug,
        category: a.category,
        title: a.title,
        description: a.description,
        date: a.date,
        readTime: a.readTime,
        featured: a.featured,
      }));

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
