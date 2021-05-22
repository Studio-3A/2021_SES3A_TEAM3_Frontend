import React, { Component, useState, FC} from 'react';
import RegistrationImage from '../../Images/signupleftImage.svg'
import {ReactComponent as AppleSignUp} from '../../Images/applesignup.svg'
import {ReactComponent as FacebookSignup} from '../../Images/fbsignup.svg'
import {ReactComponent as MicrosoftSignup} from '../../Images/microsignup.svg'
import {ReactComponent as GoogleSignUp} from '../../Images/googlesignup.svg'
import {ReactComponent as CloseBtn} from '../../Images/closebtn.svg'
import './Login.css'
import firebase from 'firebase';
import { useAuth } from '../../firebase/Auth'
import { Link, Redirect } from 'react-router-dom';
import { Providers } from '../../firebase/firebase';
import { IAppProps } from '../../App';
import { About } from '../About/About';

const Login: FC<{show: boolean}> = ({ show }: any) => {
    const auth = useAuth();
    const [showState, setShow] = useState<boolean>(show);
    
    const showModal = (status:boolean) => {
        setShow(status);
        window.location.href = "/";
    };

    const signInWithProvider = (provider: firebase.auth.AuthProvider) => {
        if (!auth.user){
            //session cleared when the tab is closed.
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
                auth.signIn(provider)
                .then(result => {
                    window.location.href = '/home';
                })
                .catch(error => {
                    console.log(error);
                });
            });
        } else {
            auth.signOut();
            alert(`User is already signed in as '${auth.user.displayName}'`);
            showModal(false);
            window.location.href = "/settings";
        }
        // What does this do??? It's returning a JSX fragment from within a non-rendering function?
        return  <Redirect to='/history'/>      
    }
    
    return (
        <div>
            {showState ? (
                <div className="modal">
                    <div className="signup-modal">
                        <div className="left-signup">
                            <img src={RegistrationImage} alt="left-i" className="left-image"/>
                        </div>
                        <div className="right-signup">
                            <CloseBtn className="close" onClick={() => showModal(false)}/>
                            <div className="signup-content">
                                <p className="heading">Login</p>
                                <p className="tx">Get access to amazing features that will help you start your journey today.</p>
                                <div className="signup-btns"> 
                                    <GoogleSignUp className="signup-btn" onClick={() => signInWithProvider(Providers.google)}/>
                                    <MicrosoftSignup className="signup-btn" onClick={() => signInWithProvider(Providers.facebook)}/>
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
        
export default Login;