import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyGoogleMap from './components/map/GoogleMap';
import Navbar from './components/navbar/Navbar';
import CreateNote from './components/notes/CreateNote';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={MyGoogleMap} exact />
          <Route path="/create" component={CreateNote} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;