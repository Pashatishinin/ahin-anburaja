import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'personalPhoto',
      title: 'Personal Photo',
      type: 'image',
    }),
    defineField(
      {
        name: 'about',
        title: 'About',
        type: 'array',
        of: [
    {
        type: 'text'
    }
    
  ]}),
],
  preview: {
    select: {
        media: "personalPhoto"
    },
  },


})