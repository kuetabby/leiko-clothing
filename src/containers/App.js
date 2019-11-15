import React, { lazy, Suspense, useEffect } from 'react'
import { Router } from '@reach/router'
import { useDispatch } from 'react-redux'

import Header from 'components/header'
import { auth, createUserProfileDocument } from 'utils/firebase'

import { setCurrentUser } from './actions'

const HomePage = lazy(() => import('components/home_page'))
const CheckoutPage = lazy(() => import('components/checkout/checkout_page'))
const Authentication = lazy(() => import('components/authentication'))

const Shop = lazy(() => import('components/shop'))
const ShopPage = lazy(() => import('components/shop_page'))
const Category = lazy(() => import('components/collection/collection_page'))

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user)

        userRef.onSnapshot(state =>
          dispatch(
            setCurrentUser({
              id: state.id,
              ...state.data()
            })
          )
        )
      } else {
        dispatch(setCurrentUser(user))
      }
    })
  }, [dispatch])

  return (
    <Suspense fallback={'loading...'}>
      <Header />
      <Router>
        <HomePage exact path="/" />
        <Shop path="shop">
          <ShopPage path="/" />
          <Category path="/:collection_id" />
        </Shop>
        <CheckoutPage exact path="/checkout" />
        <Authentication exact path="/signin" />
      </Router>
    </Suspense>
  )
}

export default App
