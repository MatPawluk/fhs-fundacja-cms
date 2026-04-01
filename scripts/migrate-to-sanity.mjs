#!/usr/bin/env node
/**
 * Skrypt migracji artykułów do Sanity CMS
 * Uruchom: node scripts/migrate-to-sanity.mjs
 *
 * Wymagania:
 *  - plik .env z DEV_TOKEN_SANITY
 *  - @sanity/client zainstalowany
 */
import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Wczytaj .env ręcznie (bez dotenv, żeby nie instalować dodatkowych pakietów)
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, '..', '.env');
const envContent = readFileSync(envPath, 'utf-8');
const envVars = Object.fromEntries(
  envContent.split('\n').filter(Boolean).map(line => {
    const [key, ...vals] = line.split('=');
    return [key.trim(), vals.join('=').trim()];
  })
);

const TOKEN = envVars['DEV_TOKEN_SANITY'];
if (!TOKEN) {
  console.error('❌ Brakuje DEV_TOKEN_SANITY w pliku .env');
  process.exit(1);
}

const client = createClient({
  projectId: '22akysx8',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: TOKEN,
  useCdn: false,
});

// === Artykuły do migracji ===
const articles = [
  {
    slug: 'gdzie-znika-twoja-marza',
    kategoria: 'Aktualności',
    date: '2026-02-07',
    readTime: '14 min',
    featured: true,
    titlePl: 'Pawilon OmenaArt Foundation uznany za najlepszy na Malta Biennale 2026',
    descriptionPl: 'OmenaArt Foundation za pośrednictwem Fundacji FHS zaprezentowała na Malta Biennale wyjątkowy pawilon poświęcony sztuce afrykańskiej i kulturze Gambii.',
    titleEn: 'OmenaArt Foundation Pavilion named best at Malta Biennale 2026',
    descriptionEn: 'OmenaArt Foundation through FHS Foundation presented a unique pavilion dedicated to African art and Gambian culture at Malta Biennale.',
    titleNl: 'OmenaArt Foundation Paviljoen uitgeroepen tot beste op Malta Biënnale 2026',
    descriptionNl: 'OmenaArt Foundation presenteerde via FHS Foundation een uniek paviljoen gewijd aan Afrikaanse kunst en Gambiaanse cultuur.',
  },
  {
    slug: 'chinski-nowy-rok-2026',
    kategoria: 'Aktualności',
    date: '2026-02-05',
    readTime: '12 min',
    featured: true,
    titlePl: 'Omena Mensah z międzynarodowym tytułem Global Woman of Impact',
    descriptionPl: 'Omena Mensah, patronka i ambasadorka Fundacji FHS, została uhonorowana tytułem Global Woman of Impact za działalność charytatywną w Afryce.',
    titleEn: 'Omena Mensah receives international Global Woman of Impact title',
    descriptionEn: 'Omena Mensah, patron and ambassador of FHS Foundation, was honored with the Global Woman of Impact title for charitable work in Africa.',
    titleNl: 'Omena Mensah ontvangt internationale titel Global Woman of Impact',
    descriptionNl: 'Omena Mensah, beschermvrouwe van FHS Foundation, werd geëerd met de titel Global Woman of Impact.',
  },
  {
    slug: 'przewagi-konkurencyjne-chinskich-firm',
    kategoria: 'Nasze projekty',
    date: '2025-01-10',
    readTime: '12 min',
    featured: true,
    titlePl: 'Budowa szkoły w prowincji Upper River - postępy prac',
    descriptionPl: 'Relacja z budowy szkoły podstawowej w jednej z najbardziej potrzebujących prowincji Gambii. Dzięki wsparciu darczyńców projekt posuwa się naprzód.',
    titleEn: 'School construction in Upper River province - progress report',
    descriptionEn: 'Report on the construction of an elementary school in one of the most needy provinces of The Gambia.',
    titleNl: 'Schoolbouw in de provincie Upper River - voortgangsrapport',
    descriptionNl: 'Verslag van de bouw van een basisschool in een van de meest behoeftige provincies van Gambia.',
  },
  {
    slug: 'chinski-system-innowacji',
    kategoria: 'Nasze projekty',
    date: '2025-01-05',
    readTime: '15 min',
    featured: true,
    titlePl: 'Program żywieniowy dla 200 dzieci w Bandżulu',
    descriptionPl: 'Fundacja FHS uruchomiła program zapewniający codzienne posiłki dzieciom uczęszczającym do szkół w rejonie Bandżulu.',
    titleEn: 'Nutrition program for 200 children in Banjul',
    descriptionEn: 'FHS Foundation launched a program providing daily meals for children attending schools in the Banjul area.',
    titleNl: 'Voedingsprogramma voor 200 kinderen in Banjul',
    descriptionNl: 'FHS Foundation lanceerde een programma dat dagelijkse maaltijden biedt aan schoolkinderen in Banjul.',
  },
  {
    slug: 'przygotowanie-do-wspolpracy',
    kategoria: 'Poradniki',
    date: '2024-12-20',
    readTime: '8 min',
    featured: false,
    titlePl: 'Jak zostać wolontariuszem w Domu Polskim w Gambii',
    descriptionPl: 'Praktyczny przewodnik dla osób zainteresowanych wolontariatem w naszym ośrodku w Gambii.',
    titleEn: 'How to become a volunteer at the Polish House in The Gambia',
    descriptionEn: 'Practical guide for people interested in volunteering at our center in The Gambia.',
    titleNl: 'Hoe word je vrijwilliger in het Poolse Huis in Gambia',
    descriptionNl: 'Praktische gids voor geïnteresseerden in vrijwilligerswerk in ons centrum in Gambia.',
  },
  {
    slug: 'przed-podpisaniem-umowy',
    kategoria: 'Poradniki',
    date: '2024-12-15',
    readTime: '10 min',
    featured: false,
    titlePl: 'Wirtualna adopcja krok po kroku - wszystko co musisz wiedzieć',
    descriptionPl: 'Kompletny przewodnik po programie wirtualnej adopcji Fundacji FHS.',
    titleEn: 'Virtual adoption step by step - everything you need to know',
    descriptionEn: 'Complete guide to the FHS Foundation virtual adoption program.',
    titleNl: 'Virtuele adoptie stap voor stap',
    descriptionNl: 'Complete gids voor het virtuele adoptieprogramma van FHS Foundation.',
  },
  {
    slug: 'chiny-konkurent-technologiczny',
    kategoria: 'Aktualności',
    date: '2024-12-10',
    readTime: '5 min',
    featured: false,
    titlePl: 'Fundacja FHS partnerem UNICEF w regionie Afryki Zachodniej',
    descriptionPl: 'Nawiązaliśmy współpracę z UNICEF w zakresie programów edukacyjnych i zdrowotnych w Gambii.',
    titleEn: 'FHS Foundation partners with UNICEF in West Africa region',
    descriptionEn: 'We established cooperation with UNICEF in educational and health programs in The Gambia.',
    titleNl: 'FHS Foundation partner van UNICEF in West-Afrika',
    descriptionNl: 'We zijn een samenwerking aangegaan met UNICEF op het gebied van onderwijs- en gezondheidsprogramma\'s in Gambia.',
  },
  {
    slug: 'automatyzacja-robotyzacja-chiny',
    kategoria: 'Nasze projekty',
    date: '2024-12-01',
    readTime: '14 min',
    featured: false,
    titlePl: 'Remont i wyposażenie kliniki zdrowia w Brikama',
    descriptionPl: 'Dzięki zbiórce funduszy udało się wyremontować i wyposażyć klinikę zdrowia obsługującą ponad 5000 mieszkańców.',
    titleEn: 'Renovation and equipping of health clinic in Brikama',
    descriptionEn: 'Thanks to fundraising, we managed to renovate and equip a health clinic serving over 5,000 residents.',
    titleNl: 'Renovatie en uitrusting van gezondheidskliniek in Brikama',
    descriptionNl: 'Dankzij fondsenwerving konden we een gezondheidskliniek renoveren en uitrusten.',
  },
];

