import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import './Home.css';
import './MenuCard';
import {IState } from './Trips/Activities';
import InteractiveMap from './Trips/InteractiveMap';
import TestTrip from './Trips/testtrip.json';


interface State {
    trip: IState;
}


class GeneratedTrip extends React.Component<{}, State> {

        render(){
            return (
                <div>
                    <InteractiveMap />
                    <Activities/>
                </div>
            );
        } 

}

export default GeneratedTrip;