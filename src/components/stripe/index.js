import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100
  const publishKey = `${process.env.REACT_APP_STRIPE_API_KEY}`

  const token = () => {
    alert('payment success')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Leiko Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={token}
      stripeKey={publishKey}
    />
  )
}

export default StripeCheckoutButton
