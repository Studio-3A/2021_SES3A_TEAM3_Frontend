// TODO:
//   -  Create saved trips page

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Trips from './Trips';
import './SavedTrips.css';

// Images
import SavedTripsIcon from "../../Images/saved-trips-heart1.svg";

interface State {
}

// TODO:
class SavedTrips extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div className="SavedTrips">

                    {/*Title*/}
                    <div className="st-title-div">
                        <div className="st-padding-right-20px">
                            <img src={SavedTripsIcon} className="st-icon" alt="savedTripsIcon" />
                        </div>
                        <div>
                            <h3 className="st-title-text">Saved Trips</h3>
                        </div>
                    </div>

                    {/*Main body*/}
                    <Trips/>
                </div>
            </BrowserRouter >
        );
    }
}
export default SavedTrips;