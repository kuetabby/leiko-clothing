import React from 'react'
import { useSelector } from 'react-redux'
import './index.scss'

import { selectTotal, cartItem } from 'components/cart/selectors'

import CheckoutItem from '../checkout_item'
import StripePayment from 'components/stripe'

function Checkout(params) {
  const total_price = useSelector(selectTotal)
  const total_item = useSelector(cartItem)
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {total_item.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>Total ${total_price}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripePayment price={total_price} />
    </div>
  )
}

export default Checkout
