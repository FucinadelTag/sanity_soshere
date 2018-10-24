export default {
    name: 'contenutoRipetibile',
    title: 'Contenuto Ripetibile',
    type: 'document',
    fields: [
        {
            name: 'titolo',
            title: 'Titolo',
            type: 'localeString',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'titolo.it'
            },
        },
        {
            title: 'Immagine',
            name: 'immagine',
            type: 'immagine',
            options: {
                hotspot: true
            },
        },
        {
            title: 'Contenuti',
            name: 'contenuti',
            type: 'array',
            of: [
                    {type: 'paragrafo'},
            ],
            options: {
                editModal: 'dialog'
            }
        },
        {
            title: 'Layout',
            name: 'layout',
            type: 'string',
            options: {
                list: [
                    {title: 'Paragrafi in Verticale', value: 'verticale'},
                    {title: 'Paragrafi in Orizzontale', value: 'orizzontale'},
                    {title: 'Su 2 colonne', value: '2_colonne'},
                    {title: 'Su 3 colonne', value: '3_colonne'},
                    {title: 'Paragrafi a sinistra', value: 'paragrafi'},
                    {title: 'Paragrafi a destra', value: 'destra'}
                ],
                layout: "dropdown"
            }
        },
        {
            title: 'Titolo Visibile',
            name: 'titolo_visibile',
            type: 'boolean'
        },
        {
            name: 'icona',
            title: 'Icona',
            type: 'string',
        },



    ],

    preview: {
        select: {
            title: 'titolo.it',
            media: 'immagine'
        }
    }
}
