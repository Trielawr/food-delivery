import './App.css';
import { routerData } from './data/webdata';
import { RouterProvider } from 'react-router-dom';
import { LoginContext } from './assets/utilits';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoginContext.Provider value= "false">
          <RouterProvider router={routerData }/>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
