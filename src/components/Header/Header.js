import React from 'react';
// import MainLogo from '../Icons/Images/Logo.png';
import MainLogo from '../Icons/svg/logo.svg';
import Icons from '../Icons/Icons';
import '../Header/Header.scss';

const Header = () => {
  return (
    <div className='app-header'>
      <div className='header-container container'>
        <a href="#"><img className='header-logo' src={MainLogo} alt='Mainlogo'/></a>
        <nav className='header-nav'> 
          <div className='header-navblock'>
            <Icons
              iconname="person"
              width={'24'}
              height={'24'}
              textwidth={'51'}
              textheight={'20'}
              text={'Log in'} />
          </div>
          <div className='header-navblock'>
            <Icons iconname="cart" width={'24'} height={'24'} text={'0'}/>
          </div>
          <Icons iconname="Button" width={'24'} height={'24'} />
        </nav>  
      </div>
    </div>
  )
}

export default Header