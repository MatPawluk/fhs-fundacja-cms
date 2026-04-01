const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const token = process.env.SANITY_WRITE_TOKEN || process.env.DEV_TOKEN_SANITY;

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || '22akysx8',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: token,
  useCdn: false,
});

const childrenToMigrate = [
  {
    name: 'Alima Sadia',
    age: 7,
    gender: 'dziewczynka',
    country: 'Gambia',
    location: 'Bijilo',
    imageFileName: 'adopcja-alima.jpg',
    monthlySupport: 150,
    grade: '1 klasa',
    shortDescPl: 'Alima to pilna uczennica, która potrzebuje wsparcia. Jej tata od blisko dwóch lat pozostaje bez pracy.',
    longDescPl: 'Alima to pilna uczennica, która potrzebuje wsparcia. Jej tata od blisko dwóch lat pozostaje bez pracy, a drobny biznes prowadzony przez mamę nie przynosi wystarczających dochodów. Z tego powodu rodzina nie jest w stanie opłacić czesnego i zapewnić Alimie ciągłości nauki.',
    needsPl: ['Edukacja', 'Posiłki', 'Opieka medyczna'],
  },
  {
    name: 'Lamin Ceessay',
    age: 9,
    gender: 'chłopiec',
    country: 'Gambia',
    location: 'Bijilo',
    imageFileName: 'adopcja-lamin.jpg',
    monthlySupport: 150,
    grade: '2 klasa',
    shortDescPl: 'Lamin to ciekawy świata chłopiec z 2 klasy. Uwielbia matematykę, naukę, sztukę i sport.',
    longDescPl: 'Lamin to ciekawy świata chłopiec z 2 klasy. To ambitny uczeń, który z pasją podchodzi do wszystkiego, co robi. Interesuje się matematyką, naukami przyrodniczymi i sztuką, a po lekcjach chętnie gra w piłkę i uczestniczy w zajęciach dodatkowych. Ceni sobie przyjaźń i współpracę - W szkole zawsze można na niego liczyć.',
    needsPl: ['Edukacja', 'Posiłki', 'Materiały szkolne'],
  },
  {
    name: 'Suna Fai',
    age: 10,
    gender: 'dziewczynka',
    country: 'Gambia',
    location: 'Bijilo',
    imageFileName: 'adopcja-suna.jpg',
    monthlySupport: 150,
    grade: '2 klasa',
    shortDescPl: 'Suna chodzi do 2 klasy w My Gambia School. Jest bardzo ambitną uczennicą, która kocha czytać i rysować.',
    longDescPl: 'Suna chodzi do 2 klasy w My Gambia School. Jest bardzo ambitną uczennicą, która kocha czytać i rysować. Jej mama robi wszystko, by zapewnić jej edukację mimo skromnych dochodów. Suna marzy o tym, by kiedyś zostać nauczycielką.',
    needsPl: ['Edukacja', 'Posiłki', 'Materiały szkolne'],
  },
  {
    name: 'Elizabeth Christian',
    age: 7,
    gender: 'dziewczynka',
    country: 'Gambia',
    location: 'Bijilo',
    imageFileName: 'adopcja-elizabeth.jpg',
    monthlySupport: 150,
    grade: '2 klasa',
    shortDescPl: 'Elizabeth to radosna, pełna energii dziewczynka, która z pasją podchodzi do nauki.',
    longDescPl: 'Elizabeth uczęszcza do 2 klasy w My Gambia School. To radosna, pełna energii dziewczynka, która z pasją podchodzi do nauki. Marzy o tym, by poznawać świat i uczyć się nowych rzeczy, ale potrzebuje wsparcia, by móc kontynuować edukację i rozwijać swoje talenty.',
    needsPl: ['Edukacja', 'Posiłki', 'Opieka medyczna'],
  },
  {
    name: "Unique J'gin",
    age: 10,
    gender: 'chłopiec',
    country: 'Gambia',
    location: 'Bijilo',
    imageFileName: 'adopcja-unique.jpg',
    monthlySupport: 150,
    grade: '8 klasa',
    shortDescPl: 'Unique to bystry i kreatywny chłopiec, który z dużą ciekawością odkrywa świat.',
    longDescPl: 'Unique to bystry i kreatywny chłopiec, który z dużą ciekawością odkrywa świat. Mimo młodego wieku uczy się już w 8 klasie, co świadczy o jego dużych możliwościach i szybkim rozwoju. Interesuje się nauką, sztuką, muzyką oraz sportem. Jest otwarty, pełen energii i znany z radosnego usposobienia.',
    needsPl: ['Edukacja', 'Materiały szkolne', 'Posiłki'],
  },
  {
    name: 'Mariatou Kanteh',
    age: 14,
    gender: 'dziewczynka',
    country: 'Gambia',
    location: 'Bijilo',
    imageFileName: 'adopcja-mariatou.jpg',
    monthlySupport: 150,
    grade: '8 klasa',
    shortDescPl: 'Mariatou to serdeczna i pełna energii dziewczynka, która z ciekawością poznaje świat.',
    longDescPl: 'Mariatou to serdeczna i pełna energii dziewczynka, która z ciekawością poznaje świat i chętnie się uczy. Ma 14 lat i obecnie uczęszcza do 8 klasy. Jest osobą otwartą, życzliwą i łatwo nawiązuje relacje z innymi. Ceni przyjaźń, wsparcie i poczucie bezpieczeństwa.',
    needsPl: ['Edukacja', 'Posiłki', 'Opieka medyczna'],
  },
  {
    name: 'Peggy',
    age: 6,
    gender: 'dziewczynka',
    country: 'Gambia',
    location: 'Bijilo',
    imageFileName: 'adopcja-peggy.jpg',
    monthlySupport: 150,
    grade: '1 klasa',
    shortDescPl: 'Peggy to urocza i pełna energii dziewczynka, która uczęszcza do 1 klasy.',
    longDescPl: 'Peggy to urocza i pełna energii dziewczynka, która uczęszcza do 1 klasy. Jest pogodna, serdeczna i chętnie nawiązuje relacje z innymi. Lubi spędzać czas z rówieśnikami i ceni przyjaźń oraz życzliwość. Dzięki swojej otwartości i radosnemu usposobieniu z entuzjazmem odkrywa świat i stawia pierwsze kroki w szkolnej przygodzie.',
    needsPl: ['Edukacja', 'Posiłki', 'Opieka medyczna'],
  },
];

async function migrate() {
  if (!token) {
    console.error('ERROR: No Sanity token found.');
    process.exit(1);
  }

  console.log('--- Final Migration Start ---');
  console.log('Project ID:', client.config().projectId);
  
  // Cleanup
  console.log('Cleaning existing records...');
  await client.delete({ query: '*[_type == "dziecko"]' });

  for (const child of childrenToMigrate) {
    try {
      console.log(`\n[${child.name}]`);
      const imagePath = path.join(__dirname, '../src/assets', child.imageFileName);
      const imageData = fs.readFileSync(imagePath);
      
      console.log(`  Uploading photo...`);
      const asset = await client.assets.upload('image', imageData, { filename: child.imageFileName });
      
      console.log(`  Creating document...`);
      const doc = {
        _type: 'dziecko',
        name: child.name,
        age: child.age,
        gender: child.gender,
        country: child.country,
        location: child.location,
        monthlySupport: child.monthlySupport,
        grade: child.grade,
        isAdopted: false,
        image: {
          _type: 'image',
          asset: { _type: 'reference', _ref: asset._id },
        },
        shortDescPl: child.shortDescPl,
        longDescPl: child.longDescPl,
        needsPl: child.needsPl,
      };
      
      const result = await client.create(doc);
      console.log(`  ✅ Done! ID: ${result._id}`);
    } catch (err) {
      console.error(`  ❌ ERROR:`, err.message);
    }
  }
  console.log('\n--- Migration Finished successfully ---');
}

migrate().catch(err => {
  console.error('CRITICAL FATAL ERROR:', err);
  process.exit(1);
});
