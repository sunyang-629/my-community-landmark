import React from 'react';
import { compose } from 'redux';
import GoogleMapReact from 'google-map-react';
import { connect, useSelector } from 'react-redux';

import { RootState } from '../../store/reducers/rootReducer';
import { firestoreConnect } from 'react-redux-firebase';

import CurrentIcon from './CurrentIcon';
import NoteIcon from '../notes/NoteIcon';

interface Location {
  lat: number,
  lng: number
}
interface MapSetting {
  center: Location
  zoom: number
}

const MyGoogleMap = ({notes}:any) => {

  const location = useSelector((state: RootState) => state.location);
   // @ts-ignore: Unreachable code error
  const auth = useSelector(state => state.firebase.auth);
  // const notes = useSelector((state: RootState) => state.firestore);
  localStorage.setItem('location', JSON.stringify(location));

  const defaultMapSetting: MapSetting = {
    center: {
      lat: location.lat,
      lng: location.lng
    },
    zoom: 15
  }

  console.log(process.env);

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU' && process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultMapSetting.center}
        defaultZoom={defaultMapSetting.zoom}
        center={location}
      >
        <CurrentIcon lat={location.lat} lng={location.lng} />
        {(notes && auth.uid) && notes.map((note:any) => {
          return <NoteIcon key={note.id} lat={note.location.lat} lng={note.location.lng} text={note.note} author={note.author} />
        })}
      </GoogleMapReact>
    </div>
  )
}

export default compose(
  connect((state: RootState) => {
    console.log('state:',state);
    return ({
      notes: state.firestore.ordered.notes,
  })}),
  firestoreConnect(() => [
    { collection: 'notes'}
  ])
)(MyGoogleMap)
