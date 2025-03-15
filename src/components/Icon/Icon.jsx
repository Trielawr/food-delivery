import React from 'react';
import sprite from './../../assets/sprite.svg';
import './Icon.scss'

const Icons = ({ iconname, width, height }) => {
  return (
    <svg className='icon' width={width} height={height}>
      <use href={`${sprite}#${iconname}`} />
    </svg>
  )
}

export default Icons;
