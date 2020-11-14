import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyGoogleMap from './components/map/GoogleMap';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={MyGoogleMap} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;