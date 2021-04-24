import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import './Trips/Trips.css';
// Component Imports
import MenuCard from './MenuCard';
import Header from './Header';
import { Activities } from './Trips/Activities';
import { Trip } from '../BackEndLogic/APICaller';
import InteractiveMap from './Trips/InteractiveMap';
import TestTrip from './Trips/testtrip.json';
import { useAuth } from '../../firebase/Auth';

interface State {
  trip: Trip;
  name: string;
}

const a: Trip = TestTrip;

const GeneratedTrip: FC = () => {
  const auth = useAuth();

  return (
    <div className='main'>
      <div className='header-text'>
        <Header name={auth.user?.displayName || "Some default display name"} />
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
}

export default GeneratedTrip;
