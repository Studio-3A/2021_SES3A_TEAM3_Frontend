import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Account from './Components/Users/Account';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import GeneratedTrip from './Components/Home/GeneratedTrip';
// import SavedTrips from './SavedTrips/SavedTrips';

export interface IAppProps {
  show?: boolean;
  onHide?: boolean;
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route
          exact={true}
          path='/'
          render={() => (
            <div className='App'>
              <NavBar />
              <Home />
            </div>
          )}
        />
        <Route 
        exact={true}
          path='/generatedtrip'
          render={() => (
            <div className='generated-trips'>
              <NavBar />
              <GeneratedTrip />
            </div>
            )}
          />
        
        <Route
          exact={true}
          path='/about'
          render={() => (
            <div className='App'>
              <NavBar />
            </div>
          )}
        />
        {/* <Route
          exact={true}
          path='/leaderboard'
          render={() => <About />}
        /> */}
        <Route
          exact={true}
          path='/history'
          render={() => (
            <div className='App'>
              <NavBar />
            </div>
          )}
        />
        <Route
          exact={true}
          path='/saved'
          render={() => (
            <div className='App'>
              <NavBar />
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
          render={() => (
            <div className='App'>
              <NavBar />
            </div>
          )}
        />
        <Route
          exact={true}
          path='/login'
          render={() => (
            <div className='App'>
              <NavBar />
              <Login show={true} />
            </div>
          )}
        />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;