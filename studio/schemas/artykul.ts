import {defineField, defineType} from 'sanity'

export const artykulSchema = defineType({
  name: 'artykul',
  title: 'Artykuł / Aktualności',
  type: 'document',
  fields: [
    // --- Slug ---
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'titlePl', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    // --- Kategoria ---
    defineField({
      name: 'kategoria',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          {title: 'Aktualności', value: 'Aktualności'},
          {title: 'Nasze projekty', value: 'Nasze projekty'},
          {title: 'Poradniki', value: 'Poradniki'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    // --- Metadane ---
    defineField({
      name: 'date',
      title: 'Data publikacji',
      type: 'date',
      options: {dateFormat: 'DD.MM.YYYY'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Czas czytania',
      type: 'string',
      placeholder: 'np. 5 min',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Wyróżniony artykuł?',
      type: 'boolean',
      initialValue: false,
    }),

    // --- Zdjęcie główne ---
    defineField({
      name: 'mainImage',
      title: 'Zdjęcie główne',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Tekst alternatywny',
          type: 'string',
        }),
      ],
    }),

    // === WERSJA POLSKA ===
    defineField({
      name: 'titlePl',
      title: '🇵🇱 Tytuł (PL) ★',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionPl',
      title: '🇵🇱 Opis skrócony (PL)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contentPl',
      title: '🇵🇱 Treść artykułu (PL)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normalny', value: 'normal'},
            {title: 'Nagłówek H2', value: 'h2'},
            {title: 'Nagłówek H3', value: 'h3'},
            {title: 'Cytat', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Pogrubienie', value: 'strong'},
              {title: 'Kursywa', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{name: 'href', type: 'url', title: 'URL'}],
              },
            ],
          },
        },
        {type: 'image', options: {hotspot: true}},
      ],
    }),

    // === WERSJA ANGIELSKA ===
    defineField({
      name: 'titleEn',
      title: '🇬🇧 Tytuł (EN)',
      type: 'string',
    }),
    defineField({
      name: 'descriptionEn',
      title: '🇬🇧 Opis skrócony (EN)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'contentEn',
      title: '🇬🇧 Treść artykułu (EN)',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
    }),

    // === WERSJA NIDERLANDZKA ===
    defineField({
      name: 'titleNl',
      title: '🇳🇱 Tytuł (NL)',
      type: 'string',
    }),
    defineField({
      name: 'descriptionNl',
      title: '🇳🇱 Opis skrócony (NL)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'contentNl',
      title: '🇳🇱 Treść artykułu (NL)',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
    }),
  ],

  preview: {
    select: {
      title: 'titlePl',
      subtitle: 'kategoria',
      media: 'mainImage',
    },
  },
})
