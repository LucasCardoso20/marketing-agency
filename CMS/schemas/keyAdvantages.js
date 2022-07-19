export default {
  name: 'keyAdvantages',
  title: 'Key Advantages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}