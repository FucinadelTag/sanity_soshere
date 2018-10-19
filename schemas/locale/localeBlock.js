import supportedLanguages from './supportedLanguages'

export default {
    name: 'localeBlock',
    type: 'object',
    title: 'localeBlock',
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
        type: 'array',
        fieldset: lang.isDefault ? null : 'translations',
        of: [{
                type: 'block',
                styles: [
                    {title: 'Normal', value: 'normal'},
                ],
                marks: {
                        // Only allow these decorators
                        decorators: [
                            {title: 'Strong', value: 'strong'},
                            {title: 'Emphasis', value: 'em'}
                        ],
                        // Support annotating text with a reference to an author
                        // annotations: [
                        //     {name: 'author', title: 'Author', type: 'reference', to: {type: 'author'}}
                        // ]
                }
            }]
    }))
}
