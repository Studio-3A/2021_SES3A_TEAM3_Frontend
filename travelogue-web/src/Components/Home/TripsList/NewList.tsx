import Grid from '@material-ui/core/Grid';
import LocationCard from '../Location/LocationCard';

// Images
import LocationImage1 from '../../../Images/home-card-bg1.svg';
import LocationImage2 from '../../../Images/home-card-bg2.svg';

function NewList() {
  return (
    <div className='new-list-content'>
      <div>
        <LocationCard
          placeName='Australia Camp'
          price='$100'
          location='Sydney, Australia'
          
        />
      </div>
      <div className='spacer-left2'>
        <LocationCard
          placeName='Australia Camp'
          price='$100'
          location='Sydney, Australia'
          
        />
      </div>
      <div className='spacer-left2'>
        <LocationCard
          placeName='Australia Camp'
          price='$100'
          location='Sydney, Australia'
          
        />
      </div>
    </div>
  );
}

export default NewList;
