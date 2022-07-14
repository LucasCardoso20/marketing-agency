export default {
    name: 'ourHistory',
    title: 'Our History',
    type: 'document',

    fields: [
        {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },

        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        },

        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },

        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        },
    ]
}