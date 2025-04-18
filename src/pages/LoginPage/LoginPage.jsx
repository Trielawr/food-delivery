import React, { useContext } from 'react';
import '../LoginPage/LoginPage.scss';
import { LoginContext, ROUTES } from '../../assets/utilits';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';

const LoginPage = () => {

    const login = useContext(LoginContext);
    console.log("login",login)
    
  return (
      <div>
          {(!login) ? <NavLink to={ROUTES.home}/> :
              <div className='login'>
                <div className='login-data'>
                  <label htmlFor="">Login</label>
                  <input type="text" />
                </div>
                <div className="login-data">
                    <label>Password</label>
                    <input type="text" /> 
                </div>
                  <Button
                    className='yellow-btn'
                    text='Sign in'
                    type='submit'
                  />
              </div>}
    </div>
  )
}

export default LoginPage;