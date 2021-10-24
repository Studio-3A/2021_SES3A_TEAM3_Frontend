import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Account from './Components/Users/Account';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/Home/Home';
import SavedTrips from './Components/Home/SavedTrips/SavedTrips';
import Features from './Components/Features/Features';

import { GetUser } from './Auth/AuthContext';
export interface IAppProps {
    show?: boolean;
    onHide?: boolean;
}

function App() {
    const user = GetUser();
    return (
        <BrowserRouter>
            <div>
                <iframe
                    allow='microphone;'
                    width='350'
                    height='430'
                    src='https://console.dialogflow.com/api-client/demo/embedded/44cd97b1-9772-4c73-a472-204fbe864c8c'
                ></iframe>
            </div>
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
                            <About />
                        </div>
                    )}
                />
                <Route
                    exact={true}
                    path='/features'
                    render={() => (
                        <div className='App'>
                            <NavBar />
                            <Features />
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
                            <SavedTrips />
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
                            {user ? null : <Login show={true} />}
                        </div>
                    )}
                />
            </React.Fragment>
        </BrowserRouter>
    );
}
export default App;
