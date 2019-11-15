import React from 'react'
import { useSelector } from 'react-redux'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './styles'
import { auth } from 'utils/firebase'

import './styles'

import { ReactComponent as Svg } from 'assets/crown.svg'
import CartItem from 'components/cart/cart_item'
import { DisplayHidden } from '../cart/selectors'
import { selectUser } from 'containers/selectors'

function Header() {
  const user = useSelector(selectUser)
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Svg />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/">HOME</OptionLink>
        <OptionLink to="/shop">Shop</OptionLink>
        {user ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
        <CartItem />
      </OptionsContainer>
      <DisplayHidden />
    </HeaderContainer>
  )
}

export default Header
