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
            options: {collapsible: true, collapsed: true}
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
            name: 'icona',
            title: 'Icona',
            type: 'string',
        },



    ],

    preview: {
        select: {
            title: 'titolo.it'
        }
    }
}
