import React from 'react';
import '../FoodCourt/FoodCourt.scss';
import Icon from '../Icon/Icon';

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
              <li>
                <a href='#'  className='benefits-item'>
                  <Icon iconname="time-eat" width={'48'} height={'48'} />
                  <p style={{width: '182px'}}>delivery in all paris in less than 30 minutes</p>
                </a>
              </li>
              <li>
                <a href='#'  className='benefits-item'>
                  <Icon iconname="delivery" width={'48'} height={'48'} />
                  <p style={{width: '124px'}}>Free delivery from 29 euros</p>
                </a>
              </li>
              <li>
                <a href='#'  className='benefits-item'>
                  <Icon iconname="paris" width={'48'} height={'48'} />
                  <p style={{width: '172px'}}>Only fresh and French products</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodCourt