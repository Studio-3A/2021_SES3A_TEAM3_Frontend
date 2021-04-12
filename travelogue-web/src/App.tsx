import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Auth from './Components/BackEndLogic/Auth';
import NavBar from './Components/NavBar/NavBar';
import Account from './Components/Users/Account';
// import SavedTrips from './SavedTrips/SavedTrips';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <Route
          exact={true}
          path='/'
          render={() => <div className='App'></div>}
        />
        <Route
          exact={true}
          path='/about'
          render={() => <div className='App'></div>}
        />
        <Route
          exact={true}
          path='/leaderboard'
          render={() => <div className='App'></div>}
        />
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
            <div>
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
              <Auth>
                <p>a</p>
                <p>b</p>
              </Auth>
            </div>
          )}
        />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;