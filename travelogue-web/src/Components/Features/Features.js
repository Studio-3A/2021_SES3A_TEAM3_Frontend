import { useState } from 'react';

import './Features.css';
import MenuCard from '../Home/MenuCard/MenuCard';
import Header from '../LandingPage/Header';
import { Trip } from 'travelogue-utility';
import { Activities } from '../Home/Trips/Activities.js';
import { SavedTrip } from '../Home/SavedTrips/SavedTrips';
import sTrips from '../Home/SavedTrips/SavedTrips.json';

import blob2 from '../svg/frontpageBlob2.svg';
import banner from '../svg/banner.svg';
import star2 from '../svg/star-icon2.svg';

function Features() {
    const [trip, setTrip] = useState(undefined);

    const setTripProp = (trip) => setTrip(trip);

    return (
        <div className='page1'>
            <img alt='' className='frontPageBlob2' src={blob2} />
            <Header />
            <div className='banner-div'>
                <p className='logo-text features-text'>
                    <img id='features-star' src={star2} alt='star' />
                    Features
                </p>
                <img src={banner} id='features-banner' alt='square' />
            </div>
            <div className='textWrap'>
                <p className='features-title1'>Generate A Trip</p>
                <p className='features-title2'>
                    Explore the World at the Click of a Button
                </p>
                <MenuCard setTrip={setTripProp} />
            </div>
            {trip != null && <Activities trip={trip} />}

            <div className='textWrap'>
                <div className='ft-hr'></div>
            </div>
            <div className='textWrap'>
                <p className='features-title1'>Save Trips on the Go</p>
                <p className='features-title2'>
                    Ticking Off Bucket List Items Has Never Been So Easy!
                </p>
            </div>
            <div className='container-s'>
                <div className='saved-body-cards'>
                    {sTrips.trip.map((currentTrip) => (
                        <SavedTrip trip={currentTrip} key={currentTrip._id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
