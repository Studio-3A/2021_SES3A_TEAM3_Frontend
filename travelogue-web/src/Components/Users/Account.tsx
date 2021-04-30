// TODO:
//   -  Create profile/accounts page for the user

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Account.css';

// Images
import AccountIcon from "../../Images/account-ico.svg";
import ProfileIcon from "../../Images/profile-ico.svg";
import EmailIcon from "../../Images/email-ico.svg";
import ProfilePic from "../../Images/default-profile-ico.svg";
import CameraIcon from "../../Images/camera-ico.svg";


interface State {
    name: string,
    username: string,
    email: string
}

// TODO:
class Account extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);

        this.state = {
            name: 'Tim Williams',
            username: 'TimWilliams',
            email: 'tim.williams@email.com'
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDeactivate = this.onDeactivate.bind(this);
    }

    onChangeUsername(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Successfully Updated Details.");
    }

    onDeactivate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Account Deactivated.");
    }

    render() {
        return (
            <BrowserRouter>
                <div className="Account">

                    {/*Title*/}
                    <div className="page-title-div">
                        <div className="padding-right-20px">
                            <img src={AccountIcon} className="account-icon" alt="accountIcon"/>
                        </div>
                        <div>
                            <h3 className="page-title-text">Account Details</h3>
                        </div>
                    </div>

                    {/*Main form section*/}
                    <div className="account-body">
                        <div className="profile-pic-div">
                            <div>
                                <img src={ProfilePic} alt="profilePic" className="profile-img" />
                                <img src={CameraIcon} alt="cameraIcon" className="camera-icon" />
                            </div>
                            <div>
                                <h4 className="name-text">{this.state.name}</h4>
                            </div>
                        </div>

                        <Form className="form-background" onSubmit={this.onSubmit}>
                            <div className="form-details-div">
                                <div>
                                    <div className="form-details-title-div">
                                        <div className="padding-right-10px">
                                            <img src={ProfileIcon} className="textbox-icon" alt="profileIcon"/>
                                        </div>
                                        <div>
                                            <h5 className="textbox-header">Username</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="textbox-item">
                                    <Form.Group controlId="formUsername">
                                        <Form.Control type="text" 
                                        name="username" 
                                        placeholder="Username" 
                                        value={this.state.username} 
                                        onChange={this.onChangeUsername} 
                                        className="textbox" />
                                    </Form.Group>
                                </div>
                                <div>
                                    <div className="form-details-title-div">
                                        <div className="padding-right-10px">
                                            <img src={EmailIcon} className="textbox-icon" alt="emailIcon"/>
                                        </div>
                                        <div>
                                            <h5 className="textbox-header">Email</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="textbox-item">
                                    <Form.Group controlId="formEmail">
                                        <Form.Control type="text" 
                                            name="email" 
                                            placeholder="Email" 
                                            value={this.state.email} 
                                            onChange={this.onChangeEmail} 
                                            className="textbox" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="save-btn-div">
                                <Button type="submit" className="save-btn">
                                    Save Changes
                                </Button>
                            </div>
                        </Form>

                        <hr className="line" />

                        {/*Deactivate Account Section*/}
                        <div className="deactivate-div">
                            <div>
                                <h4 className="deactivate-heading">Deactivate Account</h4>
                            </div>
                            <div>
                                <div className="deactivate-body-div">
                                    <div>
                                        <text className="deactivate-text">Delete your account and all data</text>
                                    </div>
                                    <div>
                                        <Form onSubmit={this.onDeactivate}>
                                            <Button className="deactivate-btn" type="submit">
                                                Deactivate
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter >
        );
    }
}
export default Account;