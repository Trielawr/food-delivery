import React from 'react'
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';

const NotFoundPage = () => {
  return (
      <div>
          <p>Не знайшла нічо, звіняй</p>
          <NavLink to={ROUTES.home}>Назад</NavLink>
    </div>
  )
}

export default NotFoundPage;