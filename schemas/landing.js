export default {
    name: 'landing',
    title: 'Landig Page',
    type: 'document',
    fields: [
        {
            name: 'titoloGenerico',
            title: 'Titolo e slug',
            type: 'titoloGenerico',
            options: {collapsible: true, collapsed: true}
        },
        {
            name: 'testata',
            title: 'Testata',
            type: 'testata',
            options: {collapsible: true, collapsed: true}
        },
        {
            title: 'Contenuti',
            name: 'contenuti',
            type: 'array',
            of: [
                    {type: 'paragrafo'},
                    {
                        type: 'reference',
                        name: 'landingReference',
                        to: {type: 'landing'},
                        weak: true
                    },
                    {
                        type: 'reference',
                        name: 'contenutoRipetibileReference',
                        to: {type: 'contenutoRipetibile'},
                        weak: true
                    },
                    {
                        type: 'reference',
                        name: 'bannerReference',
                        to: {type: 'banner'},
                        weak: true
                    }
            ],
            options: {
                editModal: 'dialog'
            }
        },
        {
            title: 'Metadata',
            name: 'metadata',
            type: 'metadata',
            options: {collapsible: true, collapsed: true}
        },



    ],

    preview: {
        select: {
            title: 'titoloGenerico.titolo.it',
            media: 'testata.immagine'
        }
    }
}
