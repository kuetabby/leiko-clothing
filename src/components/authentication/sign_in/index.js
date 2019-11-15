import React, { useState } from 'react'
import './index.scss'

import Input from '../dumb/input'
import Button from '../dumb/button'

import { auth, signInWithGoogle } from 'utils/firebase'

const initialState = {
  email: '',
  password: ''
}

function SignIn(params) {
  const [{ email, password }, setState] = useState(initialState)

  const handleStateChange = e => {
    const { id, value } = e.target
    setState(prevState => ({ ...prevState, [id]: value }))
  }

  const handleStateClear = () => {
    setState({ ...initialState })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)
      handleStateClear()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email & password</span>
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          label="email"
          value={email}
          handleStateChange={handleStateChange}
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="password"
          value={password}
          handleStateChange={handleStateChange}
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
