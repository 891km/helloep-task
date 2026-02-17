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

  deployment: {
    appId: 'yqgktpsyx3iqprnkbuydg709',
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('CMS 관리')
          .items([
            S.listItem()
              .title('콘텐츠')
              .id('content')
              .child(
                S.list()
                  .title('콘텐츠')
                  .id('content')
                  .items([
                    S.listItem()
                      .title('Contact')
                      .child(S.document().schemaType('contact').documentId('contact')),

                    S.listItem().title('CV').child(S.document().schemaType('CV').documentId('CV')),

                    S.divider(),

                    S.documentTypeListItem('post').title('Posts'),
                  ]),
              ),

            S.listItem()
              .title('설정')
              .id('setting')
              .child(
                S.list()
                  .title('설정')
                  .id('setting')
                  .items([
                    S.listItem()
                      .title('Category')
                      .child(S.document().schemaType('category').documentId('category')),
                  ]),
              ),
          ]),
    }),
    visionTool(),
    table(),
  ],

  schema: {
    types: schemaTypes,
  },
})
