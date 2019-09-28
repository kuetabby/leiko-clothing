import React, { useState } from 'react'
import './index.scss'

import Input from '../dumb/input'
import Button from '../dumb/button'

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

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email & password</span>
      <form>
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
        <Button type="submit">Submit Form</Button>
      </form>
    </div>
  )
}

export default SignIn
