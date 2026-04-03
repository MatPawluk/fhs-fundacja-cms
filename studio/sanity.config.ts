import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {artykulSchema} from './schemas/artykul'
import {dzieckoSchema} from './schemas/dziecko'
import {projektSchema} from './schemas/projekt'

export default defineConfig({
  name: 'fhs-fundacja',
  title: 'Fundacja FHS — CMS',

  projectId: '22akysx8',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [artykulSchema, dzieckoSchema, projektSchema],
  },
})
