import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET,
  useCdn: false,
  token: process.env.DEV_TOKEN_SANITY,
  apiVersion: '2023-05-03',
});

async function uploadHeroImages() {
  const imagesDir = path.resolve(__dirname, '../src/assets/hero-bg-images');
  
  if (!fs.existsSync(imagesDir)) {
    console.error(`Folder ${imagesDir} nie istnieje!`);
    return;
  }

  const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(jpg|jpeg|png|webp|gif)$/i));
  console.log(`Znaleziono ${files.length} zdjęć do przesłania.`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(imagesDir, file);
    
    try {
      console.log(`[${i+1}/${files.length}] Przesyłanie: ${file}...`);
      
      // Upload asset
      const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
        filename: file,
      });

      // Create heroImage document
      await client.create({
        _type: 'heroImage',
        title: `Hero Background ${i + 1}`,
        order: i + 1,
        image: {
          _type: 'image',
          asset: {
            _type: "reference",
            _ref: asset._id,
          },
        },
      });

      console.log(`Sukces: ${file} wgrane i utworzone.`);
    } catch (err) {
      console.error(`Błąd przy ${file}:`, err.message);
    }
  }
}

uploadHeroImages();
