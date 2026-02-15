import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact',
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
        title: 'Contact',
      }
    },
  },
})
