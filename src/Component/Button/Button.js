import React from 'react';
import 'tachyons';
import './button.scss';

const Button = ({ name, uid, handleClick }) => {
  return (
    <button
      className="b--none bg-light-gray btn fw7 ph3 pv3 tl w-100 white"
      id={uid}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
