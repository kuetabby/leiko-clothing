import React, { useState } from 'react'
import './index.scss'

import Input from '../dumb/input'
import Button from '../dumb/button'

import { auth, createUserProfileDocument } from 'utils/firebase'

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function SignIn(params) {
  const [
    { displayName, email, password, confirmPassword },
    setState
  ] = useState(initialState)

  const handleStateChange = e => {
    const { id, value } = e.target
    setState(prevState => ({ ...prevState, [id]: value }))
  }

  const handleStateClear = () => {
    setState({ ...initialState })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
      handleStateClear()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="sign-in">
      <h2 className="title">I don't have a account</h2>
      <span>Sign up with your email & password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <Input
          id="displayName"
          name="displayName"
          type="displayName"
          label="displayName"
          value={displayName}
          handleStateChange={handleStateChange}
        />
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
        <Input
          id="confirmPassword"
          name="password"
          type="password"
          label="confirmPassword"
          value={confirmPassword}
          handleStateChange={handleStateChange}
        />
        <div className="buttons">
          <Button type="submit">Sign Up</Button>
          {/* <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </Button> */}
        </div>
      </form>
    </div>
  )
}

export default SignIn
