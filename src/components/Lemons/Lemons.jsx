import React from 'react';
import './Lemons.scss';
import EllipseFull from './../../assets/Images/Ellipse11.png';
import EllipseCircle from './../../assets/Images/Ellipse10.png';

const Lemons = () => {
  return (
    <div className='lemons'>
      {/* <div>
          <img src={LemonPic} alt='lemon'></img> 
      </div> */}
      <div className='container'>
        <div className='lemons-item'>
          <div className='lemons-item-ellips'>
            <img className='lemons-item-ellips-full' src={EllipseFull} alt='lemon'/> 
            <img className='lemons-item-ellips-circle' src={EllipseCircle} alt='lemon'/>
            <h2 className='lemons-item-ellips-number'>1</h2>
            <p className='lemons-item-ellips-text'>kitchen</p>
          </div>
          <div className='lemons-item-ellips'>
            <img className='lemons-item-ellips-full' src={EllipseFull} alt='lemon'/> 
            <img className='lemons-item-ellips-circle' src={EllipseCircle} alt='lemon'/>
            <h2 className='lemons-item-ellips-number'><span>11</span></h2>
            <p className='lemons-item-ellips-text'>specialties</p>
          </div>
          <div className='lemons-item-ellips'>
            <img className='lemons-item-ellips-full' src={EllipseFull} alt='lemon'/> 
            <img className='lemons-item-ellips-circle' src={EllipseCircle} alt='lemon'/>
            <h2 className='lemons-item-ellips-number'><span>11</span></h2>
            <p className='lemons-item-ellips-text'>restaurants</p>
          </div>
          <div className='lemons-item-ellips'>
            <img className='lemons-item-ellips-full' src={EllipseFull} alt='lemon'/> 
            <img className='lemons-item-ellips-circle' src={EllipseCircle} alt='lemon'/>
            <h2 className='lemons-item-ellips-number'>1</h2>
            <p className='lemons-item-ellips-text'>transport costs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lemons;