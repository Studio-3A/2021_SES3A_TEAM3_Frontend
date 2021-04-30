import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardMedia';
import './Home.css';

import LocationIcon from '../../Images/location-ico2.svg';

interface State {
    placeName: string,
    price: string,
    location: string,
    image: string
}

function LocationCard(props: State) {
    return (
        <Card className="location-card card" style={{ borderRadius: "20px" }}>
            <div>
                <CardMedia className="location-card-media">
                    <img src={props.image} className="image1 card-shadow" alt="location-image1" />
                </CardMedia>
                <CardContent className="location-card-content">
                    <text className="location-card-text1">{props.placeName}</text><br />
                    <text className="location-card-text2">{props.price}</text><br />
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        className="location-card-grid"
                    >
                        <Grid item>
                            <img src={LocationIcon} className="location-icon" alt="location-ico" />
                        </Grid>
                        <Grid item>
                            <text className="location-card-text3">{props.location}</text>
                        </Grid>
                    </Grid>
                </CardContent>
            </div>
        </Card>
    )
}

export default LocationCard;