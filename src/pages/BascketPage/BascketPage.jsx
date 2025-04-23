import React, { useContext } from 'react';
import { LoginContext, ROUTES } from '../../assets/utilits';
import { NavLink } from 'react-router-dom';
import Bascket from '../../components/Bascket/Bascket';


const BascketPage = () => {
  const {login} = useContext(LoginContext);
  console.log("Bascket login", login);

  return (
    <div>
      {!login ? <NavLink to={ROUTES.login} /> : <Bascket/> }
    </div>
  )
}

export default BascketPage;