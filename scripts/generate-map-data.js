import { getMapJSON } from 'dotted-map';
import fs from 'fs';
import path from 'path';

// Generate the map JSON string
const mapJsonString = getMapJSON({ height: 60, grid: 'rectangular' });

const outputDir = path.join(process.cwd(), 'src', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outputDir, 'worldMapData.json'),
  mapJsonString
);

console.log('Successfully generated worldMapData.json in src/data/');
