import React from 'react'
import '../Footer/Footer.scss';
import Icon from '../Icon/Icon';
import  AppleStore  from './../../assets/Images/AppleStore.png';
import  Googleplay  from './../../assets/Images/Googleplay.png';
import { footerData } from '../../data/webdata';
import FooterDataComponent from './FooterDataComponent';
import Button from '../Button/Button';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
      <div className='footer-nav'>
         <nav className='footer-nav-logo'>
           <div className='footer-nav-logo-icon'> 
             <a href="#" style={{width: '184px'}} >
               <Icon iconname='Logo-w' width={184} height={24}/>
             </a>
           </div>
         </nav>  
          <div className='footer-nav-apps'>
            <a href='http://appstore.com/appstore' className='footer-nav-social-store'>
              <img src={AppleStore }  alt='AppleStore'/>
            </a>
            <a href="https://play.google.com/store/apps?hl=en-us" className='footer-nav-social-google'>
              <img src={Googleplay }  alt='Googleplay'/>
            </a>    
          </div>
            <ul className='footer-nav-list'>
              {footerData.map((item, index) =>
                <li key={index}>
                  <h5 className='footer-nav-list-itemstitle'>{item.title}</h5>
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
          <ul className='footer-bottom-privacy'>
            <li>
              <Button
                  type='link'
                  text='Privacy Policy'
                  href="#"
              />
            </li>
            <li>
              <Button
                  type='link'
                  text='Terms'
                  href="#"
              />
            </li>
            <li>
              <p>© 2020 Yellow kitchen</p>
            </li>
          </ul>
      </div>
      </div>
    </footer>
  )
}

export default Footer;