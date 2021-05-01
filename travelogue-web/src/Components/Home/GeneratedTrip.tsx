import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import './Trips/Trips.css';
// Component Imports
import MenuCard from './MenuCard';
import Header from './Header';
import { Activities } from './Trips/Activities';
import { Trip } from 'travelogue-utility';
import InteractiveMap from './Trips/InteractiveMap';
import TestTrip from './Trips/testtrip.json';

interface State {
  trip: Trip;
  name: string;
}

// do not do this irl
const a = TestTrip as Trip;

class GeneratedTrip extends React.Component<{}, State> {
  render() {
    return (
      <div className='main'>
        <div className='header-text'>
          <Header name='Gio' />
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
}

export default GeneratedTrip;
