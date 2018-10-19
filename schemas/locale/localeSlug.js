import supportedLanguages from './supportedLanguages'

export default {
    name: 'localeSlug',
    type: 'object',
    title: 'localeSlug',
    fieldsets: [
        {
            title: 'Translations',
            name: 'translations',
            options: {collapsible: true}
        }
    ],
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: 'slug',
        options: {
            source: (doc, {parentPath}) => {
                if (doc.titoloGenerico){
                    return(doc.titoloGenerico.titolo[lang.id]);
                }

                return null;

            }
        },
        fieldset: lang.isDefault ? null : 'translations'
    }))
}
