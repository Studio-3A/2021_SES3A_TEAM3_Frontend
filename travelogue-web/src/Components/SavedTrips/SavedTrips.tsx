// TODO:
//   -  Create saved trips page

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Trips from './Trips';
import './SavedTrips.css';
import SavedTrip  from "../../Components/savedtrips.json";
// Images
import SavedTripsIcon from "../../Images/saved-trips-heart1.svg";
import firebase from '../../firebase/firebase';
import { isNullOrUndefined } from 'node:util';
interface IState {
    userId: string;
}

class SavedTrips extends React.Component<{}, IState> {
    
    constructor(props: {}) {
        super(props);

        this.state = {
            userId: ''

        };
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				this.setState({ userId: String(user?.uid)});
			} 
            else{
                this.setState({ userId:'1'});
            }
		});
    }
    render() {
        let testing = SavedTrip.users.find(user => user.id === this.state.userId);
        let savedTrips = testing?.savedtrips.map(trip => {
            return (<div> <Trips  key={trip.trip_id} /></div>)
        });
        
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
                    <div >{savedTrips}</div>
                </div>
            </BrowserRouter >
        );
    }
}
export default SavedTrips;