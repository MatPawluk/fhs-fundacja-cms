import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '22akysx8',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
});

async function main() {
  try {
    const data = await client.fetch('*[_type == "dziecko"].name');
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

main();
