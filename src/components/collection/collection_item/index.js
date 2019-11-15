import React from 'react'
import { useDispatch } from 'react-redux'
import './index.scss'

import Button from '../dumb/button'
import { addItem } from 'components/cart/actions'

function Item({ item }) {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = item
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted itemButton onClick={() => dispatch(addItem(item))}>
        Add to cart
      </Button>
    </div>
  )
}

export default Item
