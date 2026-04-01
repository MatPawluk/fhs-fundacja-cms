// Schemat dokumentu "artykul" dla Sanity Studio
// Wklej do sanity/schemas/ lub dodaj do konfiguracji Studio

export const artykulSchema = {
  name: 'artykul',
  title: 'Artykuł / Aktualności',
  type: 'document',
  fields: [
    // --- Slug ---
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'titlePl', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },

    // --- Kategoria ---
    {
      name: 'kategoria',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          { title: 'Aktualności', value: 'Aktualności' },
          { title: 'Nasze projekty', value: 'Nasze projekty' },
          { title: 'Poradniki', value: 'Poradniki' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },

    // --- Metadane ---
    {
      name: 'date',
      title: 'Data publikacji',
      type: 'date',
      options: { dateFormat: 'DD.MM.YYYY' },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'readTime',
      title: 'Czas czytania',
      type: 'string',
      placeholder: 'np. 5 min',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Wyróżniony artykuł?',
      type: 'boolean',
      initialValue: false,
    },

    // --- Zdjęcie główne ---
    {
      name: 'mainImage',
      title: 'Zdjęcie główne',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Tekst alternatywny',
          type: 'string',
        },
      ],
    },

    // === WERSJA POLSKA ===
    {
      name: 'titlePl',
      title: 'Tytuł (PL) ★',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'descriptionPl',
      title: 'Opis skrócony (PL)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'contentPl',
      title: 'Treść artykułu (PL)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normalny', value: 'normal' },
            { title: 'Nagłówek H2', value: 'h2' },
            { title: 'Nagłówek H3', value: 'h3' },
            { title: 'Cytat', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Pogrubienie', value: 'strong' },
              { title: 'Kursywa', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
            ],
          },
        },
        { type: 'image', options: { hotspot: true } },
      ],
    },

    // === WERSJA ANGIELSKA ===
    {
      name: 'titleEn',
      title: 'Tytuł (EN)',
      type: 'string',
    },
    {
      name: 'descriptionEn',
      title: 'Opis skrócony (EN)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'contentEn',
      title: 'Treść artykułu (EN)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },

    // === WERSJA NIDERLANDZKA ===
    {
      name: 'titleNl',
      title: 'Tytuł (NL)',
      type: 'string',
    },
    {
      name: 'descriptionNl',
      title: 'Opis skrócony (NL)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'contentNl',
      title: 'Treść artykułu (NL)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },
  ],

  // Podgląd w Studio
  preview: {
    select: {
      title: 'titlePl',
      subtitle: 'kategoria',
      media: 'mainImage',
    },
  },
};
