import {defineField, defineType} from 'sanity'

export const projektSchema = defineType({
  name: 'projekt',
  title: 'Nasze działania / Projekt',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'titlePl', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Zdjęcie główne (Okładka)',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria zdjęć',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),

    // === WERSJA POLSKA ===
    defineField({
      name: 'titlePl',
      title: '🇵🇱 Tytuł (PL) ★',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitlePl',
      title: '🇵🇱 Podtytuł (PL)',
      type: 'string',
    }),
    defineField({
      name: 'descriptionPl',
      title: '🇵🇱 Opis krótki (PL) - do karuzeli',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'fullDescriptionPl',
      title: '🇵🇱 Opis pełny (PL)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'sectionsPl',
      title: '🇵🇱 Sekcje (PL)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Nagłówek sekcji'},
            {name: 'content', type: 'text', title: 'Treść sekcji', rows: 3},
          ],
        },
      ],
    }),

    // === WERSJA ANGIELSKA ===
    defineField({
      name: 'titleEn',
      title: '🇬🇧 Tytuł (EN)',
      type: 'string',
    }),
    defineField({
      name: 'subtitleEn',
      title: '🇬🇧 Podtytuł (EN)',
      type: 'string',
    }),
    defineField({
      name: 'descriptionEn',
      title: '🇬🇧 Opis krótki (EN)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'fullDescriptionEn',
      title: '🇬🇧 Opis pełny (EN)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'sectionsEn',
      title: '🇬🇧 Sekcje (EN)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Nagłówek sekcji'},
            {name: 'content', type: 'text', title: 'Treść sekcji', rows: 3},
          ],
        },
      ],
    }),

    // === WERSJA NIDERLANDZKA ===
    defineField({
      name: 'titleNl',
      title: '🇳🇱 Tytuł (NL)',
      type: 'string',
    }),
    defineField({
      name: 'subtitleNl',
      title: '🇳🇱 Podtytuł (NL)',
      type: 'string',
    }),
    defineField({
      name: 'descriptionNl',
      title: '🇳🇱 Opis krótki (NL)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'fullDescriptionNl',
      title: '🇳🇱 Opis pełny (NL)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'sectionsNl',
      title: '🇳🇱 Sekcje (NL)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Nagłówek sekcji'},
            {name: 'content', type: 'text', title: 'Treść sekcji', rows: 3},
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'titlePl',
      media: 'mainImage',
    },
  },
})
