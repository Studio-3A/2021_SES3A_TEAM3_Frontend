import React from 'react';
import './SavedTrips.css';
import heartIcon from '../Images/heart-ico.svg';

function SavedTrips() {
  return (
    <div className='savedBody'>
      <div className='titleContainer'>
        <div className='titleImg'>
          <img src={heartIcon} />
        </div>
        <div className='titleTxt'>
          <p>Saved Trips</p>
        </div>
      </div>
    </div>
  );
}

export default SavedTrips;
