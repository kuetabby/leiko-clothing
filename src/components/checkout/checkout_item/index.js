import React from 'react'
import { useDispatch } from 'react-redux'
import './index.scss'

import {
  removeItem,
  addQuantity,
  removeQuantity
} from 'components/cart/actions'

function Checkout({ item }) {
  const dispatch = useDispatch()
  const { name, price, quantity, imageUrl } = item
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeQuantity(item))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addQuantity(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => dispatch(removeItem(item))}>
        &#10005;
      </div>
    </div>
  )
}

export default Checkout
