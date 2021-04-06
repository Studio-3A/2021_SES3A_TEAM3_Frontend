import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Auth from "./Components/BackEndLogic/Auth";
//import Account from "./Users/Account";   --- this doesn't exist? Uncomment in merge
import InteractiveMap from "./Components/Common/InteractiveMap/InteractiveMap";
import NavBar from "./Components/NavBar";


//remove the maptest when merging - its just to ensure people know how to kinda use it
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
        <Route exact={true} path="/maptest" render={() => (
          <div className="App">
            <InteractiveMap defaultDataMarkers={[{"latlng": [3.4, 14.3], "popup": "You can put any HTML/CSS element in here."}]} defaultLatLng={[3.4, 14.3]} defaultZoom={5}/>
          </div>
        )} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
