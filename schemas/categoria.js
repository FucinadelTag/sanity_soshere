export default {
    name: 'categoria',
    title: 'Categoria',
    type: 'document',
    fields: [
        {
            name: 'titoloGenerico',
            title: 'Titolo e slug',
            type: 'titoloGenerico',
            options: {collapsible: true, collapsed: false}
        },
        {
            title: 'Immagine Principale',
            name: 'immagine',
            type: 'immagine',
            options: {collapsible: true, collapsed: true}
        }



    ],

    preview: {
        select: {
            title: 'titoloGenerico.titolo.it',
            media: 'immagine'
        }
    }
}
