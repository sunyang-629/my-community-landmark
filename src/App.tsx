import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyGoogleMap from './components/map/GoogleMap';
import Navbar from './components/navbar/Navbar';
import PrimarySearchAppBar from './components/navbar/Navbar-R';
import CreateNote from './components/notes/CreateNote';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NotFound from './components/error/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <PrimarySearchAppBar />
        <Switch>
          <Route path="/" component={MyGoogleMap} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/register" component={SignUp} exact />
          <Route path="/create" component={CreateNote} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;