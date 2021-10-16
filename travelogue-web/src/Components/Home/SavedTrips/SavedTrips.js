import '../../../App.css';
import savedIcon from '../../svg/saved-ico.svg';
import './SavedTrips.css';
import React, { Component } from 'react';
import sTrips from './SavedTrips.json';
import LocationIcon from '../../svg/location-ico.svg';
import MoneyIcon from '../../svg/money-ico.svg';
import PeopleIcon from '../../svg/people-ico.svg';
//import tripBackground from '';

export const SavedTrip = (props) => (
    <div className='saved-activity-card radius-m card-shadow'>
        <div className='saved-activity-card-header'>
            <div className='saved-activity-card-header-bg'>
                <img className='card-header-save_icon' src={savedIcon}></img>
            </div>
        </div>
        <div className='saved-activity-card-body'>
            <div className='activity-card-body-element'>
                <div className='card-body-icon'>
                    <img className='card-body-icon-img' src={LocationIcon} />
                </div>
                <div className='card-body-location-label'>
                    <h4>
                        <b>{props.trip.location}</b>
                    </h4>
                </div>
            </div>
            <div className='activity-card-body-description'>
                {props.trip.description}
            </div>
            <div className='activity-card-body-element'>
                <div className='card-body-icon'>
                    <img className='card-body-icon-img' src={MoneyIcon} />
                </div>
                <div className='card-body-price-label'>
                    <b>Price: </b>${props.trip.price} per person
                </div>
            </div>
            <div className='activity-card-body-element'>
                <div className='card-body-icon'>
                    <img className='card-body-icon-img' src={PeopleIcon} />
                </div>
                <div className='card-body-no_people-label'>
                    <b>Number of people:</b> Suitable for up to{' '}
                    {props.trip.people} people
                </div>
            </div>
        </div>
        <div className='activity-card-body-view'>
            <button className='btn-secondary btn-shadow-blue'>
                <b>View</b>
            </button>
        </div>
    </div>
);

class SavedTrips extends Component {
    constructor() {
        super();
    }

    tripsList() {
        return sTrips.trip.map((currentTrip) => {
            return <SavedTrip trip={currentTrip} key={currentTrip._id} />;
        });
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
                        <b>Saved Trips</b>
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
