import {defineField, defineType} from 'sanity'
import {client} from '../sanity/client'

const categoryValues = await client.fetch(`*[_type == "category"][0].categories[].value`)

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',

  orderings: [
    {
      title: '작업년도 최신순 (workYear Desc)',
      name: 'workYearDesc',
      by: [
        {field: 'workYear', direction: 'desc'},
        {field: 'publishedAt', direction: 'desc'},
      ],
    },
    {
      title: '작업년도 과거순 (workYear Asc)',
      name: 'workYearAsc',
      by: [
        {field: 'workYear', direction: 'asc'},
        {field: 'publishedAt', direction: 'asc'},
      ],
    },
    {
      title: '제목순 (title)',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      workYear: 'workYear',
      media: 'thumbnail',
    },
    prepare({title, workYear, media}) {
      return {
        title: title,
        subtitle: workYear ? `${workYear}` : 'No year',
        media: media,
      }
    },
  },

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
        list: categoryValues ?? [],
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
