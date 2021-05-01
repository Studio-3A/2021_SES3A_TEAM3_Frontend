import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import './Trips/Trips.css';
// Component Imports
import { Activities } from './Trips/Activities';
import { Trip } from 'travelogue-utility';
import MenuCard from './MenuCard/MenuCard';
import Header from './Header/Header';
import InteractiveMap from './Trips/InteractiveMap';
import TestTrip from './Trips/testtrip.json';
import { useAuth } from '../../firebase/Auth';

// do not do this irl
const a: Trip = TestTrip as Trip;

export function FirstName() {
  const auth = useAuth();
  let username = auth.user?.displayName || '';
  let index = username.indexOf(' ');

  return username.substr(0, index);
}

const GeneratedTrip: FC = () => {
  return (
    <div className="main">
      <div className="header-text">
        <Header name={FirstName()} />
      </div>

      <div>
        <MenuCard />
      </div>

      <div>
        <InteractiveMap />
      </div>

      <div>
        <Activities trip={a.trip} />
      </div>
    </div>
  );
};

export default GeneratedTrip;
