import React from 'react';
import './Restaurants.scss';
import Slider from "react-slick";
import Icon from '../Icon/Icon'
import styles from './Restaurants.scss';


const Restaurants = () => {
  function NextArrow(props) {
    const { className, style, onClick } = props;

    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
      >
        <Icon className={styles.rotateIcon} iconname="left" width={'24'} height={'24'}/>
      </button>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;

    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
      >
        <Icon iconname="left" width={'24'} height={'24'}/>
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerPadding: '100px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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
                <img src='/img/Restauran_Icons/burger.jpg' alt="" />
              </div>
              <div className='restorans-item-logo'>
                <img src='/img/Restauran_Icons/burger-logo.png' alt="" />
              </div>
            </div>
            <div className='restorans-item'>
              <div className='restorans-item-photo object-fit'>
                <img src='/img/Restauran_Icons/il_paster.jpg' alt="" />
              </div>
              <div className='restorans-item-logo'>
                <img src='/img/Restauran_Icons/il_paster-logo.png' alt="" />
              </div>
            </div>
            <div className='restorans-item'>
              <div className='restorans-item-photo object-fit'>
                <img src='/img/Restauran_Icons/vietnamese.jpg' alt="" />
              </div>
              <div className='restorans-item-logo'>
                <img src='/img/Restauran_Icons/vietnamese-logo.png' alt="" />
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
