import React from 'react'

import './index.scss'

function CartItemList({ item }) {
  const { name, price, quantity, imageUrl } = item
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItemList
