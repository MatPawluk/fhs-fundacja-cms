import {defineField, defineType} from 'sanity'

export const dzieckoSchema = defineType({
  name: 'dziecko',
  title: 'Wirtualna Adopcja — Dzieci',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Imię i nazwisko',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'age',
      title: 'Wiek',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(20),
    }),
    defineField({
      name: 'gender',
      title: 'Płeć',
      type: 'string',
      options: {
        list: [
          {title: 'Chłopiec', value: 'chłopiec'},
          {title: 'Dziewczynka', value: 'dziewczynka'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Kraj',
      type: 'string',
      initialValue: 'Gambia',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Lokalizacja (Miejscowość)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Zdjęcie główne',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'monthlySupport',
      title: 'Miesięczne wsparcie (zł)',
      type: 'number',
      initialValue: 150,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'grade',
      title: 'Klasa / Poziom edukacji',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isAdopted',
      title: 'Czy dziecko ma już opiekuna?',
      type: 'boolean',
      initialValue: false,
    }),

    // === WERSJA POLSKA ===
    defineField({
      name: 'shortDescPl',
      title: '🇵🇱 Opis krótki (PL)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longDescPl',
      title: '🇵🇱 Historia dziecka (PL)',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'needsPl',
      title: '🇵🇱 Potrzeby (PL)',
      type: 'array',
      of: [{type: 'string'}],
      initialValue: ['Edukacja', 'Posiłki', 'Opieka medyczna'],
    }),

    // === WERSJA ANGIELSKA ===
    defineField({
      name: 'shortDescEn',
      title: '🇬🇧 Opis krótki (EN)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'longDescEn',
      title: '🇬🇧 Historia dziecka (EN)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'needsEn',
      title: '🇬🇧 Potrzeby (EN)',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // === WERSJA NIDERLANDZKA ===
    defineField({
      name: 'shortDescNl',
      title: '🇳🇱 Opis krótki (NL)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'longDescNl',
      title: '🇳🇱 Historia dziecka (NL)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'needsNl',
      title: '🇳🇱 Potrzeby (NL)',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'location',
      media: 'image',
      isAdopted: 'isAdopted',
    },
    prepare(selection) {
      const {title, subtitle, media, isAdopted} = selection
      return {
        title: `${title} ${isAdopted ? '✅' : '⏳'}`,
        subtitle: subtitle,
        media: media,
      }
    },
  },
})
