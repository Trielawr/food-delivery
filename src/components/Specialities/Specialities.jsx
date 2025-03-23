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
      slidesToShow: 8,
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
          {/* <div className="slider-container"> */}
         <Slider {...settings}>
            <div className='specialities-item'>
              <div>
                <Icon className='specialities-item-icon' iconname="bagel" width={'48'} height={'48'} />
                <p>Bagel</p>
              </div>
            </div>
            <div className='specialities-item'>
                <Icon iconname="burger" width={'48'} height={'48'}/>
                <p>Burger</p>
            </div>
            <div className='specialities-item'>
                <Icon iconname="chicken" width={'48'} height={'48'}/>
                <p>Chicken</p>
            </div>
            <div className='specialities-item'>
                <Icon iconname="fish" width={'48'} height={'48'}/>
                <p>Fish</p>
            </div>
            <div className='specialities-item'>
                <Icon iconname="fishnchips" width={'48'} height={'48'}/>
                <p>Fish’Chips</p>
            </div>
            <div className='specialities-item'>
                <Icon iconname="vegan" width={'48'} height={'48'}/>
                <p>Vegan</p>
            </div>
            <div className='specialities-item'>   
                <Icon iconname="pizza" width={'48'} height={'48'}/>
                <p>Pizza</p>      
            </div>
            <div className='specialities-item'>    
                <Icon iconname="raviolli" width={'48'} height={'48'}/>
                <p>Pasta</p>          
            </div>
          </Slider> 
         {/* </div> */}
      </div>       
      </div>

    </div>
  )
}

export default Specialities;