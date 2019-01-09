export default {
    title: 'Immagine',
    name: 'immagine',
    type: 'image',
    options: {
        hotspot: true,
        collapsible: true, 
        collapsed: true
    },
    fields: [
        {
            name: 'alt',
            type: 'localeString',
            title: 'Alt',
            options: {
                isHighlighted: true,
                collapsible: true, 
                collapsed: true
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
                isHighlighted: false,
                layout: "radio"
            }
        },
        {
            name: 'base',
            type: 'number',
            title: 'Base',
            options: {
                isHighlighted: false
            }
        },
        {
            name: 'altezza',
            type: 'number',
            title: 'Altezza',
            options: {
                isHighlighted: false
            }
        },
    ]
}
