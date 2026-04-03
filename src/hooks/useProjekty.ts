import { useState, useEffect } from 'react';
import { sanityClient } from '@/lib/sanityClient';
import { Language } from '@/i18n/translations';

export interface Projekt {
  _id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  mainImage: any;
  gallery: any[];
  sections: { title: string; content: string }[];
}

export const useProjekty = (language: Language) => {
  const [projekty, setProjekty] = useState<Projekt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjekty = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "projekt"] | order(_createdAt asc)`;
        const result = await sanityClient.fetch(query);

        const mappedProjekty: Projekt[] = result.map((p: any) => {
          // Determine language suffix for fields
          const suffix = language.charAt(0).toUpperCase() + language.slice(1); // Pl, En, Nl
          
          return {
            _id: p._id,
            slug: p.slug?.current || '',
            title: p[`title${suffix}`] || p.titlePl || '',
            subtitle: p[`subtitle${suffix}`] || p.subtitlePl || '',
            description: p[`description${suffix}`] || p.descriptionPl || '',
            fullDescription: p[`fullDescription${suffix}`] || p.fullDescriptionPl || '',
            mainImage: p.mainImage,
            gallery: p.gallery || [],
            sections: p[`sections${suffix}`] || p.sectionsPl || [],
          };
        });

        setProjekty(mappedProjekty);
      } catch (err: any) {
        console.error('Błąd podczas pobierania projektów z Sanity:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjekty();
  }, [language]);

  const getProjektBySlug = (slug: string) => {
    return projekty.find((p) => p.slug === slug);
  };

  return { projekty, getProjektBySlug, loading, error };
};
