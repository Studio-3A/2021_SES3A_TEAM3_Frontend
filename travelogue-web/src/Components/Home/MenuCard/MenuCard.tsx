import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuCard.css';
import LocationIcon from '../../../Images/location-ico.svg';
import CalendarIcon from '../../../Images/calendar-ico.svg';
import BudgetIcon from '../../../Images/budget-ico.svg';
import PeopleIcon from '../../../Images/people-ico.svg';
import SettingsIcon from '../../../Images/settings-ico2.svg';
import SearchIcon from '../../../Images/search-ico.svg';
import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import DatePicker from "react-datepicker";
import { TripGenerationInputs, Coordinate , generateTrip} from '../../BackEndLogic/APICaller';

import "react-datepicker/dist/react-datepicker.css";
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';

//TODO we should all for budget and number of people to be drop with suggested values
const searchOptions = {
    types: ['(cities)'],
    componentRestrictions: {country: 'au'}
  }

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

    const [anchorEl, setAnchorEl] = useState(null);
    const testing = ["Sydney", "Melbourne", "Brisbane"];
    const listItems = testing.map(item => 
        <div>{item}</div>
    );

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
        console.log(tripObject);
        const result = generateTrip(tripObject);
       
    }

    function  decrement() {
         setNumPeople(numPeople - 1)
    }
    function  increment() {
        setNumPeople(numPeople + 1)
   }
    function handleOnChange(e:React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        setNumPeople(Number(e.target.value));
    }
    return (
        <div className="searchcard">
            <div className="searchtop">
               <div className="left-searchcard"> 
                    <div className="inputbox">
                        <PlacesAutocomplete value={startingAddress} onChange={setStartingAddress} onSelect={handleStartingSelect} searchOptions={searchOptions}>
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div className="placedropdown" >
                                    <img src={LocationIcon} className="search-icon" alt="locationIcon" />
                                    <input className="locationsearch"  
                                        {...getInputProps({ placeholder: "Start location" })}
                                    />

                                    <div className="selecter">
                                        {loading? <div >...loading</div> : null}
                                        {suggestions.map(suggestion => {    
                                            return (<div className="dropdown-item"  {...getSuggestionItemProps(suggestion)}> {suggestion.description} </div> );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    </div>
                    <hr className="line-vertical" />   
                    <div className="inputbox">
                        <PlacesAutocomplete value={desAddress} onChange={setDesAddress} onSelect={handleDesSelect} searchOptions={searchOptions}> 
   
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div className="placedropdown" >
                                    <img src={LocationIcon} className="search-icon" alt="locationIcon" />
                                    <input className="locationsearch"  
                                        {...getInputProps({ placeholder: "End Location" })}
                                    />

                                    <div className="selecter">
                                        {loading? <div >...loading</div> : null}
                                        {suggestions.map(suggestion => {    
                                            return (<div className="dropdown-item"  {...getSuggestionItemProps(suggestion)}> {suggestion.description} </div> );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    </div>                   
               </div>
               <div className="left-searchcard"> 
                    <div className="inputbox">
                        <img src={CalendarIcon} className="search-icon" alt="locationIcon" />
                        <DatePicker 
                            className="datepicker" 
                            placeholderText="Start Date" 
                            selected={startDate} 
                            dateFormat="dd/MM/yyyy"
                            onChange = {startDate => setStartDate(startDate)}
                            minDate = {new Date()} />
                    </div>
                    <hr className="line-vertical" />
                    <div className="inputbox">
                        <img src={CalendarIcon} className="search-icon" alt="locationIcon" />
                        <DatePicker 
                            className="datepicker" 
                            placeholderText="End Date" 
                            selected={endDate} 
                            onChange = {endDate => setEndDate(endDate)} 
                            dateFormat="dd/MM/yyyy"
                            minDate = {startDate ? startDate : new Date()}/>
                        
                    </div>                           
               </div>
               <div className="left-searchcard"> 
                    <div className="inputbox">
                        <img src={BudgetIcon} className="search-icon" alt="locationIcon"  />
                        <input  type="text" onChange={b => setBudget(Number(b.target.value))} placeholder="Your Budget"/>
                    </div>
                    <hr className="line-vertical" />
                    <div className="inputbox">
                       
                        <div className="test">
                            < img src={PeopleIcon} className="search-icon" alt="locationIcon" />     
                            <button disabled={numPeople <= 0 } onClick={() => decrement()} className="btn">-</button>    
                                    
                            <input id="numpeople" type="text" value={numPeople} onChange={handleOnChange} placeholder="People No"/>
                            <button onClick={() => increment()} className="btn">+</button>
                        </div>
                           
                    </div>
               </div>

               <button className="searchBtn" onClick={handleSubmit}>  Search </button> 
                       
             
               
            </div>
        </div>
    );
}

export default MenuCard;
