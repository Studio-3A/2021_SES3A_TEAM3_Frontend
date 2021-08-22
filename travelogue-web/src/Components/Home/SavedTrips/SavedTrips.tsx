import '../../../App.css';
import savedIcon from '../../svg/saved-ico.svg';
import './SavedTrips.css';




function SavedTrips() {
    return (
        <div className="container-s">
            <div className="saved-header">
                <div className="saved-header-ico">
                    <img className="saved-header-ico-img" src={savedIcon}/>
                </div>
                <div className="saved-header-title">
                    <span></span><b>Saved Trips</b>
                </div>
            </div>
            <div className="saved-body">
                
            </div>
        </div>
    );
}
export default SavedTrips;