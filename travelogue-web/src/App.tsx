import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Account from './Components/Users/Account';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/Home/Home';
import SavedTrips from './Components/Home/SavedTrips/SavedTrips';
import Features from './Components/Features/Features';
import TripHistory from './Components/Home/SavedTrips/TripHistory';
import ChatBot from './Components/Common/ChatBot/ChatBot';
// import SavedTrips from './SavedTrips/SavedTrips';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import FriendList from './Components/FriendsList/FriendsList';

import { GetUser } from './Auth/AuthContext';
export interface IAppProps {
    show?: boolean;
    onHide?: boolean;
}

function App() {
    const user = GetUser();
    return (
        <BrowserRouter>
            <React.Fragment>
                <ChatBot/>
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
                            <About />
                        </div>
                    )}
                />
                <Route
                    exact={true}
                    path='/features'
                    render={() => (
                        <div className='App'>
                            <Features />
                        </div>
                    )}
                />
                <Route
                    exact={true}
                    path='/leaderboard'
                    render={() => (
                    <div className='App'>
                        <NavBar />
                        <Leaderboard />
                    </div>
                    )}
                />

                <Route
                    exact={true}
                    path='/friendslist'
                    render={() => (
                    <div className='App'>
                        <NavBar />
                        <FriendList />
                    </div>
                    )}
                />
                <Route
                    exact={true}
                    path='/history'
                    render={() => (
                        <div className='App'>
                            <NavBar />
                            <SavedTrips />
                        </div>
                    )}
                />
                <Route
                    exact={true}
                    path='/tripActivity/:tripId'
                    render={() => (
                        <div className='App'>
                            <NavBar />
                            <TripHistory />
                        </div>
                    )}
                />{/*
                <Route
                    exact={true}
                    path='/saved'
                    render={() => (
                        <div className='App'>
                            <NavBar />
                            <SavedTrips />
                        </div>
                    )}
                /> */}
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
                            {user ? <Redirect to="/home" /> : <Login show={true}/>}
                        </div>
                    )}
                />
            </React.Fragment>
        </BrowserRouter>
    );
}
export default App;
