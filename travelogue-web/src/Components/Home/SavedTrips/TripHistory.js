import '../../../App.css';
import savedIcon from '../../svg/saved-ico.svg';
import './SavedTrips.css';
import React, { Component } from 'react';
import sTrips from './SavedTrips.json';
import LocationIcon from '../../svg/location-ico.svg';
import MoneyIcon from '../../svg/money-ico.svg';
import PeopleIcon from '../../svg/people-ico.svg';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import locationBlue from '../../svg/location-blu.svg';
import locationBlueLarge from '../../svg/location-blulrg.svg';
//import tripBackground from '';


function getTripActivities(id) {
    const body = {
        savedTripID: id,
    }
    axios.post('http://localhost:5000/api/getUserVenuesTrip', body).then((res) => {
        if(res){
            return res;
        }
    });
}

export const SavedActivity = (props) => (
    <div className='saved-activity-card radius-m card-shadow'>
        <div className='saved-activity-card-header'>
            <div className='saved-activity-card-header-bg'>
                <img className='card-header-save_icon' src={locationBlue}></img>
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
                        <b>{props.trip.venueName}</b>
                    </h4>
                </div>
            </div>
            <div className='activity-card-body-description'>
     
            </div>
            <div className='activity-card-body-element'>
                <div className='card-body-icon'>
                </div>
                <div className='card-body-price-label'>
                    <b>Rating:</b> {props.trip.venueRating}/5
                </div>
            </div>
            <div className='activity-card-body-element'>
                <div className='card-body-icon'>
                </div>
                <div className='card-body-price-label'>
                    <b>Weather:</b> High, {props.trip.venueWeather[0].maxTemp}&#176;C | Low, {props.trip.venueWeather[0].minTemp}&#176;C
                </div>
            </div>
            <div className='activity-card-body-element'>
                <div className='card-body-icon'>
                </div>
                <div className='card-body-price-label'>
                    <b>Venue Type:</b> {props.trip.venueType.replaceAll("_", " ")}
                </div>
            </div>
            <div className='activity-card-body-element'>
                <div className='card-body-icon'>
                </div>
                <div className='card-body-price-label'>
                    <b>Address:</b> {props.trip.venueAddress}
                </div>
            </div>
        </div>
        </div>
    </div>
);

class TripHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {activities: []};
    }

    componentDidMount () {
       const tripId = window.location.href.split("/").pop()
       const body = {
        savedTripID: tripId,
    }
    axios.post('http://localhost:5000/api/getUserVenuesTrip', body).then((res) => {
        if(res){
            console.log("hehre")
            console.log(res)
            this.setState({activities: res.data.data});;
        }
    });
    }

    activityList() {
        return this.state.activities.map((currentActivity) => {
            return <SavedActivity trip={currentActivity} key={currentActivity._id} />;
        });
    }

    render() {
        return (
            <div className='container-s'>
                <div className='saved-header'>
                    <div className='saved-header-icon'>
                        <img
                            className='saved-header-icon-img'
                            src={locationBlueLarge}
                        />
                    </div>
                    <div className='saved-header-title'>
                        <span></span>
                        <b>Trip Activities</b>
                        <Link to="/history">
                            <button className='btn-secondary btn-shadow-blue take-me-back'>
                                <b>Take Me Back</b>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='saved-body'>
                    <div className='saved-body-cards' >{this.activityList()}</div>
                </div>
            </div>
        );
    }
}
export default TripHistory;
