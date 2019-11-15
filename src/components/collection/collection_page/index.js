import React from 'react'
import { useSelector } from 'react-redux'

import CollectionItem from 'components/collection/collection_item'
import { collectionsSelect } from 'components/collection/selectors'

import './index.scss'

function Page({ collection_id }) {
  const state = useSelector(collectionsSelect(collection_id))
  const { title, items } = state
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={items.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Page
