import React from 'react';
import sprite from '../Icons/sprite.svg';
import '../Icons/Icons.scss'

const Icons = ({ iconname, width, height, text, textwidth, textheight }) => {
  
  console.log('textwidth', textwidth);
  return (
      <div className='icons'>
          <svg width={width} height={height}>
              <use href={`${sprite}#${iconname}`} />
         </svg>
         <p className='icons-text' width={textwidth} height={textheight}>{text}</p>
    </div>
  )
}

export default Icons