export default {
    name: 'articolo',
    title: 'Articolo',
    type: 'document',
    fields: [
        {
            name: 'titoloGenerico',
            title: 'Titolo e slug',
            type: 'titoloGenerico',
            options: {collapsible: true, collapsed: false}
        },
        {
            title: 'Tipologia',
            name: 'tipologia',
            type: 'string',
            validation: Rule => Rule.required(),
            options: {
                list: [
                    {title: 'Articolo', value: 'articolo'},
                    {title: 'News', value: 'news'},
                ],
                layout: "dropdown"
            }
        },
        {
            title: 'Abstract',
            name: 'testo',
            type: 'localeBlock',
            options: {collapsible: true, collapsed: true}
        },
        {
            title: 'Immagine Principale',
            name: 'immagine',
            type: 'immagine',
            options: {collapsible: true, collapsed: true}
        },
        {
            type: 'reference',
            name: 'categoriaReference',
            to: {type: 'categoria'},
            weak: false
        },
        {
            title: 'Data Pubblicazione',
            name: 'dataPubblicazione',
            type: 'datetime',
            validation: Rule => Rule.required(),
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Oggi'
            }
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
            title: 'Metadata',
            name: 'metadata',
            type: 'metadata',
            options: {collapsible: true, collapsed: true}
        },



    ],

    orderings: [
        {
          title: 'Data Pubblicazione, New',
          name: 'dataPubblicazioneDesc',
          by: [
            {field: 'dataPubblicazione', direction: 'desc'}
          ]
        }
    ],

    preview: {
        select: {
            title: 'titoloGenerico.titolo.it',
            media: 'immagine'
        }
    }
}
