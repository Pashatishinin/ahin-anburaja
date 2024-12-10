import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
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
    defineField(
      {
        name: 'images',
  title: 'Images',
  type: 'array',
  of: [
    {
        type: 'image'
    }
    
  ]}),
],
  preview: {
    select: {
      title: 'name',

    },
  },


})