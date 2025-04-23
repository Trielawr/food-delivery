import React, { useContext } from 'react'
import { LoginContext } from '../../assets/utilits';
import { Outlet, Navigate } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';

const PrivateRoute = () => {

    const { login } = useContext(LoginContext);
    console.log('PrivateRoute: login =', login);
    console.log('PrivateRoute: !login =', !login);
   
    if (!login) {
        console.log('PrivateRoute: if!');
        return <Navigate to={ROUTES.login} replace={true} /> 
    }

    console.log('PrivateRoute: else!');
    return <Outlet/>
    
}


export default PrivateRoute;