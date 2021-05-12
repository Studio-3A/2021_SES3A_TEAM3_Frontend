// TODO:
//   -  Create saved trips page

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardMedia';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SavedTrips.css';

// Images
import SavedTripsIcon from "../../Images/saved-trips-heart1.svg";
import SceneImage1 from "../../Images/saved-trips-scene1.svg";
import PinIcon from "../../Images/saved-trips-pin.svg";
import MoneyIcon from "../../Images/saved-trips-money.svg";
import GroupIcon from "../../Images/saved-trips-group.svg";


interface State {
    name: string,
    username: string,
    email: string
}

// TODO:
class SavedTrips extends React.Component<{}, State> {

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
                <div className="SavedTrips">

                    {/*Title*/}
                    <div className="st-title-div">
                        <div className="st-padding-right-20px">
                            <img src={SavedTripsIcon} className="st-icon" alt="savedTripsIcon"/>
                        </div>
                        <div>
                            <h3 className="st-title-text">Saved Trips</h3>
                        </div>
                    </div>

                    {/*Main body*/}
                    <Card className="st-card" style={{ borderRadius: "10px", boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.35)" }}>
                        <div>
                            <CardMedia>
                                <img src={SceneImage1} className="scene-image" alt="scene1" />
                            </CardMedia>
                            <CardContent className="st-card-content">
                                <div className="st-card-title-div">
                                    <div>
                                        <img src={PinIcon} className="pin-icon" alt="pinIcon" />
                                    </div>
                                    <div>
                                        <text className="st-card-text1">Byron Bay</text>
                                    </div>
                                </div>
                                <div className="st-card-desc-div">
                                    <text className="st-card-text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</text><br/>
                                </div>
                                <div className="st-card-text-div">
                                    <div>
                                        <img src={MoneyIcon} className="money-icon" alt="moneyIcon" />
                                    </div>
                                    <div>
                                        <text className="st-card-text-cat">Price: </text>
                                        <text className="st-card-text2">$300 per person</text>
                                    </div>
                                </div>
                                <div className="st-card-text-div">
                                    <div>
                                        <img src={GroupIcon} className="group-icon" alt="groupIcon" />
                                    </div>
                                    <div>
                                        <text className="st-card-text-cat">Number of People: </text>
                                        <text className="st-card-text2">Suitable for up to 10 people</text>
                                    </div>
                                </div>
                                <Button className="st-view-btn">
                                    View more
                                </Button>
                            </CardContent>
                        </div>
                    </Card>
                    
                </div>
            </BrowserRouter >
        );
    }
}
export default SavedTrips;