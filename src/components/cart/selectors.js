import React from 'react'
import { createSelector } from 'reselect'
import { useSelector } from 'react-redux'
import CartDropdown from 'components/cart/cart_dropdown'

const selectQuantity = createSelector(
  state => state.cart.data,
  data => data.reduce((accumulated, item) => accumulated + item.quantity, 0)
)

export const Quantity = () => {
  const total_quantity = useSelector(selectQuantity)
  return <span className="item-count">{total_quantity}</span>
}

export const selectTotal = createSelector(
  state => state.cart.data,
  data =>
    data.reduce(
      (accumulated, item) => accumulated + item.quantity * item.price,
      0
    )
)

export const cartItem = createSelector(
  state => state.cart.data,
  data => data
)

const selectCartHidden = createSelector(
  state => state.cart.hidden,
  hidden => hidden
)

export const DisplayHidden = () => {
  const display = useSelector(selectCartHidden)
  return <> {display ? null : <CartDropdown />} </>
}
