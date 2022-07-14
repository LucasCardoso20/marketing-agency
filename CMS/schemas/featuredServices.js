export default {
    name: 'featuredServices',
    title: 'Featured Services',
    type: 'document',

    fields: [
        
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name: 'itemTitle',
            title: 'Item Title',
            type: 'string'
        },

        {
            name: 'itemDescription',
            title: 'Item Description',
            type: 'string'
        },

    ]
}