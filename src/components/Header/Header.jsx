import React from 'react';
import MainLogo from './../../assets/svg/logo.svg';
import Icon from '../Icon/Icon';
import '../Header/Header.scss';

const Header = () => {
  return (
    <div className='app-header'>
      <div className='header-container container'>
        <a href="#" className='header-logo'><img src={MainLogo} alt='Mainlogo'/></a>
        <nav className='header-nav'>
          <a href="#" className='header-nav-item'>
            <Icon 
              iconname="person"
              width={'24'}
              height={'24'}/>
              <span>Log in</span>
          </a>
          <a href="#" className='header-nav-item'>
            <Icon iconname="cart" width={'24'} height={'24'}/>
            <span>0</span>
          </a>
          <button type='button' className='header-menu-btn'></button>
        </nav>
      </div>
    </div>
  )
}

export default Header;
