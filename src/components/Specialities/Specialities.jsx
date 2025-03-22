import React from 'react';
import './Specialities.scss';
import '../Button/Button.scss';
import Slider from "react-slick";
import Icon from '../Icon/Icon';
import Button from '../Button/Button';


const Specialities = () => {

    function NextArrow(props) {
    const { className, onClick } = props;

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

  function PrevArrow(props) {
    const { className, onClick } = props;

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
  }



  return (
    <div className='specialities'>
      <div className='container'>
       <div className='specialities-header'>
        <h2>Specialities</h2>
        <Button
          className='gray-btn'
          text='show all'
        />
      </div>
      <div className='specialities-body'>
         <Slider {...settings}>
            <div className='slider-item'>
              <div className='slider-item-photo object-fit'>
                <Icon iconname="bagel" width={'48'} height={'48'}/>
              </div>
              <div className='slider-item-logo'>
                <img src='/img/Restauran_Icons/Believe-logo.png' alt="" />
              </div>
            </div>
            <div className='slider-item'>
              <div className='slider-item-photo object-fit'>
                <Icon iconname="burger" width={'48'} height={'48'}/>
              </div>
              <div className='slider-item-logo'>
                <img src='/img/Restauran_Icons/burger-logo.png' alt="" />
              </div>
            </div>
            <div className='slider-item'>
              <div className='slider-item-photo object-fit'>
                <Icon iconname="chicken" width={'48'} height={'48'}/>
              </div>
              <div className='slider-item-logo'>
                <img src='/img/Restauran_Icons/il_paster-logo.png' alt="" />
              </div>
            </div>
            <div className='slider-item'>
              <div className='slider-item-photo object-fit'>
                <Icon iconname="fish" width={'48'} height={'48'}/>
              </div>
              <div className='slider-item-logo'>
                <img src='/img/Restauran_Icons/vietnamese-logo.png' alt="" />
              </div>
            </div>
            <div className='slider-item'>
              <div className='slider-item-photo object-fit'>
                <Icon iconname="fishnchips" width={'48'} height={'48'}/>
              </div>
              <div className='slider-item-logo'>
                <img src='/img/Restauran_Icons/Believe-logo.png' alt="" />
              </div>
            </div>
            <div className='slider-item'>
              <div className='slider-item-photo object-fit'>
                <Icon iconname="vegan" width={'48'} height={'48'}/>
              </div>
              <div className='slider-item-logo'>
                <img src='/img/Restauran_Icons/Believe-logo.png' alt="" />
              </div>
            </div>
            <div className='slider-item'>
              <div className='slider-item-photo object-fit'>
                <Icon iconname="pizza" width={'48'} height={'48'}/>
              </div>
              <div className='slider-item-logo'>
                <img src='/img/Restauran_Icons/Believe-logo.png' alt="" />
              </div>
            </div>
            <div className='slider-item'>
              <div className='slider-item-photo object-fit'>
                <Icon iconname="raviolli" width={'48'} height={'48'}/>
              </div>
              <div className='slider-item-logo'>
                <img src='/img/Restauran_Icons/Believe-logo.png' alt="" />
              </div>
            </div>
          </Slider> 
      </div>       
      </div>

    </div>
  )
}

export default Specialities;