import React from 'react';
import '../FoodCourt/FoodCourt.scss'

const FoodCourt = () => {
  return (
    <div className='foodcourt'>
      <div className='foodcourt-container container'>
        <div className='foodcourt-section'>
          <h1>Your Food court at home</h1>
          <div className='foodcourt-button-container'>
            <button className='foodcourt-button'><b>Delivery</b>Order in</button>
            <button className='foodcourt-button'><b>Takeout</b>Grab and go</button>
          </div>
        </div>
        <div className='benefits'>
          <div className='benefits-inner'>
            <ul>
              <li>benefits 1</li>
              <li>benefits 2</li>
              <li>benefits 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodCourt