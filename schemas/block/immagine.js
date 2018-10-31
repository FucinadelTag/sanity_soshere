export default {
    title: 'Immagine',
    name: 'immagine',
    type: 'image',
    options: {
        hotspot: true
    },
    fields: [
        {
            name: 'alt',
            type: 'localeString',
            title: 'Alt',
            options: {
                isHighlighted: true
            }
        },
        {
            name: 'presentazione',
            type: 'string',
            title: 'Presentazione',
            options: {
                list: [
                    {title: 'Wide', value: 'wide'},
                    {title: 'Quadrata', value: 'quadrata'},
                    {title: 'Verticale', value: 'verticale'},
                ],
                isHighlighted: true,
                layout: "radio"
            }
        },
        {
            name: 'base',
            type: 'number',
            title: 'Base',
            options: {
                isHighlighted: true
            }
        },
        {
            name: 'altezza',
            type: 'number',
            title: 'Altezza',
            options: {
                isHighlighted: true
            }
        },
    ]
}
