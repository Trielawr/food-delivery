import React from 'react';
import '../Map/Map.scss';


const Map = () => {
  return (
    <div className='map'>
      <div className='container'>
        <div className='map-section'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96971.67964845686!2d2.3094420192440874!3d48.89840057670138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1742937840012!5m2!1suk!2sua"
          width="100%" height="600"  allowfullscreen=""
          loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>    
        </div>
      </div>
    </div>
  )
}

export default Map;