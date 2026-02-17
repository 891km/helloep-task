import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'categoryItem',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'color',
              title: 'Tag Color',
              type: 'string',
              description: 'hex 컬러값 (#RRGGBB)',
              validation: (rule) => rule.required().regex(/^#([0-9A-Fa-f]{6})$/),
            },
          ],
          preview: {
            select: {
              label: 'label',
              value: 'value',
              color: 'color',
            },
            prepare({label, value, color}) {
              return {
                title: label,
                subtitle: `${value} / ${color}`,
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Category',
      }
    },
  },
})
