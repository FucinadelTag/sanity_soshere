export default {
    name: 'componentInclude',
    title: 'Componente da Includere',
    type: 'document',
    fields: [
        {
            name: 'titolo',
            title: 'Titolo',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'titolo'
            },
        }



    ],

    preview: {
        select: {
            title: 'titolo'
        }
    }
}
