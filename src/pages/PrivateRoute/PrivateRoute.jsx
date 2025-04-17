import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../../assets/utilits';
import { LoginContext } from '../../assets/utilits';

const PrivateRoute = () => {

    const login = useContext(LoginContext);

    if (!login) {
       return <Navigate to={ROUTES.login} replace={true} /> 
    }
    return <Outlet/>
    
}

export default PrivateRoute;