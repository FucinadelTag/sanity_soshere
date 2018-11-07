export default {
    title: 'Traduzione Generica',
    name: 'traduzioneGenerica',
    type: 'object',
    fields: [
        {
            title: 'Testo',
            name: 'testo',
            type: 'localeString',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
        },
    ],
    preview: {
        select: {
            title: 'slug.current',
            name: '_type',

        },
        prepare(selection) {
            const {title, name} = selection
            return {
                title: title + ' (' + name + ')',
            }
        }
    }

}
