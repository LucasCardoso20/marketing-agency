export default {
    name: 'meetOurTeam',
    title: 'Meet Our Team',
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
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },

        {
            name: 'description',
            title: 'Description',
            type: 'text'
        }
    ]

}