// === Migracja ===
async function migrate() {
  console.log(`🚀 Migracja ${articles.length} artykułów do Sanity (projekt: 22akysx8, dataset: production)\n`);

  let created = 0;
  let skipped = 0;
  let errors = 0;

  for (const article of articles) {
    const docId = `artykul-${article.slug}`;

    try {
      // Sprawdź czy dokument już istnieje
      const existing = await client.getDocument(docId);
      if (existing) {
        console.log(`⏭️  Pominięto (istnieje): ${article.titlePl}`);
        skipped++;
        continue;
      }
    } catch {
      // Dokument nie istnieje — kontynuuj tworzenie
    }

    try {
      await client.createOrReplace({
        _id: docId,
        _type: 'artykul',
        slug: { _type: 'slug', current: article.slug },
        kategoria: article.kategoria,
        date: article.date,
        readTime: article.readTime,
        featured: article.featured,
        titlePl: article.titlePl,
        descriptionPl: article.descriptionPl,
        titleEn: article.titleEn,
        descriptionEn: article.descriptionEn,
        titleNl: article.titleNl,
        descriptionNl: article.descriptionNl,
      });
      console.log(`✅ Dodano: ${article.titlePl}`);
      created++;
    } catch (err) {
      console.error(`❌ Błąd przy: ${article.titlePl}`, err.message);
      errors++;
    }
  }

  console.log(`\n📊 Wynik migracji:`);
  console.log(`   ✅ Dodano:    ${created}`);
  console.log(`   ⏭️  Pominięto: ${skipped}`);
  console.log(`   ❌ Błędy:     ${errors}`);
  console.log(`\n🎉 Gotowe! Otwórz Sanity Studio: https://sanity.io/manage/personal/project/22akysx8`);
}

migrate().catch(console.error);
