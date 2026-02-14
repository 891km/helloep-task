import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'credit',
      type: 'text',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'eng',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'description',
          type: 'text',
          validation: (rule) => rule.required(),
        },
        {
          name: 'credit',
          type: 'text',
          validation: (rule) => rule.required(),
        },
      ],
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'eng.title',
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'workYear',
      type: 'number',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'client',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'thumbnail',
      type: 'image',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: ['graphic', 'editorial', 'website', 'identity', 'space', 'motion', 'practice', 'etc'],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'image',
          name: 'image',
          title: 'Image',
          fields: [
            {
              name: 'caption',
              type: 'string',
            },
          ],
          preview: {
            select: {
              asset: 'asset',
            },
            prepare({asset}) {
              return {
                title: 'Image',
                media: asset,
              }
            },
          },
        },
        {
          type: 'object',
          name: 'youtubeEmbed',
          title: 'YouTube Embed',
          fields: [
            {
              name: 'url',
              type: 'url',
              validation: (rule) => rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
            },
          ],
          preview: {
            prepare() {
              return {
                title: 'YouTube URL',
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'workLinks',
      type: 'array',
      of: [
        {
          type: 'url',
        },
      ],
    }),

    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})
