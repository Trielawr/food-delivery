import React from 'react';
import './Lemons.scss';
import LemonPic from './../../assets/Images/lemon.jpg';
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
            <img className='lemons-item-full' src={EllipseFull} alt='lemon'/> 
            <img className='lemons-item-circle' src={EllipseCircle} alt='lemon'/>
          </div>
          <div>
            <img className='lemons-item-full' src={EllipseFull} alt='lemon'/> 
            <img className='lemons-item-circle' src={EllipseCircle} alt='lemon'/>
          </div>
          <div>
            <img className='lemons-item-full' src={EllipseFull} alt='lemon'/> 
            <img className='lemons-item-circle' src={EllipseCircle} alt='lemon'/>
          </div>
          <div>
            <img className='lemons-item-full' src={EllipseFull} alt='lemon'/> 
            <img className='lemons-item-circle' src={EllipseCircle} alt='lemon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lemons;