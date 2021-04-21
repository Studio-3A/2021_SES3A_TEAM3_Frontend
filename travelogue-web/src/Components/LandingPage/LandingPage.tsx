import React, {Component} from 'react';
import logo from './logo.svg';
import '../../App.css';
import { BrowserRouter, Switch, Route, withRouter} from "react-router-dom";
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
import googleLogo from "../svg/googleLogo.svg";
import Swal from 'sweetalert2';

import RegistrationImage from '../../Images/signupleftImage.svg'
import AppleSignUp from '../../Images/applesignup.svg'
import FacebookSignup from '../../Images/fbsignup.svg'
import MicrosoftSignup from '../../Images/microsignup.svg'
import GoogleSignUp from '../../Images/googlesignup.svg'
import CloseBtn from '../../Images/closebtn.svg'
import '../Login/Login.css'
import firebase from 'firebase';
import { SignInWithSocialMedia } from '../../firebase/SignInWithSocialMedia';
import { Link, Redirect } from 'react-router-dom';
import { Providers } from '../../firebase/firebase';
import { IAppProps } from '../../App';

declare var jquery: any;
declare var $: any;

interface IProps {
}
interface IState {
    auth: boolean;
}


class frontPage extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
          auth: false
        };
    }

    handleClick = () => {
        console.log("Clicked!");
    }


    setAuth = (status:boolean) =>{
        this.setState({auth:status})
    }

    signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        this.setAuth(true);
        let user = firebase.auth().currentUser;
        if (!user){
            //session cleared when the tab is closed.
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION) 
            .then(() => {

                SignInWithSocialMedia(provider)
                .then(result => {
                    window.location.href = "/leaderboard";
                })
                .catch(error => {
                    console.log(error);
                });
            });
        }
        else{
            firebase.auth().signOut();
            alert("user has already signin as" + user.displayName);
            window.location.href = "/settings";
        }
        return  <Redirect to='/history'/>
        
       
    }

    render(){
        return (
            <div className="container-fp">
                <div className="page1">
                <img className="frontPageBlob2" src={blob2}/>
                <img className="frontPageBlob1" src={blob1}/>
            
                <div className="header">
                    <div className="logo">
                        <div className="logo-icon">
                            <img className="logoIcon" src={Logo}></img>
                        </div>
                        <div className="logo-text">
                            <p>Travelogue</p>
                        </div>
                    </div>
                    <div className="search"></div>
                    <div className="menu-items">
                        <div className="menu-items-home">Home</div>
                        <div className="menu-items-about">About</div>
                        <div className="menu-items-features">Features</div>
                        <Link to="/login">
                        <button className='menu-items-login btn-secondary' type='button'>
                        Login   
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="main-content">
                    <div className="view-landing">
                        <div className="view-landing-left">
                            <div className="left-title">
                                <p><u>Explore</u> the world <br /> without the stress</p>
                            </div>
                            <div className="left-description">
                                <p>Simply enter information of your current situation and travelogue will automatically generate a trip for you.</p>
                            </div>
                            <div className="left-start-button">
                                <button className="btn-secondary btn-shadow-blue">Start Now</button>
                            </div>
                        </div>
                        <div className="view-landing-right">
                            <img className="telescopeLady" src={telescopeLady}></img>
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
                        <img className="world-map-img" src={worldMap}/>
                    </div>
                </div>
                <div className="page3">
                    <div className="experience-container">
                        <div className="ec-left">
                            <img className="ecr-item-clock card-shadow" src={location}/>
                        </div>
                        <div className="ec-right">
                            <p className="page-title">Experience</p>
                            <p className="page-label"> Discover New Places</p>
                            <div className="ecr-item">
                                <img src={clock}/>
                                <p>Save Time</p>
                            </div>
                            <div className="ecr-item">
                                <img src={wallet}/>
                                <p>Save Money</p>
                            </div>
                            <div className="ecr-item">
                                <img src={bag}/>
                                <p>Travel Instantly</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page4">
                    <div>
                        <div className="page-title">
                            <p>Download</p>
                        </div>
                        <div className="page-label">
                            <p>Mobile Application</p>
                        </div>
                    <div className="mobile-div">
                            <div className="mobile-title">
                                <div>
                                    <p className="mt-heading">Travel easily with the click of a few buttons</p>
                                    <img className="mb-sep" src={blueSeparator}></img>
                                    <p className="mt-description">Simply enter information of your current situation and travelogue will 
    automatically generate a trip for you. Downloadable app is below</p>
                                    <div className="app-download">
                                        <div className="apple-download card-shadow">
                                            <img src={appleLogo}/>
                                            <div>
                                                <p className="ad-title">Download App</p>
                                                <p className="ad-label">App Store</p>
                                            </div>
                                        </div>
                                        <div className="google-download card-shadow">
                                            <img src={googleLogo}></img>
                                            <div className="ad">
                                                <p className="ad-title">Download App</p>
                                                <p className="ad-label">App Store</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className="mb-img" src={mobilePhone}></img>
                                </div>
                                
                                
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default frontPage;