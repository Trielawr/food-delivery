import React from 'react';
import './Achievements.scss';

const Achievements = () => {
  return (
    <div className='achievements'>
      <div className='container'>
        <ul className='achievements-wrapper'>
          <li className='achievements-ellipse'>
            <div className='achievements-ellipse-circle'>
              <span>1</span>
            </div> 
            <p className='achievements-ellipse-text'>kitchen</p>
          </li>
          <li className='achievements-ellipse'>
            <div className='achievements-ellipse-circle'>
              <span>11</span>
            </div> 
            <p className='achievements-ellipse-text'>specialties</p>
          </li>
          <li className='achievements-ellipse'>
            <div className='achievements-ellipse-circle'>
              <span>11</span>
            </div> 
            <p className='achievements-ellipse-text'>restaurants</p>
          </li>
          <li className='achievements-ellipse'>
            <div className='achievements-ellipse-circle'>
              <span>1</span>
            </div>
            <p className='achievements-ellipse-text'>transport costs</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Achievements;