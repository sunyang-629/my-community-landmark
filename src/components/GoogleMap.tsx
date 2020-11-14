import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

interface MapSetting {
  center: {
    lat: number,
    lng: number
  },
  zoom: number
}

const GoogleMap = () => {

  const defualMapSetting:MapSetting = {
    center: {
      lat: -27.4703887,
      lng: 153.0249142,
    },
    zoom: 15
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU' }}
        defaultCenter={defualMapSetting.center}
        defaultZoom={defualMapSetting.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap

