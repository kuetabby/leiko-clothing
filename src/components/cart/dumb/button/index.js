import React from 'react'
import './index.scss'

function Button({ children, ...other }) {
  return (
    <button className="custom-button" {...other}>
      {children}
    </button>
  )
}

export default Button
