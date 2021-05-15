import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardMedia';
import '../Home.css';

import LocationIcon from '../../../Images/location-ico2.svg';

interface State {
  placeName: string;
  price: string;
  location: string;
  image: string;
}

function LocationCard(props: State) {
    return (
        <div className="location-card card card-shadow">
            <div>
                <div className="location-card-media  activity-img-backdrop">
                    <img src={props.image} className="image1" alt="location-image1" />
                </div>
                <div className="location-card-content">
                    <p className="location-card-text1">{props.placeName}</p><br />
                    <p className="location-card-text2">{props.price}</p><br />
                    <div className="location-card-grid">
                        <div>
                            <img src={LocationIcon} className="location-icon" alt="location-ico" />
                        </div>
                        <div>
                            <p className="location-card-text3">{props.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationCard;
