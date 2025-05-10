import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import '../Map/Map.scss';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 48.863635,
  lng: 2.314826,
};

const markers = [
  {lat: 48.861, lng: 2.316},
  {lat: 48.869, lng: 2.311},
  {lat: 48.865, lng: 2.318}
];

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);

    markers.forEach(marker => {
      bounds.extend(marker);
    });
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);


  return (
    <div className='map'>
      <div className='container'>
        <div className='map-section'>
          {
            isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {
                  markers.map((marker, i) => <Marker key={i} position={marker} />)
                }
              </GoogleMap>
            ) : (
              <></>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Map;