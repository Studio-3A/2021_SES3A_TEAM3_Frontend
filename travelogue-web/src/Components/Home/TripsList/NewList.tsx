import LocationCard from '../Location/LocationCard';

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
      <div className='spacer-left2 mar-right'>
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
