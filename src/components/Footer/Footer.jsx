import React from 'react'
import '../Footer/Footer.scss';
import Icon from '../Icon/Icon';
import  AppleStore  from './../../assets/Images/AppleStore.png';
import  Googleplay  from './../../assets/Images/Googleplay.png';
import { footerData } from '../../data/webdata';
import FooterDataComponent from './FooterDataComponent';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
      <div className='footer-nav'>
        <nav className='footer-nav-logo'>
          <a href="#" >
            <Icon iconname='Logo-w' width={184} height={24}/>
          </a>
        </nav>  
          <div className='footer-nav-social'>
            <a href="#" className='footer-nav-social-store'>
              <img src={AppleStore }  alt='AppleStore'/>
            </a>
            <a href="#" className='footer-nav-social-google'>
              <img src={Googleplay }  alt='Googleplay'/>
            </a>    
          </div>
            <ul className='footer-nav-list'>
              {footerData.map((item, index) =>
                <li className='footer-nav-list-itemtitle' key={index}>{item.title}
                  <FooterDataComponent item={ item.item }/>
                </li>)}
            </ul>
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