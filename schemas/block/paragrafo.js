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
        },
        {
            title: 'Posizione Immagine',
            name: 'posizioneImmagine',
            type: 'string',
            options: {
                list: [
                    {title: 'Nessuna', value: 'nessuna'},
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
            media: 'immagine',
            name: '_type',

        },
        prepare(selection) {
            const {title, name, media} = selection
            return {
                title: title + ' (' + name + ')',
                media: media
            }
        }
    }
}
