import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import './Home.css';
import './MenuCard';
import {Activities, IState } from './Trips/Activities';
import InteractiveMap from './Trips/InteractiveMap';
import TestTrip from './Trips/testtrip.json';


interface State {
    trip: IState;
}

const a: IState = TestTrip;

class GeneratedTrip extends React.Component<{}, State> {
    
        render(){
            return (
                <div>
                    <InteractiveMap />
                    <Activities trip={a.trip}/>
                </div>
            );
        } 

}

export default GeneratedTrip;