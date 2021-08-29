import '../../../App.css';
import savedIcon from '../../svg/saved-ico.svg';
import './SavedTrips.css';
//import tripBackground from '';


const savedTrip = props => ( 
    <div className="saved-activity-card radius-m card-shadow">
        <div className="saved-activity-card-header">
            Hello
            <hr/>
            { /* </div><img className="saved-activity-card-header-bg" src={tripBackground}> */}
        </div>
        <div className="saved-activity-card-body ">
            <div className="activity-card-body-location">
                <div className="card-body-location-icon">  
                { /* </div><img className="card-body-price-icon-img" src={}> */}
                </div>
                <div className="card-body-location-label">
                    {props}
                </div>
            </div>
            <div className="activity-card-body-description">

            </div>
            <div className="activity-card-body-price">
                <div className="card-body-price-icon">
                { /* </div><img className="card-body-price-icon-img" src={}> */}
                </div>
                <div className="card-body-price-label">

                </div>
            </div>
            <div className="activity-card-body-no_people">
                <div className="card-body-no_people-icon">
                { /* </div><img className="card-body-no_people-icon-img" src={}> */}
                </div>
                <div className="card-body-no_people-label">

                </div>
            </div>
            <div className="activity-card-body-view">

            </div>
            <hr/>
        </div>
    </div>
)

class SavedTrips extends component {

    savedTripsList () {
        
    }

    render() {
        <div className="container-s">
            <div className="saved-header">
                <div className="saved-header-icon">
                    <img className="saved-header-icon-img" src={savedIcon}/>
                </div>
                <div className="saved-header-title">
                    <span></span><b>Saved Trips</b>
                </div>
            </div>
            <div className="saved-body">
                <div className="saved-body-cards">
                    <Tickets />
                </div>
            </div>
        </div>
    }
}
export default SavedTrips;