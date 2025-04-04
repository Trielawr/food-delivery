import React from 'react';
import '../Footer/Footer.scss';
import Button from '../Button/Button';

const FooterDataComponent = ({ item }) => {

  return (
      <>
          <ul className='footer-nav-list-itemlist'>
              {item.map((subitem, index) => 
                  <li key={index}>
                      <h5>
                        <Button
                            className='footer-nav-list-subitem'
                            type='link'
                            text={subitem.name}
                            href={subitem.to} //не впевнена що лінк коректно додався
                        />    
                      </h5>
               </li>)}
          </ul>
    </>
  )
}

export default FooterDataComponent;