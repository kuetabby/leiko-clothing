import React from 'react'
import './styles.scss'

function Items(props) {
  return (
    <div className={`${props.size} menu-item`}>
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
    </div>
  )
}

export default Items
