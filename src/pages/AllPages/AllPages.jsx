import React from 'react';
import '../../styles/layout.scss';
import FoodCourt from '../../components/FoodCourt/FoodCourt';
import Restaurants from '../../components/Restaurants/Restaurants';
import NearestRestaurants from '../../components/NearestRestaurants/NearestRestaurants';
import Specialities from '../../components/Specialities/Specialities';
import Achievements from '../../components/Achievements/Achievements';
import Map from '../../components/Map/Map';
import Socials from '../../components/Socials/Socials';


const AllPages = () => {
  return (
      <div>
      <main className='content'>
        <FoodCourt />
        <Restaurants />
        <NearestRestaurants />
        <Specialities />
        <Achievements />
        <Map />
        <Socials />
      </main> 
    </div>
  )
}

export default AllPages;