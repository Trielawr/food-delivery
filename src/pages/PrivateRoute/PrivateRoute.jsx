import React, { useContext } from 'react'
import { LoginContext } from '../../assets/utilits';
import { Outlet, Navigate } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';

const PrivateRoute = () => {

    const {login} = useContext(LoginContext);
   
    if (!login) {
       return <Navigate to={ROUTES.login} replace={true} /> 
    }
    return <Outlet/>
    
}


export default PrivateRoute;