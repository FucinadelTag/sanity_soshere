export default {
    name: 'settingsSito',
    title: 'Settings Sito',
    type: 'document',
    fields: [
        {
            name: 'url',
            title: 'Url',
            type: 'url'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'url',
                maxLength: 96
            }
        },
        {
            title: 'Metadata',
            name: 'metadata',
            type: 'metadata',
        },



    ],

    preview: {
        select: {
            //title: 'metadata.title.it',
            title: 'url',
            media: 'logo'
        }
  }
}
