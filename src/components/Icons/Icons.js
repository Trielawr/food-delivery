import React from 'react';
import sprite from './../../assets/sprite.svg';
import '../Icons/Icons.scss'

const Icons = ({ iconname, width, height }) => {
  return (
    <div className='icons'>
      <svg width={width} height={height}>
        <use href={`${sprite}#${iconname}`} />
      </svg>
    </div>
  )
}

export default Icons