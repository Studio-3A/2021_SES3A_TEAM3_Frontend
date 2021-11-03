import '../../App.css';
import telescopeLady from "../svg/telescopeLady.svg";
import Logo from "../svg/travelogueLogo.svg";
import blob1 from "../svg/frontpageBlob1.svg";
import blob2 from "../svg/frontpageBlob2.svg";
import worldMap from "../svg/worldMap.svg";
import location from "../svg/location.png";
import clock from "../svg/clock.svg";
import wallet from "../svg/wallet.svg";
import bag from "../svg/bag.svg";
import mobilePhone from "../svg/mobilePhone.svg";
import blueSeparator from "../svg/blueSeparator.svg";
import appleLogo from "../svg/appleLogo.svg";
import googleLogo from '../svg/googleLogo.svg';
import Header from './Header';
import '../Login/Login.css'
import { Link } from 'react-router-dom';
import { GetUser } from '../../Auth/AuthContext';
import axios, { AxiosResponse } from 'axios';

function frontPage() {
    

    const user = GetUser();

    const signOut = () => {
        axios.get('http://localhost:5000/auth/logout', { withCredentials: true }).then((res: AxiosResponse) => {
            if(res.data){
                window.location.href = '/'
            }
        });
    }

    

    return (
        <div className="container-fp">
            
            <div className="page1">
            <img alt="Blob" className="frontPageBlob2" src={blob2}/>
            <img alt="Blob" className="frontPageBlob1" src={blob1}/>
            <Header />
            <div className="main-content">
                <div className="view-landing">
                    <div className="view-landing-left">
                        <div className="left-title">
                            <p><u>Explore</u> the world <br /> without the stress.</p>
                        </div>
                        <div className="left-description">
                            <p>Simply enter information of your current situation and travelogue will automatically generate a trip for you.</p>
                        </div>
                        <div className="left-start-button">
                            <Link to='/home'>
                                <button className="btn-secondary btn-shadow-blue">Start Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className="view-landing-right">
                        <img alt="Telescope" className="telescopeLady" src={telescopeLady}></img>
                    </div>
                </div>
                <div className="view-scroll"></div>
            </div>
            </div>
            <div className="page2">
                <div>
                    <div className="page-title">
                        <p>Be part of the community</p>
                    </div>
                    <div className="page-label">
                        <p>Score the highest amount of points in the community</p>
                    </div>
                </div>
                <div className="world-map">
                    <img alt="World Map" className="world-map-img" src={worldMap}/>
                </div>
            </div>
            <div className="page3">
                <div className="experience-container">
                    <div className="ec-left">
                        <img alt="Clock" className="ecr-item-clock card-shadow" src={location}/>
                    </div>
                    <div className="ec-right">
                        <p className="page-title">Experience</p>
                        <p className="page-label"> Discover New Places</p>
                        <div className="ecr-item">
                            <img alt="Clock" src={clock}/>
                            <p>Save Time</p>
                        </div>
                        <div className="ecr-item">
                            <img alt="Wallet" src={wallet}/>
                            <p>Save Money</p>
                        </div>
                        <div className="ecr-item">
                            <img alt="Bag" src={bag}/>
                            <p>Travel Instantly</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page4">
                <div>
                    <div className="page-title">
                        <p>On Its Way!</p>
                    </div>
                    <div className="page-label">
                        <p>Mobile Application</p>
                    </div>
                <div className="mobile-div">
                        <div className="mobile-title">
                            <div>
                                <p className="mt-heading">Travel easily with the click of a few buttons</p>
                                <img alt="Separator" className="mb-sep" src={blueSeparator}></img>
                                <p className="mt-description">Simply enter information of your current situation and travelogue will 
automatically generate a trip for you. Downloadable app is below</p>
                                <div className="app-download">
                                    <div className="google-download card-shadow">
                                        <img alt="Apple Logo" src={appleLogo}/>
                                        <div>
                                            <h4>Coming Soon</h4>
                                            <p>App Store</p>
                                        </div>
                                    </div>
                                    <div className="google-download card-shadow">
                                        <img alt="Google Logo" src={googleLogo}></img>
                                        <div>
                                            <h4>Coming Soon</h4>
                                            <p>App Store</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img alt="Mobile" className="mb-img" src={mobilePhone}></img>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default frontPage;