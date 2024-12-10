import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'highlight',
  title: 'Highlights',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'image',
    }),
    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'cover',
    },
  },


})