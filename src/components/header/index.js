import React from 'react'
import { Link } from '@reach/router'
import './index.scss'

import { ReactComponent as Svg } from 'assets/crown.svg'

function Header(params) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Svg className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/">
          HOME
        </Link>
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Header
