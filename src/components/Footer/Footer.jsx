import React from 'react'
import '../Footer/Footer.scss';
import Icon from '../Icon/Icon';
import { footerData } from '../../data/webdata';
import FooterDataComponent from './FooterDataComponent';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
      <div className='footer-nav'>
        <nav className='footer-nav-logo'>
          <a href="#" >
            <Icon iconname='logo-w' width={184} height={24}/>
          </a>
          <div className='footer-nav-social'>
            <a href="#" className='footer-nav-social-store'>
              <Icon iconname='appstore' width={79} height={27}/>
            </a>
            <a href="#" className='footer-nav-social-google'>
              <Icon iconname='googleplay' width={86} height={27}/>
            </a>    
          </div>
        </nav>
          <nav className='footer-nav-list'>
            <ul>
              {footerData.map((item, index) =>
                <li className='footer-nav-list-itemtitle' key={index}>{item.title}
                  <FooterDataComponent item={ item.item }/>
                </li>)}
            </ul>
        </nav>
      </div>
      <div className='footer-bottom'>
          <div className='footer-bottom-social'>
            <a href="#" >
              <Icon iconname='insta' width={24} height={24}/>
            </a>
            <a href="#" >
              <Icon iconname='twitter' width={24} height={24}/>
            </a>
            <a href="#" >
              <Icon iconname='fb' width={24} height={24}/>
            </a>
          </div>
          <div className='footer-bottom-privacy'>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <p>© 2020 Yellow kitchen</p>
          </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer;