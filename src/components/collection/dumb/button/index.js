import React from 'react'
import { CustomButton } from './styles'

function Button({ children, ...other }) {
  return <CustomButton {...other}>{children}</CustomButton>
}

export default Button
