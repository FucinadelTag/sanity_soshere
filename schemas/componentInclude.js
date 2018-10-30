export default {
    name: 'componentInclude',
    title: 'Componente da Includere',
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
        }



    ],

    preview: {
        select: {
            title: 'titolo.it'
        }
    }
}
