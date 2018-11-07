export default {
    name: 'traduzioni',
    title: 'Traduzioni',
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
            title: 'Contenuti',
            name: 'contenuti',
            type: 'array',
            of: [
                    {type: 'traduzioneGenerica'},
            ],
            options: {
                editModal: 'dialog'
            }
        },
    ],

    preview: {
        select: {
            title: 'nome',
        }
    }
}
