import '../../../App.css';
import savedIcon from '../../svg/saved-ico.svg';
import './SavedTrips.css';
import React, { Component } from 'react';
import sTrips from './SavedTrips.json';
import LocationIcon from '../../svg/location-ico.svg';
import MoneyIcon from '../../svg/money-ico.svg';
import PeopleIcon from '../../svg/people-ico.svg';
import axios from 'axios';
import Modal from 'react-modal';
import moment from 'moment';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
//import tripBackground from '';

export const SavedTrip = (props) => (
    <div className='saved-activity-card radius-m card-shadow'>
        <div className='saved-activity-card-header'>
            <div className='saved-activity-card-header-bg'>
                <img className='card-header-save_icon' src={savedIcon}></img>
            </div>
        </div>
        <div className='saved-activity-card-body-el'>
        <div className='saved-activity-card-body'>
            <div className='activity-card-body-element'>
                <div className='card-body-icon'>
                    <img className='card-body-icon-img' src={LocationIcon} />
                </div>
                <div className='card-body-location-label'>
                    <h4>
                        <b>{props.trip.startLocation} to {props.trip.endLocation}</b>
                    </h4>
                </div>
            </div>
            <div className='activity-card-body-description'>
     
            </div>
            <div className='activity-card-body-element'>
                <div className='card-body-icon'>
                    <img className='card-body-icon-img' src={MoneyIcon} />
                </div>
                <div className='card-body-price-label'>
                    <b>Dates:</b> {props.trip.startDate} <b>to</b> {props.trip.endDate}
                </div>
            </div>
        
        </div>
        <div className='activity-card-body-view'>
            <Link to={{ 
                pathname: "/tripActivity/" + props.trip._id, 
                }}>
                <button className='btn-secondary btn-shadow-blue'>
                    <b>View</b>
                </button>
            </Link>
        </div>
        </div>
    </div>
);

class SavedTrips extends Component {
    constructor() {
        super();
        this.state = {trips: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/getUserTrips', { withCredentials: true }).then((res) => {
            if(res.data.data){
                this.setState({ trips: res.data.data })
            }
        });
    }

    tripsList() {
        return this.state.trips.map((currentTrip) => {
            return <SavedTrip trip={currentTrip} key={currentTrip._id} />;
        })
    }

    render() {
        
        return (
            <div className='container-s'>
                <div className='saved-header'>
                    <div className='saved-header-icon'>
                        <img
                            className='saved-header-icon-img'
                            src={savedIcon}
                        />
                    </div>
                    <div className='saved-header-title'>
                        <span></span>
                        <b>Trip History</b>
                    </div>
                </div>
                <div className='saved-body'>
                    <div className='saved-body-cards'>{this.tripsList()}</div>
                </div>
            </div>
        );
    }
}
export default SavedTrips;
