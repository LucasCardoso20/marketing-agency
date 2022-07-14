export default {
    name: 'backgroundFeaturedSeo',
    title: 'Background Featured SEO',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },

        {
            name: 'subTitle',
            title: 'Sub title',
            type: 'string',
        },

        {
            name: 'text',
            title: 'text',
            type: 'string',
        },

        {
            name: 'buttonText',
            title: 'Button text',
            type: 'string',
        },

        {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: {
               hotspot: true
            }
        },
    ]
}