import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
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
    
  ],
  preview: {
    select: {
      title: 'name',
    },
  },


})