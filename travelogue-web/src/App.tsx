import React from 'react';
import { BrowserRouter, Switch, Route, withRouter  } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import FrontPage from "./components/frontPage";

import Auth from './components/BackEndLogic/Auth';
import NavBar from './components/NavBar/NavBar';
import LandingNav from './components/NavBar/LandingNav';
import Account from './components/Users/Account'; 
import Login from './components/Login/Login';
import About from './components/About/About';

// import SavedTrips from './SavedTrips/SavedTrips';

export interface IAppProps {
  show?: boolean;
  onHide?: boolean;
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
        <Route exact path='/'>
            <FrontPage />
        </Route>
        <Route
          exact={true}
          path='/about'
          
          render={() => <div className='App'></div>}
        />
        {/* <Route
          exact={true}
          path='/leaderboard'
          render={() => <About />}
        /> */}
        <Route
          exact={true}
          path='/history'
          render={() => <div className='App'></div>}
        />
        <Route
          exact={true}
          path='/saved'
          render={() => (
            <div className='App'>
              {/* <SavedTrips /> */}
            </div>
          )}
        />
        <Route
          exact={true}
          path='/account'
          render={() => (
            <div className='App'>
              <NavBar />
              <Account />
            </div>
          )}
        />
        <Route
          exact={true}
          path='/settings'
          render={() => <div className='App'></div>}
        />
        <Route
          exact={true}
          path='/logout'
          render={() => <div className='App'></div>}
        />
        <Route
          exact={true}
          path='/login'
          render={() => (
            <div className='App'>
              <Login show={true}/>
            </div>
          )}
        />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
