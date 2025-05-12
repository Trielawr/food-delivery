// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
import '../Footer/Footer.scss';
import Button from '../Button/Button';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import 'bootstrap';


const FooterDataComponent = ({ item }) => {

  function onSwitch(subitem){
    console.log("FooterDataComponent subitem - ", subitem);
    switch (subitem.type) {
      case 'link':
        return (
          <Button
          className='footer-nav-list-subitem'
          type='link'
          text={subitem.name}
          href={subitem.to}/>
        );
      case 'dropdown':
        return (
          <DropdownButton id="dropdown-basic-button" title={subitem.name}>
            <Dropdown.Item href="#/action-1">UA</Dropdown.Item>
            <Dropdown.Item href="#/action-2">EN</Dropdown.Item>
            <Dropdown.Item href="#/action-3">FR</Dropdown.Item>
          </DropdownButton>
        );
      case 'text':
       return <span>{subitem.name}</span>;
    }
  }
  
  return (
    <>
      <ul className='footer-nav-list-itemlist'>
        {item.map((subitem, index) => 
          <li key={index}>{ onSwitch(subitem) }
        </li>)}
      </ul>
    </>
  )
}

export default FooterDataComponent;