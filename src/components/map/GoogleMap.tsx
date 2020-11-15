import React,{useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import { getCurrentLocation } from '../../store/actions/locationAction';


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

  const location = useSelector((state: RootState) => state.location);
  const notes = useSelector((state: RootState) => state.note);
  console.log('notes in map:', notes);
  localStorage.setItem('location', JSON.stringify(location));

  const defaultMapSetting: MapSetting = {
    center: {
      lat: location.lat,
      lng: location.lng
    },
    zoom: 15
  }

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU' }}
        defaultCenter={defaultMapSetting.center}
        defaultZoom={defaultMapSetting.zoom}
        center={location}
      >
        <CurrentIcon lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  )
}

export default MyGoogleMap