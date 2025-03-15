import React from 'react';
import mainphoto from './../../assets/Images/Photo-plate.png';
import rucola from './../../assets/Images/rucola-png.png'
import '../FoodCourt/FoodCourt.scss'

const FoodCourt = () => {
  return (
      <div className='foodcourt-container'>
          <div className='foodcourt-section'>
            <h1>Your Food court at home</h1>
            <div className='foodcourt-button-container'>
               <button className='foodcourt-button'><span>Delivery</span>
                Order in</button>
                <button className='foodcourt-button'><span>Takeout</span>Grab and go</button>
            </div>
          </div>
          <div className='foodcourt-picblock'>
            <img className='foodcourt-picblock-pic' src={mainphoto} alt=';' />
            <img className='foodcourt-picblock-rucola' src={rucola} alt='rucola'/>
          </div>
      </div>
  )
}

export default FoodCourt