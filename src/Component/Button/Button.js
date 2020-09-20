import React from 'react'
import 'tachyons'
import './button.scss'

const Button = ({ name }) => {
  return (
    <button className="b--none bg-light-gray btn ph3 pv3 tl w-100">
      {name}
    </button>
  )
}

export default Button
