import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { navigate } from '@reach/router'
import './index.scss'

import { toggleCart } from '../actions'
import CartItemList from '../cart_item_list'
import Button from '../dumb/button'

function CartDropdown(props) {
  const cartItems = useSelector(state => state.cart.data)
  const dispatch = useDispatch()
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItemList key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          navigate('/checkout')
          dispatch(toggleCart())
        }}
      >
        Go To Checkout
      </Button>
    </div>
  )
}

export default CartDropdown
