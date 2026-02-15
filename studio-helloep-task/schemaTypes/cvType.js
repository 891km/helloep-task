import {defineField, defineType} from 'sanity'

export const cvType = defineType({
  name: 'CV',
  title: 'CV',
  type: 'document',

  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'table',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'CV',
      }
    },
  },
})
