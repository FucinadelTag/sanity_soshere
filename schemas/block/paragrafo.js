export default {
    title: 'Paragrafo',
    name: 'paragrafo',
    type: 'object',
    fields: [
        {
            title: 'Titolo',
            name: 'titolo',
            type: 'localeString',
        },
        {
            title: 'Testo',
            name: 'testo',
            type: 'localeBlock'
        },
        {
            title: 'Immagine',
            name: 'immagine',
            type: 'immagine',
            options: {collapsible: true, collapsed: true}
        },
        {
            title: 'Posizione Immagine',
            name: 'posizioneImmagine',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    {title: 'Sopra', value: 'sopra'},
                    {title: 'Sotto', value: 'sotto'},
                    {title: 'Sinistra', value: 'sinistra'},
                    {title: 'Destra', value: 'destra'}
                ]
            }
        },
        {
            title: 'Icona',
            name: 'icona',
            type: 'string'
        },
    ],
    preview: {
        select: {
            title: 'titolo.it',
            name: '_type',

        },
        prepare(selection) {
            const {title, name} = selection
            return {
                title: title + ' (' + name + ')'
            }
        }
    }
}
