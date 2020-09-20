import React from 'react'
import 'tachyons'
import './button.scss'

const Button = ({ name, url, uid }) => {
  return (
    <a
      href={`https://aqicn.org/city/${url}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="b--none bg-light-gray btn fw7 ph3 pv3 tl w-100"
        id={uid}
      >
        {name}
      </button>
    </a>
  )
}

export default Button
