// TODO:
//   -  Create profile/accounts page for the user

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// Material-UI icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';

const Body = styled.body`
    background-color: white;
    background-blend-mode: multiply;
    //min-height: 100vh;
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: center;
    //font-size: calc(10px + 2vmin);
    color: black;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 5vh;
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
        alert("Successfully updated details.");
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">

                    {/*Title*/}
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={2}
                        style={{ paddingLeft: "3%" }}>
                        <Grid item>
                            <AccountCircleIcon fontSize="large" style={{ color: "blue" }} />
                        </Grid>
                        <Grid item>
                            <h3>Account Details</h3>
                        </Grid>
                    </Grid>

                    {/*Main form section*/}
                    <Body>
                        <Grid container
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <Grid item>
                                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/7727/production/_103330503_musk3.jpg" alt="profilePic" style={{ borderRadius: "50%", width: "150px", height: "150px" }} />
                            </Grid>
                            <Grid item>
                                <h4>{this.state.name}</h4>
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
                                            <PersonIcon fontSize="large" style={{ color: "blue" }} />
                                        </Grid>
                                        <Grid item>
                                            <h5>Username</h5>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Form.Group controlId="formUsername">
                                        <Form.Control type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername} />
                                    </Form.Group>
                                </Grid>
                                <Grid item>
                                    <Grid container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="baseline"
                                        spacing={1}>
                                        <Grid item>
                                            <EmailIcon fontSize="large" style={{ color: "blue" }} />
                                        </Grid>
                                        <Grid item>
                                            <h5>Email</h5>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Form.Group controlId="formEmail">
                                        <Form.Control type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
                                    </Form.Group>
                                </Grid>
                            </Grid>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button variant="primary" type="submit" className="button" style={{ width: "20vw" }}>
                                    Save Changes
                                </Button>
                            </div>
                        </Form>

                        {/*Deactivate Account Section*/}
                        <Grid container
                            direction="column"
                            justify="flex-start"
                            alignItems="stretch"
                            style={{paddingTop: "40px"}}>
                            <Grid item>
                                <h4>Deactivate Account</h4>
                            </Grid>
                            <Grid item>
                                <Grid container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center">
                                    <Grid item>
                                        <text>Delete your account and all data.</text>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="danger" className="button" style={{ width: "20vw" }}>
                                            Deactivate
                                        </Button>
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