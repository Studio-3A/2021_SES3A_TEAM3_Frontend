import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import './Trips/Trips.css'
// Component Imports
import MenuCard from './MenuCard';
import Header from './Header'
import {Activities, IState } from './Trips/Activities';
import InteractiveMap from './Trips/InteractiveMap';
import TestTrip from './Trips/testtrip.json';

interface State {
    trip: IState,
    name: string
}

const a: IState = TestTrip;

class GeneratedTrip extends React.Component<{}, State> {
        render(){
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