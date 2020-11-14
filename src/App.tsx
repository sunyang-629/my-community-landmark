import React from 'react';
import MyGoogleMap from './components/GoogleMap';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MyGoogleMap />
    </div>
  );
}

export default App;