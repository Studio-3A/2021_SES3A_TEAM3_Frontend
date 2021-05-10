import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Account from './Components/Users/Account';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import InteractiveMap from './Components/Common/InteractiveMap/InteractiveMap';
// import SavedTrips from './SavedTrips/SavedTrips';

export interface IAppProps {
  show?: boolean;
  onHide?: boolean;
}

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
          render={() => <div className='App'>{/* <SavedTrips /> */}</div>}
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
          path='/login'
          render={() => (
            <div className='App'>
              <Login show={true} />
            </div>
          )}
        />
        <Route
          exact={true}
          path='/mapdemo'
          render={() => (
            <div style={{position: 'absolute', paddingLeft: '235px'}}>
              <InteractiveMap defaultLatLng={[-33, 151]} defaultZoom={10} defaultDataMarkers={[{latlng: [-32.84123138501964, 151.36962890625], popup: "Cessnock"}]}/>
            </div>
          )}
        />
      </React.Fragment>
    </BrowserRouter>
  );
}
export default App;