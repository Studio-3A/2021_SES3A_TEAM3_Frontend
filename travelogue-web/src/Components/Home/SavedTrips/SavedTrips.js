import '../../../App.css';
import savedIcon from '../../svg/saved-ico.svg';
import './SavedTrips.css';
import React, { Component } from "react";
import sTrips from './SavedTrips.json';
//import tripBackground from '';


const SavedTrip = (props) => (
    <div className="saved-activity-card radius-m card-shadow">
        <div className="saved-activity-card-header">
            <img className="saved-activity-card-header-bg" src={savedIcon}></img>
        </div>
        <div className="saved-activity-card-body ">
            <div className="activity-card-body-location">
                <div className="card-body-location-icon">  
                { /* </div><img className="card-body-price-icon-img" src={}> */}
                </div>
                <div className="card-body-location-label">
                    {props.trip.location}
                </div>
            </div>
            <div className="activity-card-body-description">
                {props.trip.description}
            </div>
            <div className="activity-card-body-price">
                <div className="card-body-price-icon">
                { /* </div><img className="card-body-price-icon-img" src={}> */}
                </div>
                <div className="card-body-price-label">
                    {props.trip.price}
                </div>
            </div>
            <div className="activity-card-body-no_people">
                <div className="card-body-no_people-icon">
                { /* </div><img className="card-body-no_people-icon-img" src={}> */}
                </div>
                <div className="card-body-no_people-label">

                </div>
            </div>
            <div className="activity-card-body-view">
                <button className="btn-secondary btn-shadow-blue">
                    <b>View</b>
                </button>
            </div>
            <hr/>
        </div>
    </div>
)


class SavedTrips extends Component {

    constructor() {
        super();
      }

    tripsList () {
        return sTrips.trip.map(currentTrip => {return <SavedTrip trip={currentTrip} key={currentTrip._id}/>})
    }

    render() {
        return (
        <div className="container-s">
            <div className="saved-header">
                <div className="saved-header-icon">
                    <img className="saved-header-icon-img" src={savedIcon}/>
                </div>
                <div className="saved-header-title">
                    <span></span><b>Saved Trips</b>
                </div>
            </div>
            <div className="saved-body">
                <div className="saved-body-cards">
                    { this.tripsList() }
                </div>
            </div>
        </div>
        )
    }
}
export default SavedTrips;