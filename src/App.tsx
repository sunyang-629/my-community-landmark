import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyGoogleMap from './components/map/GoogleMap';
import SearchAppBar from './components/navbar/SearchAppBar';
import CreateNote from './components/notes/CreateNote';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NotFound from './components/error/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchAppBar />
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