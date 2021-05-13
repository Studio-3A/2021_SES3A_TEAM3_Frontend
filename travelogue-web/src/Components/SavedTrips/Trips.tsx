import Grid from '@material-ui/core/Grid';
import TripsCard from './TripsCard';
import './SavedTrips.css';

import SceneImage1 from "../../Images/saved-trips-scene1.svg";
import SceneImage2 from "../../Images/saved-trips-scene2.svg";
import SceneImage3 from "../../Images/saved-trips-scene3.svg";
import SceneImage4 from "../../Images/saved-trips-scene4.svg";
import SceneImage5 from "../../Images/saved-trips-scene5.svg";
import SceneImage6 from "../../Images/saved-trips-scene6.svg";

function Trips() {
    return (
        <Grid>
            <div className="st-card-div">
                <div>
                    <TripsCard
                        locationImage={SceneImage1}
                        locationName="Byron Bay"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        price={300}
                        people={10}
                    />
                </div>
                <div className="st-card-padding-left">
                    <TripsCard
                        locationImage={SceneImage2}
                        locationName="Blue Mountains"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        price={300}
                        people={5}
                    />
                </div>
                <div className="st-card-padding-left">
                    <TripsCard
                        locationImage={SceneImage3}
                        locationName="Uluru"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        price={600}
                        people={2}
                    />
                </div>
            </div>
            <div className="st-card-div">
                <div>
                    <TripsCard
                        locationImage={SceneImage4}
                        locationName="Ebor Falls"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        price={150}
                        people={8}
                    />
                </div>
                <div className="st-card-padding-left">
                    <TripsCard
                        locationImage={SceneImage5}
                        locationName="Lake Eckersley"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        price={100}
                        people={15}
                    />
                </div>
                <div className="st-card-padding-left">
                    <TripsCard
                        locationImage={SceneImage6}
                        locationName="Great Barrier Reef"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        price={700}
                        people={9}
                    />
                </div>
            </div>
        </Grid>
    )
}
export default Trips;