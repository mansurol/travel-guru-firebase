import React, { createContext, useState } from 'react';
import NoMatch from './components/NoMatch/NoMatch'
import './App.css';
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Banner from './components/Banner/Banner';
import Booking from './components/Booking/Booking';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignUp from './components/SignUp/SignUp';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Banner/>
            </Route>
            <Route path="/booking/:bookingId">
              <Booking/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <PrivateRoute path="/destination">
              <Destination/>
            </PrivateRoute>
            <Route exact path="/">
              <Banner/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Router>
        </UserContext.Provider>
  );
}

export default App;
