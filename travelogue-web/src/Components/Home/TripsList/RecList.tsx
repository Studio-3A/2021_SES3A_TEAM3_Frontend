import LocationCard from '../Location/LocationCard';

function RecList() {
  return (
    <div>
      <div className="rec-list-content">
        <LocationCard
          placeName='Recommendation 1'
          price='$100'
          location='Sydney, Australia'
        />
      </div>
    </div>
  );
}

export default RecList;
