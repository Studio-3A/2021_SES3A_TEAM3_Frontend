import React, { Component, useState, FC} from 'react';
import RegistrationImage from '../../Images/signupleftImage.svg'
import {ReactComponent as AppleSignUp} from '../../Images/applesignup.svg'
import {ReactComponent as FacebookSignup} from '../../Images/fbsignup.svg'
import {ReactComponent as MicrosoftSignup} from '../../Images/microsignup.svg'
import {ReactComponent as GoogleSignUp} from '../../Images/googlesignup.svg'
import {ReactComponent as CloseBtn} from '../../Images/closebtn.svg'
import './Login.css'
import { getUser } from '../../Auth/AuthContext';

const Login: FC<{show: boolean}> = ({ show }: any) => {
    const auth = getUser();
    const [showState, setShow] = useState<boolean>(show);
    
    const showModal = (status:boolean) => {
        setShow(status);
        window.location.href = "/";
    };

    const signIn = () => {
        window.open('http://localhost:5000/auth/google', '_self')
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
                                    <GoogleSignUp className="signup-btn" onClick={signIn}/>
                                    <MicrosoftSignup className="signup-btn" />
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