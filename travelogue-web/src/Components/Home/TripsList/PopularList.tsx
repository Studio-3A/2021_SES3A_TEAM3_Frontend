import LocationCard from '../Location/LocationCard';

function PopularList() {
  return (
    <div className="pop-list-content">
      <div>
        <LocationCard
          placeName='Popular 1'
          price='$200'
          location='Melbourne, Australia'
        />
      </div>
      <div className='spacer-left2'>
        <LocationCard
          placeName='Popular 2'
          price='$300'
          location='Queensland, Australia'
        />
      </div>
    </div>
  );
}

export default PopularList;
