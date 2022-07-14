export default {
    name: 'featuredServicesSection',
    title: 'Featured Services Section',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Featured Services Title',
            type: 'string',
        },

        {
            name: 'subtitle',
            title: 'Featured Services Subtitle',
            type: 'string',
        },

        {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}