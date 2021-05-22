import React, { FC, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import './Trips/Trips.css';
import Swal from 'sweetalert2';

// Component Imports
import MenuCard from './MenuCard/MenuCard';
import Header from './Header/Header';
import { Activities } from './Trips/Activities';
import {
  isErrorResponse,
  Trip,
  TripGenerationInputs,
} from 'travelogue-utility';
import InteractiveMap from './Trips/InteractiveMap';
import TestTrip from './Trips/testtrip.json';
import { useAuth } from '../../firebase/Auth';
import { generateTrip } from '../BackEndLogic/APICaller';

// do not do this irl
const a = TestTrip as Trip;

export function FirstName() {
  const auth = useAuth();
  let username = auth.user?.displayName || '';
  let index = username.indexOf(' ');

  return username.substr(0, index);
}

const GeneratedTrip: FC = () => {
  const [trip, setTrip] = useState<Trip | undefined>(undefined);

  useEffect(() => {
    async function passTripInputs() {
      const tripString = localStorage.getItem('trip');
      if (tripString != null) {
        const tripInputs = JSON.parse(tripString) as TripGenerationInputs;
        const trip = await generateTrip(tripInputs);
        if (isErrorResponse(trip)) {
          Swal.fire({
            title: 'Error',
            text: 'Trip Generation Failed',
            icon: 'warning',
          });
        } else {
          localStorage.removeItem('trip');
          setTrip(trip);
        }
      }
    }
    passTripInputs();
  });

  return (
    <div className='main'>
      <div className='header-text'>
        <Header name={FirstName()} />
      </div>

      <div className='menu'>
        <MenuCard />
      </div>
      {trip != null && (
        <>
          <div>
            <InteractiveMap />
          </div>

          <div>
            <Activities trip={trip} />
          </div>
        </>
      )}
    </div>
  );
};

export default GeneratedTrip;
