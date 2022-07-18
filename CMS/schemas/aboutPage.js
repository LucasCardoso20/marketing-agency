export default {
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',

    fields: [
        {
            name: 'bannerImage',
            title: 'Banner image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name: 'bannerTitle',
            title: 'Banner title',
            type: 'string',
        },

        {
            name: 'bannerText',
            title: 'Banner text',
            type: 'string',
        },

        {
            name: 'buttonText',
            title: 'Button text',
            type: 'string',
        },
    ]
}