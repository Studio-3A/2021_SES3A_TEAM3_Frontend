// TODO:
//   -  Create profile/accounts page for the user

import React, { FC, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import firebase from 'firebase';
import { useAuth } from '../../firebase/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import './Account.css';

// Images
import AccountIcon from "../../Images/account-ico.svg";
import ProfileIcon from "../../Images/profile-ico.svg";
import EmailIcon from "../../Images/email-ico.svg";
import ProfilePic from "../../Images/default-profile-ico.svg";
import CameraIcon from '../../Images/camera-ico.svg';


// TODO:
const Account: FC = () => {
    const auth = useAuth();
    const [name] = useState<string>(auth.user?.displayName || '');
    const [email] = useState<string>(auth.user?.email || '');
    const [sendEmails, setSendEmails] = useState(false)

    let onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Swal.fire('Saved!', '', 'success');
    };

    let onDeactivate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, deactivate it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deactivated!',
                    'Your account has been deactivated.',
                    'success'
                ).then( () => {
                    firebase.auth().currentUser?.delete();
                    window.location.href = '/';
                });
            }
        });
    };

    let handlePromotionalEmail = () =>{
        setSendEmails(!sendEmails)
    }

    return (
        <BrowserRouter>
            <div className='Account'>
                {/*Title*/}
                <div className='page-title-div'>
                    <div className='padding-right-20px'>
                        <img src={AccountIcon} className='account-icon' alt='accountIcon' />
                    </div>
                    <div>
                        <h3 className='page-title-text'>Account Details</h3>
                    </div>
                </div>

                {/*Main form section*/}
                <div className='account-body'>
                <div className='profile-pic-div'>
                    <div>
                    <img src={auth.user?.photoURL || ProfilePic} alt='profilePic' className='profile-img' />
                    <img src={CameraIcon} alt='cameraIcon' className='camera-icon' />
                    </div>
                    <div>
                    <h4 className='name-text'>{name}</h4>
                    </div>
                </div>

                <Form className='form-background' onSubmit={onSubmit}>
                    <div className='form-details-div'>
                        <div>
                            <div className='form-details-title-div'>
                            <div className='padding-right-10px'>
                                <img
                                src={ProfileIcon}
                                className='textbox-icon'
                                alt='profileIcon'
                                />
                            </div>
                            <div>
                                <h5 className='textbox-header'>Username</h5>
                            </div>
                            </div>
                        </div>
                        <div className='textbox-item'>
                            <Form.Group controlId='formUsername'>
                            <Form.Control
                                type='text'
                                name='username'
                                placeholder='Username'
                                value={name.replace(/ /g,'')}
                                className='textbox'
                                readOnly
                            />
                            </Form.Group>
                        </div>
                        <div>
                            <div className='form-details-title-div'>
                            <div className='padding-right-10px'>
                                <img
                                src={EmailIcon}
                                className='textbox-icon'
                                alt='emailIcon'
                                />
                            </div>
                            <div>
                                <h5 className='textbox-header'>Email</h5>
                            </div>
                            </div>
                        </div>
                        <div className='textbox-item'>
                            <Form.Group controlId='formEmail'>
                            <Form.Control
                                type='text'
                                name='email'
                                placeholder='Email'
                                value={email}
                                className='textbox'
                                readOnly
                            />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="checkbox-options">
                        <div key="default-checkbox" className="mb-3">
                            <Form.Check 
                                type='checkbox'
                                label = 'Receive Promotional Emails'
                                onClick= {handlePromotionalEmail}
                            />
                        </div>
                    </div>
                    
                    <div className='save-btn-div'>
                        <button type='submit' className='save-btn'>
                            Save Changes
                        </button>
                    </div>
                </Form>

                <hr className='line' />

                {/*Deactivate Account Section*/}
                <div className='deactivate-div'>
                    <div>
                    <h4 className='deactivate-heading'>Deactivate Account</h4>
                    </div>
                    <div>
                    <div className='deactivate-body-div'>
                        <div>
                        <p className='deactivate-text'>
                            Delete your account and all data
                        </p>
                        </div>
                        <div>
                        <Form onSubmit={onDeactivate}>
                            <button className='deactivate-btn' type='submit'>
                            Deactivate
                            </button>
                        </Form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </BrowserRouter>
    );
};

export default Account;