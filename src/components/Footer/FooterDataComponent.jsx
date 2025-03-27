import React from 'react';
import '../Footer/Footer.scss';

const FooterDataComponent = ({ item }) => {
    console.log('item', item);
  return (
      <div>
          <ul className='footer-nav-list-itemlist'>
              {item.map((subitem, index) => 
                  <li className='footer-nav-list-item-sub' key={index}>
                     {subitem.name} 
               </li>)}
          </ul>
    </div>
  )
}

export default FooterDataComponent;