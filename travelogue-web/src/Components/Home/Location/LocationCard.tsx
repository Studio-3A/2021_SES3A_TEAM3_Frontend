import './LocationCard.css';

import LocationIcon from '../../../Images/location-ico2.svg';

interface State {
  placeName: string;
  price: string;
  location: string;
}

function LocationCard(props: State) {
  return (
    <div className="activity-card card card-shadow">
     
        <div className='activity-img-backdrop'>
          <p className="location-card-text1">{props.placeName}</p>
          <br />
          <p className="location-card-text2">{props.price}</p>
          <br />
          <div className="location-card-grid">
            <div>
              <img
                src={LocationIcon}
                className="location-icon"
                alt="location-ico"
              />
            </div>
            <div>
              <p className="location-card-text3">{props.location}</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default LocationCard;
