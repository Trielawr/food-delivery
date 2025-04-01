import React from 'react';
import './Achievements.scss';

const Achievements = () => {
  return (
    <div className='achievements'>
      <div className='container'>
        <div className='achievements-item'>
          <div className='achievements-item-ellipse'>
            <div className='achievements-item-ellipse-circle'>
              <span>1</span>
            </div> 
            <p className='achievements-item-ellipse-text'>kitchen</p>
          </div>
          <div className='achievements-item-ellipse'>
            <div className='achievements-item-ellipse-circle'>
              <span>11</span>
            </div> 
            <p className='achievements-item-ellipse-text'>specialties</p>
          </div>
          <div className='achievements-item-ellipse'>
            <div className='achievements-item-ellipse-circle'>
              <span>11</span>
            </div> 
            <p className='achievements-item-ellipse-text'>restaurants</p>
          </div>
          <div className='achievements-item-ellipse'>
            <div className='achievements-item-ellipse-circle'>
              <span>1</span>
            </div>
            <p className='achievements-item-ellipse-text'>transport costs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements;