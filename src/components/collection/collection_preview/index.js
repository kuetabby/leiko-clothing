import React from 'react'
import './index.scss'

import Item from 'components/collection/collection_item'

function Preview({ title, items }) {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

export default Preview
