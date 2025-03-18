import React from 'react';
import './Restaurants.scss';
import Slider from "react-slick";

const Restaurants = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerPadding: '100px'
};

  return (
    <div className='restorans'>
      <div className='container'>
        <div className='restorans-header'>
          <h2>Restaurants</h2>
          <button className='show-all-btn' type='button'>show all</button>
        </div>
        <div className='restorans-body'>
          <Slider {...settings}>
            <div className='restorans-item'>
              <div className='restorans-item-photo object-fit'>
                <img src='/img/Restauran_Icons/Believe.jpg' alt="" />
              </div>
              <div className='restorans-item-logo'>
                <img src='/img/Restauran_Icons/Believe-logo.png' alt="" />
              </div>
            </div>
            <div className='restorans-item'>
              <div className='restorans-item-photo object-fit'>
                <img src='/img/Restauran_Icons/Believe.jpg' alt="" />
              </div>
              <div className='restorans-item-logo'>
                <img src='/img/Restauran_Icons/Believe-logo.png' alt="" />
              </div>
            </div>
            <div className='restorans-item'>
              <div className='restorans-item-photo object-fit'>
                <img src='/img/Restauran_Icons/Believe.jpg' alt="" />
              </div>
              <div className='restorans-item-logo'>
                <img src='/img/Restauran_Icons/Believe-logo.png' alt="" />
              </div>
            </div>
            <div className='restorans-item'>
              <div className='restorans-item-photo object-fit'>
                <img src='/img/Restauran_Icons/Believe.jpg' alt="" />
              </div>
              <div className='restorans-item-logo'>
                <img src='/img/Restauran_Icons/Believe-logo.png' alt="" />
              </div>
            </div>
            <div className='restorans-item'>
              <div className='restorans-item-photo object-fit'>
                <img src='/img/Restauran_Icons/Believe.jpg' alt="" />
              </div>
              <div className='restorans-item-logo'>
                <img src='/img/Restauran_Icons/Believe-logo.png' alt="" />
              </div>
            </div>
          </Slider>  
        </div>
      </div>
    </div>
  )
}

export default Restaurants;