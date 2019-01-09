export default {
    title: 'Titolo Generico',
    name: 'titoloGenerico',
    type: 'object',
    validation: Rule => Rule.required(),
    fields: [
        {
            title: 'Titolo',
            name: 'titolo',
            type: 'localeString',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'localeSlug',
        },
    ]
}
