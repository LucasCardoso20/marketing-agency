export default {
    name: 'featuredText',
    title: 'Featured Title',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },

        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },

        {
            name: 'backgroundImage',
            title: 'Background image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}