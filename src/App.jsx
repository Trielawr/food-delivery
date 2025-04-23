import './App.css';
import { routerData } from './data/webdata';
import { RouterProvider } from 'react-router-dom';
import { LoginContext } from './assets/utilits';
import { useState } from 'react';


function App() {
  
  const [login, setLogin] = useState(false);
  const onLogin = () => {
    setLogin(true);
  }

  return (
    <div className="App">
      <LoginContext.Provider value={{login, onLogin }}>
          <RouterProvider router={routerData }/>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
