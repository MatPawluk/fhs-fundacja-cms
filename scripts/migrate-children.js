import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config();

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || '22akysx8',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.DEV_TOKEN_SANITY
});

const childrenData = [
  {
    name: "Alima Sadia",
    age: 7,
    gender: "dziewczynka",
    location: "Bijilo",
    grade: "1 klasa",
    longDescPl: "Alima to pilna uczennica, która potrzebuje wsparcia. Jej tata od blisko dwóch lat pozostaje bez pracy, a drobny biznes prowadzony przez mamę nie przynosi wystarczających dochodów. Z tego powodu rodzina nie jest w stanie opłacić czesnego i zapewnić Alimie ciągłości nauki.",
    longDescEn: "Alima is a diligent student who needs support. Her father has been unemployed for nearly two years, and her mother's small business does not bring in enough income. For this reason, the family is unable to pay tuition fees and ensure Alima's continuity of education.",
    longDescNl: "Alima is een ijverige leerling die ondersteuning nodig heeft. Haar vader is al bijna twee jaar werkloos en de kleine onderneming van haar moeder levert niet genoeg inkomen op. Om deze reden is de familie niet in staat om het lesgeld te betalen en de continuïteit van Alima's onderwijs te waarborgen.",
    needsPl: ["Edukacja", "Posiłki", "Opieka medyczna"],
    needsEn: ["Education", "Meals", "Medical Care"],
    needsNl: ["Onderwijs", "Maaltijden", "Medische zorg"]
  },
  {
    name: "Lamin Ceessay",
    age: 9,
    gender: "chłopiec",
    location: "Bijilo",
    grade: "2 klasa",
    longDescPl: "Lamin to ciekawy świata chłopiec z 2 klasy. To ambitny uczeń, który z pasją podchodzi do wszystkiego, co robi. Interesuje się matematyką, naukami przyrodniczymi i sztuką, a po lekcjach chętnie gra w piłkę i uczestniczy w zajęciach dodatkowych. Ceni sobie przyjaźń i współpracę - w szkole zawsze można na niego liczyć.",
    longDescEn: "Lamin is a world-curious boy in 2nd grade. He is an ambitious student who approaches everything he does with passion. He is interested in mathematics, science, and art, and after classes, he enjoys playing football and participating in extracurricular activities. He values friendship and cooperation - he can always be counted on at school.",
    longDescNl: "Lamin is een nieuwsgierige jongen in de 2e klas. Hij is een ambitieuze leerling die alles wat hij doet met passie benadert. Hij is geïnteresseerd in wiskunde, natuurwetenschappen en kunst, en na de lessen speelt hij graag voetbal en neemt hij deel aan naschoolse activiteiten. Hij hecht veel waarde aan vriendschap en samenwerking - op school kan men altijd op hem rekenen.",
    needsPl: ["Edukacja", "Posiłki", "Opieka medyczna"],
    needsEn: ["Education", "Meals", "Medical Care"],
    needsNl: ["Onderwijs", "Maaltijden", "Medische zorg"]
  },
  {
    name: "Suna Fai",
    age: 10,
    gender: "dziewczynka",
    location: "Bijilo",
    grade: "2 klasa",
    longDescPl: "Suna chodzi do 2 klasy w My Gambia School. Jest bardzo ambitną uczennicą, która kocha czytać i rysować. Jej mama robi wszystko, by zapewnić jej edukację mimo skromnych dochodów. Suna marzy o tym, by kiedyś zostać nauczycielką.",
    longDescEn: "Suna attends 2nd grade at My Gambia School. She is a very ambitious student who loves reading and drawing. Her mother does everything to provide her with an education despite modest income. Suna dreams of becoming a teacher one day.",
    longDescNl: "Suna zit in de 2e klas van de My Gambia School. Ze is een zeer ambitieuze leerling die houdt van lezen en tekenen. Haar moeder doet er alles aan om haar van onderwijs te voorzien, ondanks een bescheiden inkomen. Suna droomt ervan om op een dag lerares te worden.",
    needsPl: ["Edukacja", "Posiłki", "Opieka medyczna"],
    needsEn: ["Education", "Meals", "Medical Care"],
    needsNl: ["Onderwijs", "Maaltijden", "Medische zorg"]
  },
  {
    name: "Elizabeth Christian",
    age: 7,
    gender: "dziewczynka",
    location: "Bijilo",
    grade: "2 klasa",
    longDescPl: "Elizabeth uczęszcza do 2 klasy w My Gambia School. To radosna, pełna energii dziewczynka, która z pasją podchodzi do nauki. Marzy o tym, by poznawać świat i uczyć się nowych rzeczy, ale potrzebuje wsparcia, by móc kontynuować edukację i rozwijać swoje talenty.",
    longDescEn: "Elizabeth attends 2nd grade at My Gambia School. She is a joyful, energetic girl who approaches learning with passion. She dreams of getting to know the world and learning new things, but she needs support to be able to continue her education and develop her talents.",
    longDescNl: "Elizabeth zit in de 2e klas van de My Gambia School. Ze is een vrolijk, energiek meisje dat leren met passie benadert. Ze droomt ervan de wereld te leren kennen en nieuwe dingen te leren, maar ze heeft steun nodig om haar opleiding voort te kunnen zetten en haar talenten te ontwikkelen.",
    needsPl: ["Edukacja", "Posiłki", "Opieka medyczna"],
    needsEn: ["Education", "Meals", "Medical Care"],
    needsNl: ["Onderwijs", "Maaltijden", "Medische zorg"]
  },
  {
    name: "Unique J'gin",
    age: 10,
    gender: "chłopiec",
    location: "Bijilo",
    grade: "8 klasa",
    longDescPl: "Unique to bystry i kreatywny chłopiec, który z dużą ciekawością odkrywa świat. Mimo młodego wieku uczy się już w 8 klasie, co świadczy o jego dużych możliwościach i szybkim rozwoju. Interesuje się nauką, sztuką, muzyką oraz sportem. Jest otwarty, pełen energii i znany z radosnego usposobienia. Lubi rozmowy o swoich zainteresowaniach i z entuzjazmem angażuje się w różne aktywności.",
    longDescEn: "Unique is a bright and creative boy who discovers the world with great curiosity. Despite his young age, he is already in 8th grade, which proves his great potential and fast development. He is interested in science, art, music, and sports. He is open, full of energy, and known for his joyful disposition. He likes talking about his interests and enthusiastically engages in various activities.",
    longDescNl: "Unique is een slimme en creatieve jongen die de wereld met grote nieuwsgierigheid ontdekt. Ondanks zijn jonge leeftijd zit hij al in de 8e klas, wat getuigt van zijn grote potentieel en snelle ontwikkeling. Hij is geïnteresseerd in wetenschap, kunst, muziek en sport. Hij is open, vol energie en staat bekend om zijn vrolijke karakter. Hij praat graag over zijn interesses en zet zich enthousiast in voor diverse activiteiten.",
    needsPl: ["Edukacja", "Posiłki", "Opieka medyczna"],
    needsEn: ["Education", "Meals", "Medical Care"],
    needsNl: ["Onderwijs", "Maaltijden", "Medische zorg"]
  },
  {
    name: "Mariatou Kanteh",
    age: 14,
    gender: "dziewczynka",
    location: "Bijilo",
    grade: "8 klasa",
    longDescPl: "Mariatou to serdeczna i pełna energii dziewczynka, która z ciekawością poznaje świat i chętnie się uczy. Ma 14 lat i obecnie uczęszcza do 8 klasy. Jest osobą otwartą, życzliwą i łatwo nawiązuje relacje z innymi. Ceni przyjaźń, wsparcie i poczucie bezpieczeństwa. Dzięki swojej wrażliwości i zaangażowaniu z entuzjazmem rozwija się zarówno w szkole, jak i w codziennym życiu.",
    longDescEn: "Mariatou is a cordial and energetic girl who gets to know the world with curiosity and learns eagerly. She is 14 years old and currently attends 8th grade. She is an open, kind person and easily builds relationships with others. She values friendship, support, and a sense of security. Thanks to her sensitivity and commitment, she enthusiastically develops both in school and in daily life.",
    longDescNl: "Mariatou is een hartelijk en energiek meisje dat de wereld met nieuwsgierigheid leert kennen en graag leert. Ze jest 14 jaar oud en zit momenteel in de 8e klas. Ze is een open, vriendelijk persoon en bouwt makkelijk relaties op met anderen. Ze hecht waarde aan vriendschap, steun en een gevoel van veiligheid. Dankzij haar gevoeligheid en inzet ontwikkelt ze zich enthousiast, zowel op school als in het dagelijks leven.",
    needsPl: ["Edukacja", "Posiłki", "Opieka medyczna"],
    needsEn: ["Education", "Meals", "Medical Care"],
    needsNl: ["Onderwijs", "Maaltijden", "Medische zorg"]
  },
  {
    name: "Peggy",
    age: 6,
    gender: "dziewczynka",
    location: "Bijilo",
    grade: "1 klasa",
    longDescPl: "Peggy to urocza i pełna energii dziewczynka, która uczęszcza do 1 klasy. Jest pogodna, serdeczna i chętnie nawiązuje relacje z innymi. Lubi spędzać czas z rówieśnikami i ceni przyjaźń oraz życzliwość. Dzięki swojej otwartości i radosnemu usposobieniu z entuzjazmem odkrywa świat i stawia pierwsze kroki w szkolnej przygodzie.",
    longDescEn: "Peggy is a cute and energetic girl who attends 1st grade. She is cheerful, cordial, and eagerly builds relationships with others. She likes to spend time with peers and values friendship and kindness. Thanks to her openness and joyful disposition, she enthusiastically discovers the world and takes her first steps in her school adventure.",
    longDescNl: "Peggy is een schattig en energiek meisje dat in de 1e klas zit. Ze is vrolijk, hartelijk en bouwt graag relaties op met anderen. Ze brengt graag tijd door met leeftijdsgenoten en hecht waarde aan vriendschap en vriendelijkheid. Dankzij haar openheid en vrolijke karakter ontdekt ze enthousiast de wereld en zet ze haar eerste stappen in haar schoolavontuur.",
    needsPl: ["Edukacja", "Posiłki", "Opieka medyczna"],
    needsEn: ["Education", "Meals", "Medical Care"],
    needsNl: ["Onderwijs", "Maaltijden", "Medische zorg"]
  }
];

async function migrate() {
  console.log('Starting migration...');
  
  try {
    // 1. Fetch all existing children to match IDs
    const existingChildren = await client.fetch('*[_type == "dziecko"]{_id, name}');
    console.log(`Found ${existingChildren.length} existing children in database.`);

    for (const child of childrenData) {
      const existing = existingChildren.find(c => c.name === child.name);
      
      const getShort = (text) => text.split('.')[0] + '.';

      const updateData = {
        age: child.age,
        gender: child.gender,
        location: child.location,
        grade: child.grade,
        longDescPl: child.longDescPl,
        longDescEn: child.longDescEn,
        longDescNl: child.longDescNl,
        shortDescPl: getShort(child.longDescPl),
        shortDescEn: getShort(child.longDescEn),
        shortDescNl: getShort(child.longDescNl),
        needsPl: child.needsPl,
        needsEn: child.needsEn,
        needsNl: child.needsNl,
      };

      if (existing) {
        console.log(`Updating ${child.name} (${existing._id})...`);
        await client.patch(existing._id).set(updateData).commit();
      } else {
        console.log(`Child ${child.name} not found. Creating new document...`);
        await client.create({
          _type: 'dziecko',
          ...child,
          shortDescPl: getShort(child.longDescPl),
          shortDescEn: getShort(child.longDescEn),
          shortDescNl: getShort(child.longDescNl),
          isAdopted: false,
          monthlySupport: 150
        });
      }
    }
    
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrate();
