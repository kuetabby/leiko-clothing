import React from 'react'

import CollectionPreview from 'components/collection/collection_preview'
import Shop_Data from './data'

function Shop(params) {
  const collections = Shop_Data
  return (
    <div>
      {collections.map(({ id, ...other }) => (
        <CollectionPreview key={id} {...other} />
      ))}
    </div>
  )
}

export default Shop
