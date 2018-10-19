// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import settingsSito from './settingsSito'
import landing from './landing'
import contenutoRipetibile from './contenutoRipetibile'


import localeString from './locale/localeString'
import localeText from './locale/localeText'
import localeSlug from './locale/localeSlug'
import localeBlock from './locale/localeBlock'

import metadata from './block/metadata'
import titoloGenerico from './block/titoloGenerico'
import testata from './block/testata'
import paragrafo from './block/paragrafo'
import immagine from './block/immagine'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    landing,
    settingsSito,
    contenutoRipetibile,


    localeString,
    localeText,
    localeSlug,
    localeBlock,

    metadata,
    titoloGenerico,
    paragrafo,
    testata,
    immagine
  ])
})
