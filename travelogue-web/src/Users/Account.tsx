// TODO:
//   -  Create profile/accounts page for the user

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Account.css';

// Images
import AccountIcon from "../Images/account-ico.png";
import ProfileIcon from "../Images/profile-ico.png";
import EmailIcon from "../Images/email-ico.png";
import ProfilePic from "../Images/profile-test.jpg";

const Body = styled.body`
    background-color: white;
    background-blend-mode: multiply;
    display: flex;
    flex-direction: column;
    color: black;
`;

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
            name: 'John Doe',
            username: '',
            email: ''
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
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={2}
                        className="page-title-div">
                        <Grid item>
                            <img src={AccountIcon} className="account-icon" alt="accountIcon"/>
                        </Grid>
                        <Grid item>
                            <h3 className="page-title-text">Account Details</h3>
                        </Grid>
                    </Grid>

                    {/*Main form section*/}
                    <Body className="body">
                        <Grid container
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <Grid item>
                                <img src={ProfilePic} alt="profilePic" className="profile-img" />
                            </Grid>
                            <Grid item>
                                <h4 className="name-text">{this.state.name}</h4>
                            </Grid>
                        </Grid>

                        <Form className="form-background" onSubmit={this.onSubmit}>
                            <Grid container
                                direction="column"
                                justify="center"
                                alignItems="stretch">
                                <Grid item>
                                    <Grid container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="baseline"
                                        spacing={1}>
                                        <Grid item>
                                            <img src={ProfileIcon} className="textbox-icon" alt="profileIcon"/>
                                        </Grid>
                                        <Grid item>
                                            <h5 className="textbox-header">Username</h5>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Form.Group controlId="formUsername">
                                        <Form.Control type="text" 
                                        name="username" 
                                        placeholder="Username" 
                                        value={this.state.username} 
                                        onChange={this.onChangeUsername} 
                                        className="textbox" />
                                    </Form.Group>
                                </Grid>
                                <Grid item>
                                    <Grid container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="baseline"
                                        spacing={1}>
                                        <Grid item>
                                            <img src={EmailIcon} className="textbox-icon" alt="emailIcon"/>
                                        </Grid>
                                        <Grid item>
                                            <h5 className="textbox-header">Email</h5>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Form.Group controlId="formEmail">
                                        <Form.Control type="text" 
                                            name="email" 
                                            placeholder="Email" 
                                            value={this.state.email} 
                                            onChange={this.onChangeEmail} 
                                            className="textbox" />
                                    </Form.Group>
                                </Grid>
                            </Grid>
                            <div className="save-btn-div">
                                <Button type="submit" className="save-btn">
                                    Save Changes
                                </Button>
                            </div>
                        </Form>

                        {/*Deactivate Account Section*/}
                        <Grid container
                            direction="column"
                            justify="flex-start"
                            alignItems="stretch"
                            className="deactivate-grid">
                            <Grid item>
                                <h4 className="deactivate-heading">Deactivate Account</h4>
                            </Grid>
                            <Grid item>
                                <Grid container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center">
                                    <Grid item>
                                        <text className="deactivate-text">Delete your account and all data</text>
                                    </Grid>
                                    <Grid item>
                                        <Form onSubmit={this.onDeactivate}>
                                            <Button className="deactivate-btn" type="submit">
                                                Deactivate
                                            </Button>
                                        </Form>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Body>
                </div>
            </BrowserRouter >
        );
    }
}
export default Account;