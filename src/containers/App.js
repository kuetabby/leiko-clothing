import React, { lazy, Suspense } from 'react'
import { Router } from '@reach/router'

import Header from 'components/header'

const HomePage = lazy(() => import('components/home_page'))
const ShopPage = lazy(() => import('components/shop'))
const SignIn = lazy(() => import('components/authentication/sign_in'))

function App() {
  return (
    <Suspense fallback={'loading...'}>
      <Header />
      <Router>
        <HomePage exact path="/" />
        <ShopPage exact path="/shop" />
        <SignIn excact path="/signin" />
      </Router>
    </Suspense>
  )
}

export default App
