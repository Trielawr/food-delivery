import React from 'react';
import './Socials.scss';
import Rectangle_1 from './../../assets/Instagram_Icons/Rectangle_1.jpg';
import Rectangle_2 from './../../assets/Instagram_Icons/Rectangle_2.jpg';
import Rectangle_3 from './../../assets/Instagram_Icons/Rectangle_3.jpg';
import Rectangle_4 from './../../assets/Instagram_Icons/Rectangle_4.jpg';

const Socials = () => {
  return (
    <div className='social container'>
      <h3><span>#YellowKitchens </span>in instagram</h3>
        <div className='social-photo'>
          <img src={Rectangle_1} alt='kitchen_1'></img>
          <img src={Rectangle_2} alt='kitchen_2'></img>
          <img src={Rectangle_3} alt='kitchen_3'></img>
          <img src={Rectangle_4} alt='kitchen_4'></img>
        </div>
    </div>
  )
}

export default Socials;