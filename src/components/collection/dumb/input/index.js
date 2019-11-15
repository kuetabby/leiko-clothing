import React from 'react'
import './index.scss'

function Input({ label, handleStateChange, ...restProps }) {
  return (
    <div className="group">
      <input
        {...restProps}
        className="form-input"
        onChange={handleStateChange}
        required
      />
      {label ? (
        <label
          className={`${
            restProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default Input
