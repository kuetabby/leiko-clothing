import React from 'react'
import { Link } from '@reach/router'
import './styles.scss'

function Items(props) {
  return (
    <Link className={`${props.size} menu-item`} to={props.link}>
      <div
        style={{
          backgroundImage: `url(${props.image})`
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{props.title}</h1>
        <p className="subtitle">Shop Now!</p>
      </div>
    </Link>
  )
}

export default Items
