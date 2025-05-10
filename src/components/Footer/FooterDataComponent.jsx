import React from 'react';
import '../Footer/Footer.scss';
import Button from '../Button/Button';

const FooterDataComponent = ({ item }) => {

  return (
    <>
      <ul className='footer-nav-list-itemlist'>
        {item.map((subitem, index) => 
          <li key={index}>
            {
              subitem.type === 'link'
              ? <Button
                  className='footer-nav-list-subitem'
                  type='link'
                  text={subitem.name}
                  href={subitem.to} //не впевнена що лінк коректно додався
              />
            : <span>{subitem.name}</span>
          }
        </li>)}
      </ul>
    </>
  )
}

export default FooterDataComponent;