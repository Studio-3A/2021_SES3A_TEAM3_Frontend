import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardMedia';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LocationIcon from '../../Images/location-ico.svg';
import CalendarIcon from '../../Images/calendar-ico.svg';
import BudgetIcon from '../../Images/budget-ico.svg';
import PeopleIcon from '../../Images/people-ico.svg';
import SettingsIcon from '../../Images/settings-ico2.svg';
import SearchIcon from '../../Images/search-ico.svg';
import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import DatePicker from "react-datepicker";
import { TripGenerationInputs, Coordinate , generateTrip} from '../BackEndLogic/APICaller';

import "react-datepicker/dist/react-datepicker.css";
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';

import { Link, useHistory } from 'react-router-dom';
import { Select } from '@material-ui/core';
const StyledButton1 = styled.button`
  padding: 0;
  border: none;
  background: none;
  height: 64px;
  width: 64px;
  /* Smooth Blue */
  background: linear-gradient(115.74deg, #83c2fe 1.79%, #3672f8 100%);
  border-radius: 10px;
`;

const StyledButton2 = styled.button`
  padding: 0;
  border: none;
  background: none;
  height: 64px;
  width: 64px;
  /* Turquoise Blue */
  background: linear-gradient(115.74deg, #14f1d9 1.79%, #3672f8 100%);
  border-radius: 10px;
`;

//TODO we should all for budget and number of people to be drop with suggested values

function MenuCard() {
    const todaysDate = null;
    const [startingAddress, setStartingAddress] = useState("");
    const [desAddress, setDesAddress] = useState("");
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate]: [Date, any] = useState<any>(null);
    const [endDate, setEndDate]: [Date, any] = useState<any>(null);
    const [budget, setBudget] = useState<number>(0);
    const [numPeople, setNumPeople] = useState<number>(0);
    const [startinglatLng, setStartingLatLng] = useState<object>({});
    const [endlatLng, setEndLatLng] = useState<object>({});
    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState(null);

    function handleClick(event: Event) {
      alert(event?.currentTarget);
      console.log(event?.currentTarget);
    }
  
    function handleClose(event: any) {
      setAnchorEl(null);
    }
    async function handleStartingSelect(value:string) {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setStartingAddress(value);
        setStartingLatLng(latLng)
    }
    async function handleDesSelect(value:string) {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setDesAddress(value);
        setEndLatLng(latLng);
    }

    function handleSubmit (evt:any)  {
        evt.preventDefault();
        const tripObject: TripGenerationInputs = {
            startLocation: startinglatLng as Coordinate,
            endLocation: endlatLng  as Coordinate,
            startDate: startDate.getTime(),
            endDate: endDate.getTime(),
            budget: budget,
            numberOfPeople: numPeople
        }
        const result = generateTrip(tripObject);
        console.log(result);
    }
    return (
        
        <Card className="menu-card" style={{borderRadius: "10px"}}>
            <CardContent>
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className="menu-card-content">
                    <Grid item>
                        <div className="menu-card-option">
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center">  
                                <Grid item className="spacer-left">
                                    <img src={LocationIcon} className="location-icon" alt="locationIcon" />
                                </Grid>
                                <Grid item  >
                                    <PlacesAutocomplete value={startingAddress} onChange={setStartingAddress} onSelect={handleStartingSelect} >
                                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                            <div>
                                                <input className="menu-card-text"  
                                                    {...getInputProps({ placeholder: "Starting location" })}
                                                />

                                                <div>
                                                   {loading? <div>...loading</div> : null}

                                                    {suggestions.map(suggestion => {    
                                                        return (<div {...getSuggestionItemProps(suggestion)}> {suggestion.description} </div> );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </PlacesAutocomplete>
                                </Grid>
                                <Grid item>
                                    <hr className="line-vertical" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="menu-card-option">
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center">  
                                <Grid item className="spacer-left">
                                    <img src={LocationIcon} className="location-icon" alt="locationIcon" />
                                </Grid>
                                <Grid item className="spacer-right">
                                    <PlacesAutocomplete value={desAddress} onChange={setDesAddress} onSelect={handleDesSelect} >
                                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                            <div>
                                                <input  className="menu-card-text"  
                                                    {...getInputProps({ placeholder: "Destination location" })}
                                                />

                                                <div>
                                                   {loading? <div>...loading</div> : null}

                                                    {suggestions.map(suggestion => {    
                                                        return (<div {...getSuggestionItemProps(suggestion)}> {suggestion.description} </div> );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </PlacesAutocomplete>
                                </Grid>
                               
                                <Grid item>
                                    <hr className="line-vertical" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="menu-card-option">
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center">
                                <Grid item className="spacer-left">
                                    <img src={CalendarIcon} className="calendar-icon" alt="calendarIcon" />
                                </Grid>
                                <Grid item className="spacer-right">

                                    <DatePicker 
                                        className="menu-card-text" 
                                        placeholderText="Start Date" 
                                        selected={startDate} 
                                        onChange = {startDate => setStartDate(startDate)}
                                        minDate = {new Date()} />
                                 
                                            
                                </Grid>
                                <Grid item>
                                    <hr className="line-vertical" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="menu-card-option">
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center">
                                <Grid item className="spacer-left">
                                    <img src={CalendarIcon} className="calendar-icon" alt="calendarIcon" />
                                </Grid>
                                <Grid item className="spacer-right">
                                    <DatePicker 
                                        className="menu-card-text" 
                                        placeholderText="End Date" 
                                        selected={endDate} 
                                        onChange = {endDate => setEndDate(endDate)} 
                                        dateFormat="dd/MM/yyyy"
                                        minDate = {startDate ? startDate : new Date()}
                                    />
                                </Grid>
                                <Grid item>
                                    <hr className="line-vertical" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="menu-card-option">
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center">
                                <Grid item className="spacer-left2">
                                    <img src={BudgetIcon} className="budget-icon" alt="budgetIcon" />
                                </Grid>
                                <Grid item className="spacer-right2">
                                    <input  
                                        type="number"
                                        pattern="[0-9]"
                                        className="menu-card-text" 
                                        name="budget"
                                        placeholder="Your budget"
                                       
                                          
                                    />
                                </Grid>
                                <Grid item>
                                    <hr className="line-vertical" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="menu-card-option">
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="center">
                                <Grid item className="spacer-left">
                                    <img src={PeopleIcon} className="people-icon" alt="peopleIcon" />
                                </Grid>
                                <Grid item className="spacer-right">
                                    <input  
                                        type="text"
                                        pattern="[0-9]"
                                        className="menu-card-text" 
                                        name="numPeople"
                                        placeholder="Number of people"  
                                          
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item className="spacer-left2">
                        <StyledButton1>
                            <IconButton>
                                <img src={SettingsIcon} className="settings-icon" alt="settingsIcon" />
                            </IconButton>
                        </StyledButton1>
                    </Grid>
                    <Grid item className="spacer-left3">
                        <StyledButton2>
                            <IconButton>
                                <img   onClick={handleSubmit} src={SearchIcon} className="search-icon" alt="searchIcon" />
                            </IconButton>
                        </StyledButton2>
                    </Grid>
                </Grid>
      </CardContent>
    </Card>
  );
}

export default MenuCard;
