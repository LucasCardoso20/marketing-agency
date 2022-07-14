export default {
    name: 'carouselFeatured',
    title: 'Carousel Featured',
    type: 'document',

    fields: [
        {
            name: 'carouselTitle',
            title: 'Carousel Title',
            type: 'string',
        },

        {
            name: 'carouselSubTitle',
            title: 'Carousel Sub Title',
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
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },

        {
            name: 'titleColor',
            title: 'Title Color',
            type: 'string',
        },

        {
            name: 'subTitleColor',
            title: 'Sub Title Color',
            type: 'string',
        },

        {
            name: 'contentPositionInitial',
            title: 'Content Position Initial',
            type: 'boolean'
        },

        {
            name: 'contentPositionCenter',
            title: 'Content Position Center',
            type: 'boolean'
        },
    ]

}