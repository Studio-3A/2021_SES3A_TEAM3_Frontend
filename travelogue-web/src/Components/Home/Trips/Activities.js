import React from 'react';
import moment from 'moment';
import { Activity, Trip } from 'travelogue-utility';
import People from '../../svg/activity-people.svg';
import Clock from '../../svg/activity-clock.svg';
import Save from '../../svg/card-save-icon.svg';
import './Trips.css';
/*
interface ActProps {
  activity: Activity;
}

interface IActivityProps {
  trip: Activity[]
}

interface BitProps {
  label: string;
  value: string | number | undefined;
  className?: string;
  displayLabel?: boolean;
} */

const ActivityProperty = ({ className, value, displayLabel, label }) => {
    return (
        <>
            {value && (
                <div className={`activity-label ${className || ''}`}>
                    {displayLabel ? <b>{label}:</b> : ''} {value}
                </div>
            )}
        </>
    );
};

const ActivitySingle = (props) => {
    const {
        description,
        name,
        price,
        location,
        generalLocation,
        time,
        duration,
    } = props.activity;
    const formattedPrice = price != null ? `$${price}` : price;
    const timeFormat = 'h:mm A';
    const actualTime =
        time != null && duration != null
            ? moment(time).format(timeFormat) +
              ' - ' +
              moment(time).add({ milliseconds: duration }).format(timeFormat)
            : time;

    return (
        <div className='activity-block'>
            <div className='activity-card card card-shadow'>
                <div className='activity-img-backdrop'>
                    <div className='activity-card-top'>
                        <div className='activity-name-save'>
                            <ActivityProperty
                                label={'Name'}
                                value={name}
                                className={'activity-name'}
                            />
                            <img className='activity-save' src={Save}></img>
                        </div>
                        {/* <ActivityProperty
              label={"Price"}
              value={formattedPrice}
              className={"activity-price"}
            /> */}
                        <ActivityProperty
                            label={'Location'}
                            value={location}
                            className={'activity-location'}
                        />
                    </div>
                    <div className='activity-card-bottom'>
                        <ActivityProperty
                            label={'Suburb'}
                            value={generalLocation}
                            className={'activity-general-location'}
                        />
                    </div>
                </div>
            </div>
            <div className='activity-description'>
                <p className='activity-description-label'>
                    <b>Description</b>
                </p>
                <ActivityProperty label={'Description'} value={description} />

                <div className='description-details'>
                    <div className='description-details-time'>
                        <img alt='' src={Clock}></img>
                        <ActivityProperty
                            label={'Time'}
                            displayLabel={true}
                            value={`${actualTime}`}
                        />
                    </div>
                    <div className='description-details-people'>
                        <img alt='' src={People}></img>
                        <ActivityProperty
                            label={'People'}
                            displayLabel={true}
                            value={'10'}
                        />
                    </div>
                </div>
                <div className='description-buttons'>
                    <button className='btn-secondary btn-shadow-blue'>
                        <b>Bookings</b>
                    </button>
                    <button className='btn-secondary btn-shadow-blue'>
                        <b>Map</b>
                    </button>
                </div>
            </div>
        </div>
    );
};

const TripDay = (props) => {
    return (
        <div className='tripday-block'>
            {window.location.href.endsWith('features')
                ? props.trip.trip
                      .splice(0, 2)
                      .map((a) => <ActivitySingle activity={a} />)
                : props.trip.trip.map((a) => <ActivitySingle activity={a} />)}
        </div>
    );
};
/*
interface TripProps {
  trip: Trip
} */

export const Activities = (props) => {
    return (
        <div className='activities-block'>
            <p className='section-label'>Activities</p>
            <div className='activities-tripday-block'>
                <TripDay trip={props.trip} />
            </div>
        </div>
    );
};
