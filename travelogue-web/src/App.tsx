import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Account from './Components/Users/Account';
import Login from './Components/Login/Login';
//import About from './Components/About/About';
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/Home/Home';
import { getUser } from './Auth/AuthContext';
export interface IAppProps {
  show?: boolean;
  onHide?: boolean;
}

function App() {
  const user = getUser();
  return (
    <BrowserRouter>
      <React.Fragment>
          <Route
            exact={true}
            path='/'
            render={() => (
              <div className='App'>
                <LandingPage />
              </div>
            )}
          />
          <Route
            exact={true}
            path='/home'
            render={() => (
              <div className='App'>
                <NavBar />
                <HomePage />
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
                <LandingPage />
                {
                  user ? null :  ( < Login show={true} />)
                    
                }
               
              </div>
            )}
          />
      </React.Fragment>
    </BrowserRouter>
  );
}
export default App;