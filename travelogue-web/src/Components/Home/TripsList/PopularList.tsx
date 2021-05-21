import Grid from '@material-ui/core/Grid';
import LocationCard from '../Location/LocationCard';

// Images
import LocationImage1 from '../../../Images/home-card-bg1.svg';
import LocationImage2 from '../../../Images/home-card-bg2.svg';

function PopularList() {
  return (
    <Grid
      container
      direction='row'
      justify='flex-start'
      alignItems='flex-start'
    >
      <Grid item>
        <LocationCard
          placeName='Popular 1'
          price='$200'
          location='Melbourne, Australia'
          image={LocationImage1}
        />
      </Grid>
      <Grid item className='spacer-left2'>
        <LocationCard
          placeName='Popular 2'
          price='$300'
          location='Queensland, Australia'
          image={LocationImage2}
        />
      </Grid>
    </Grid>
  );
}

export default PopularList;
