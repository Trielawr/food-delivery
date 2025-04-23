import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { LoginContext } from '../../assets/utilits';

const Layout = () => {

  const login = useContext(LoginContext);
  
  return (
    <div>
      <header>
        <Header />
      </header>  
        <main>
          <Outlet/>
        </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout;