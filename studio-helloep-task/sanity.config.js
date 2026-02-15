import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {table} from '@sanity/table'

export default defineConfig({
  name: 'default',
  title: 'studio-helloep-task',

  projectId: '4bwya28c',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Contact')
              .child(S.document().schemaType('contact').documentId('contact')),

            S.listItem().title('CV').child(S.document().schemaType('CV').documentId('CV')),

            S.divider(),

            S.documentTypeListItem('post').title('Posts'),
          ]),
    }),
    visionTool(),
    table(),
  ],

  schema: {
    types: schemaTypes,
  },
})
