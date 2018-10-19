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
            type: 'string',
            options: {
                list: [
                    {title: 'Nessuna', value: null},
                    {title: 'Sopra', value: 'sopra'},
                    {title: 'Sotto', value: 'sotto'},
                    {title: 'Dopo il Titolo', value: 'dopo_titolo'},
                    {title: 'Sinistra', value: 'sinistra'},
                    {title: 'Destra', value: 'destra'}
                ],
                layout: "dropdown"
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
