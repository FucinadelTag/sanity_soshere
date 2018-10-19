export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'nome'
            },
        },
        {
            name: 'riga1',
            title: 'Riga 1',
            type: 'localeString',
        },
        {
            name: 'riga2',
            title: 'Riga 2',
            type: 'localeString',
        },
        {
            title: 'Immagine',
            name: 'immagine',
            type: 'immagine',
            options: {collapsible: true, collapsed: true}
        },
        {
            title: 'Layout',
            name: 'layout',
            type: 'string',
            options: {
                list: [
                    {title: 'Solo immagine', value: 'immagine'},
                    {title: 'Solo Testo', value: 'testo'},
                    {title: 'immagine e Testo', value: 'immagine_testo'}
                ],
                layout: "dropdown"
            }
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },



    ],

    preview: {
        select: {
            title: 'nome',
        }
    }
}
