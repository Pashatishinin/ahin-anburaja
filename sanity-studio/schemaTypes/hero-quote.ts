import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroQuote',
  title: 'Hero Quote',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
    }),
    
  ],
  preview: {
    select: {
      title: 'quote',
    },
  },


})