import React from 'react';
import MainLogo from './../../assets/svg/logo.svg';
import Icon from '../Icon/Icon';
import '../Header/Header.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';

const Header = () => {
  return (
    <div className='app-header'>
      <div className='container'>
        <div className='header-container'> 
          <NavLink to={ROUTES.home} className='header-logo'>
            <img src={MainLogo} alt='Mainlogo' />
          </NavLink>
        <nav className='header-nav'>
          <NavLink to={ROUTES.login} className='header-nav-item'>
            <Icon 
              iconname="person"
              width={'24'}
                height={'24'} />
              <span>Log in</span>
          </NavLink>
          <NavLink to={ROUTES.bascket} className='header-nav-item'>
            <Icon iconname="cart" width={'24'} height={'24'}/>
            <span>0</span>
          </NavLink>
          <button type='button' className='header-menu-btn'></button>
        </nav>
        </div>
      </div>
    </div>
  )
}

export default Header;
