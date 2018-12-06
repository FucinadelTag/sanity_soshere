export default {
    title: 'Testata',
    name: 'testata',
    type: 'object',
    fields: [
        {
            title: 'Prima Riga',
            name: 'riga1',
            type: 'localeString',
        },
        {
            title: 'Seconda Riga',
            name: 'riga2',
            type: 'localeString',
        },
        {
            title: 'Immagine di Testata',
            name: 'immagine',
            type: 'immagine',
        },
        {
            title: 'Stile testata',
            name: 'stileTestata',
            type: 'string',
            options: {
                list: [
                    {title: 'Nero', value: 'nero'},
                    {title: 'Bianco', value: 'bianco'},
                    {title: 'Sfondo', value: 'sfondo'}
                ],
                layout: "dropdown"
            }
        },
    ],
    preview: {
        select: {
            title: 'riga1.it',
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
