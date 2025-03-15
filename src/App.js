import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FoodCourt from './components/FoodCourt/FoodCourt';
import Instagram from './components/Instagram/Instagram';
import Lemons from './components/Lemons/Lemons';
import Map from './components/Map/Map';
import NearestRestaurants from './components/NearestRestaurants/NearestRestaurants';
import Restaurants from './components/Restaurants/Restaurants';
import Specialities from './components/Specialities/Specialities';


function App() {
  return (
    <div className="App">
      <Header />
      <main className='app-main-content'>
      {/* <FoodCourt/>
      <Restaurants/>
      <NearestRestaurants/>
      <Specialities/>
      <Lemons/>
      <Map/>
      <Instagram/> */}
        
      </main>
      <Footer/>
    </div>
  );
}

export default App;
