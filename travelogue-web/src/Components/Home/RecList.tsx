import Grid from '@material-ui/core/Grid';
import LocationCard from './LocationCard';

// Images
import LocationImage1 from '../../Images/home-card-bg1.svg';
import LocationImage2 from '../../Images/home-card-bg2.svg';

function RecList() {
    return (
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="flex-start">
            <Grid item>
                <LocationCard placeName="Recommendation 1" price="$100" location="Sydney, Australia" image={LocationImage1} />
            </Grid>
            {/*<Grid item className="spacer-left2">
                <LocationCard placeName="Australia Camp" price="$100" location="Sydney, Australia" image={LocationImage2} />
    </Grid>*/}
        </Grid>
    )
}

export default RecList;