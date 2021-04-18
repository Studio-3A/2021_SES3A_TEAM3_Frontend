import React, {Component, useState} from 'react';
import RegistrationImage from '../../Images/signupleftImage.svg'
import {ReactComponent as AppleSignUp} from '../../Images/applesignup.svg'
import {ReactComponent as FacebookSignup} from '../../Images/fbsignup.svg'
import {ReactComponent as MicrosoftSignup} from '../../Images/microsignup.svg'
import {ReactComponent as GoogleSignUp} from '../../Images/googlesignup.svg'
import {ReactComponent as CloseBtn} from '../../Images/closebtn.svg'
import './Login.css'
import firebase from 'firebase';
import { SignInWithSocialMedia } from '../../firebase/SignInWithSocialMedia';
import { Link, Redirect } from 'react-router-dom';
import { Providers } from '../../firebase/firebase';
import { IAppProps } from '../../App';
import About from '../About/About';

interface IProps {
    show?: boolean;
}
interface IState {
    show: boolean;
    auth: boolean;
}


class Login extends Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props);
        this.state = {
          show: true,
          auth: false
        };
    }
    showModal = (status:boolean) => {
        this.setState({ show: status });
        window.location.href = "/";
    };

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
            this.showModal(false);
            window.location.href = "/settings";
        }
        return  <Redirect to='/history'/>
        
       
    }

    render() {
        return (
            <div>
                {this.state.show ? (
                    <div className="modal">
                        <div className="signup-modal">
                            <div className="left-signup">
                                <img src={RegistrationImage} alt="left-i" className="left-image"/>
                            </div>
                            <div className="right-signup">
                                <CloseBtn className="close" onClick={() => this.showModal(false)}/>
                                <div className="signup-content">
                                    <p className="heading">Login</p>
                                    <p className="tx">Get access to amazing features that will help you start your journey today.</p>
                                    <div className="signup-btns"> 
                                        <GoogleSignUp className="signup-btn" onClick={() => this.signInWithSocialMedia(Providers.google)}/>
                                        <MicrosoftSignup className="signup-btn" onClick={() => this.signInWithSocialMedia(Providers.facebook)}/>
                                        <FacebookSignup className="signup-btn"/>
                                        <AppleSignUp className="signup-btn"/>
                                    </div>
                                    <div className="vl"></div>
                                    {/* <p className="tx">Already have an account? <b style={{ color: "aquamarine", cursor:"pointer"}}>Login</b></p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                ):(false)}
            </div> 
        )
    }
}
        
export default Login;