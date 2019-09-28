import React from 'react'

import './index.scss'

function Item({ id, name, price, imageUrl }) {
  return (
    <div className="collection-item" id={id}>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

export default Item
