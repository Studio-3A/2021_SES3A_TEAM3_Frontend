import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardMedia';
import { Button } from 'react-bootstrap';
import './SavedTrips.css';

import HeartIcon from "../../Images/saved-trips-heart-ico.svg";
import PinIcon from "../../Images/saved-trips-pin.svg";
import MoneyIcon from "../../Images/saved-trips-money.svg";
import GroupIcon from "../../Images/saved-trips-group.svg";

interface State {
    locationImage: string,
    locationName: string,
    description: string,
    price: number,
    people: number
}

function TripsCard(props: State) {
    return (
        <Card className="st-card" style={{ borderRadius: "10px", boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.35)" }}>
            <div>
                <CardMedia>
                    <img src={props.locationImage} className="scene-image" alt="locationImage" />
                    <img src={HeartIcon} className="st-heart-icon" alt="savedTripsHeartIcon" />
                </CardMedia>
                <CardContent className="st-card-content">
                    <div className="st-card-title-div">
                        <div>
                            <img src={PinIcon} className="pin-icon" alt="pinIcon" />
                        </div>
                        <div>
                            <text className="st-card-text1">{props.locationName}</text>
                        </div>
                    </div>
                    <div className="st-card-desc-div">
                        <text className="st-card-text2">{props.description}</text><br />
                    </div>
                    <div className="st-card-text-div">
                        <div>
                            <img src={MoneyIcon} className="money-icon" alt="moneyIcon" />
                        </div>
                        <div>
                            <text className="st-card-text-cat">Price: </text>
                            <text className="st-card-text2">${props.price} per person</text>
                        </div>
                    </div>
                    <div className="st-card-text-div">
                        <div>
                            <img src={GroupIcon} className="group-icon" alt="groupIcon" />
                        </div>
                        <div>
                            <text className="st-card-text-cat">Number of People: </text>
                            <text className="st-card-text2">Suitable for up to {props.people} people</text>
                        </div>
                    </div>
                    <Button className="st-view-btn">
                        View more
                    </Button>
                </CardContent>
            </div>
        </Card>
    )
}
export default TripsCard;