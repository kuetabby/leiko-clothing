import React from 'react'
import { Redirect } from '@reach/router'
import { useSelector } from 'react-redux'

import './index.scss'

import SignIn from './sign_in'
import SignUp from './sign_up'

function Authentication(params) {
  const currentUser = useSelector(state => state.user.data)

  if (currentUser) {
    return <Redirect to="/" noThrow />
  }

  return (
    <div className="authentication">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication
