import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';

import CurrentIcon from './CurrentIcon';

interface Location {
  lat: number,
  lng: number
}
interface MapSetting {
  center: Location
  zoom: number
}

const MyGoogleMap = () => {

  let location: Location = {
    lat: -27.4703887,
    lng: 153.0249142,
  };

  const defaultMapSetting: MapSetting = {
    center: {
      lat: location.lat,
      lng: location.lng
    },
    zoom: 15
  }

  const newLocation = useSelector((state:RootState) => state.location);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU' }}
        defaultCenter={defaultMapSetting.center}
        defaultZoom={defaultMapSetting.zoom}
        center={newLocation}
      >
        <CurrentIcon lat={newLocation.lat} lng={newLocation.lng} />
      </GoogleMapReact>
    </div>
  )
}

export default MyGoogleMap