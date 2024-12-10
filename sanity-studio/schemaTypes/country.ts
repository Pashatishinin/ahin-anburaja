import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'country',
  title: 'Country',
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
      name: 'cover',
      title: 'Cover',
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