import { StringDecoder } from 'node:string_decoder';
import React from 'react';
import LocationImage1 from '../../Images/home-card-bg1.svg';
import LocationImage2 from '../../Images/home-card-bg2.svg';
import moment from 'moment';
import { Activity, Trip } from 'travelogue-utility';
import People from '../../svg/activity-people.svg';
import Clock from '../../svg/activity-clock.svg';


interface ActProps {
  activity: Activity;
}

interface BitProps {
  label: string;
  value: string | number | undefined;
  className?: string;
  displayLabel?: boolean;
}

const ActivityProperty = (props: BitProps) => {
  const { value } = props;
  const className = props.className || '';
  const displayLabel = props.displayLabel;
  return (
    <>{value && <div className={`activity-label ${className}`}>{displayLabel ? <b>{props.label}:</b> : ''} {value}</div>}</>
  );
};

const ActivitySingle = (props: ActProps) => {
  const { description, name, price, location, time, duration } = props.activity;
  const formattedPrice = price != null ? `$${price}` : price;
  const timeFormat = 'h:m A';
  const actualTime =
    time != null && duration != null
      ? moment(time).format(timeFormat) +
        ' - ' +
        moment(time).add({ minute: duration }).format(timeFormat)
      : time;

  return (
    <div className='activity-block'>
      <div className='activity-card card card-shadow'>
        <div className='activity-img-backdrop'>
          <ActivityProperty label={'Name'} value={name} className={'h3'} />
          <ActivityProperty
            label={'Price'}
            value={formattedPrice}
            className={'activity-price'}
          />
          <ActivityProperty
            label={'Location'}
            value={location}
            className={'activity-location'}
          />
        </div>
      </div>
      <div className='activity-description'>
        <h3><b>Description</b></h3>
        <ActivityProperty label={'Description'} value={description} />

        <div className="description-details">
          <div className="description-details-time">
          <img src={Clock}></img>
          <ActivityProperty label={'Time'} displayLabel={true} value={`${actualTime}`} />
          </div>
          <div className="description-details-people">
          <img src={People}></img>
          <ActivityProperty label={'People'} displayLabel={true} value={"10"} />
          </div>
        </div>
        <div className="description-buttons">
          <button className="btn-secondary btn-shadow-blue"><b>Bookings</b></button>
          <button className="btn-secondary btn-shadow-blue"><b>Map</b></button>
        </div>
      </div>
    </div>
  );
};

const TripDay = (props: Trip) => {
  return (
    <div className="tripday-block">
      {props.trip.map((a: Activity) => (
        <ActivitySingle activity={a} />
      ))}
    </div>
  );
};

export const Activities = (state: Trip) => {
  return (
    <div className="activities-block">
      <p className="page-label">Activities</p>
      <div className="activities-tripday-block">
        <TripDay trip={state.trip} />
      </div>
    </div>
  );
};
