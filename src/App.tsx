import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyGoogleMap from './components/map/GoogleMap';
import NavBar from './components/navbar/NavBar';
import CreateNote from './components/notes/CreateNote';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/error/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={MyGoogleMap} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/create" component={CreateNote} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;