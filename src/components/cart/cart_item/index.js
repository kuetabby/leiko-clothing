import React from 'react'
import './index.scss'

import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg'

import { useDispatch } from 'react-redux'
import { toggleCart } from '../actions'
import { Quantity } from '../selectors'

function CartItem(params) {
  const dispatch = useDispatch()

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon className="shopping-icon" />
      <Quantity />
    </div>
  )
}

export default CartItem
