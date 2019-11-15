import React from 'react'
import { useSelector } from 'react-redux'
import './index.scss'

import CollectionPreview from '../collection_preview'
import { collectionsSelectPreview } from 'components/collection/selectors'

function Overview(params) {
  const collections = useSelector(collectionsSelectPreview)
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...other }) => (
        <CollectionPreview key={id} {...other} />
      ))}
    </div>
  )
}

export default Overview
