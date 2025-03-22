import React from 'react';
import './NearestRestaurants.scss';
import '../Button/Button.scss';
import Button from '../Button/Button';

const NearestRestaurants = () => {
  return (
    <div className='nearest-bg'>
      <div className='nearest container'>
        <div className='nearest-text'>
          <h1 className='nearest-text-logo'>Your nearest restaurants</h1>
          <p className='nearest-text-item'>Each kitchen works with its own delivery area to deliver food to you as soon as possible</p>
        </div>
        <div className='nearest-adress'>
          <input className='nearest-adress-input' type='adress' placeholder='Enter delivery adress'/>
          <Button
            className='yellow-btn'
            text='sent'
          />
        </div>
      </div>
    </div>
  )
}

export default NearestRestaurants;