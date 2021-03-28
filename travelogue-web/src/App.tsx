import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Auth from "./Components/BackEndLogic/Auth";
import Account from "./Users/Account";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar/>
        <Route exact={true} path="/" render={() => (
          <div className="App">
          </div>
        )} />
        <Route exact={true} path="/about" render={() => (
          <div className="App">
          </div>
        )} />
        <Route exact={true} path="/features" render={() => (
          <div className="App">
          </div>
        )} />
        <Route exact={true} path="/account" render={() => (
          <div className="App">
            <Account/>
          </div>
        )} />
        <Route exact={true} path="/login" render={() => (
          <div className="App">
            <Auth>
              <p>a</p>
              <p>b</p>
            </Auth>
          </div>
        )} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
