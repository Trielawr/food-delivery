import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FoodCourt from './components/FoodCourt/FoodCourt';
import Socials from './components/Socials/Socials';
import Achievements from './components/Achievements/Achievements';
import Map from './components/Map/Map';
import NearestRestaurants from './components/NearestRestaurants/NearestRestaurants';
import Restaurants from './components/Restaurants/Restaurants';
import Specialities from './components/Specialities/Specialities';


function App() {
  return (
    <div className="App">
      <Header />
      <main className='app-main-content'>
        <FoodCourt />
        <Restaurants />
        <NearestRestaurants />
        <Specialities />
        <Achievements />
        <Map />
        <Socials /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
