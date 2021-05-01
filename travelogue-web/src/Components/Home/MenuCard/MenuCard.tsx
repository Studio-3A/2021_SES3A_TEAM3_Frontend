import "bootstrap/dist/css/bootstrap.min.css";
import "./MenuCard.css";
import LocationIcon from "../../../Images/location-ico.svg";
import CalendarIcon from "../../../Images/calendar-ico.svg";
import BudgetIcon from "../../../Images/budget-ico.svg";
import PeopleIcon from "../../../Images/people-ico.svg";
import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import DatePicker from "react-datepicker";
import { TripGenerationInputs, Coordinate } from "travelogue-utility";

import "react-datepicker/dist/react-datepicker.css";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { generateTrip } from "../../BackEndLogic/APICaller";

//TODO we should all for budget and number of people to be drop with suggested values
const searchOptions = {
  types: ["(cities)"],
  componentRestrictions: { country: "au" },
};

const MenuCard = () => {
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");

  const [open, setOpen] = useState(false);

  const currentDate = new Date();
  const newDate = new Date(currentDate);
  newDate.setDate(currentDate.getDate() + 1);

  const [startDate, setStartDate] = useState<Date>(currentDate);
  const [endDate, setEndDate] = useState<Date>(newDate);

  enum Range {
    Start,
    End,
  }

  const setDate = (date: Date | [Date, Date] | null, type: Range) => {
    if (date == null || date instanceof Array) {
      return;
    }
    if (type === Range.Start) {
      setStartDate(startDate);
    } else if (type === Range.End) {
      setEndDate(startDate);
    } else {
      throw Error(`Unhandled location type ${type}`);
    }
  };

  const [budget, setBudget] = useState<number>(0);
  const [numPeople, setNumPeople] = useState<number>(1);

  const [startCoordinate, setStartCoordinate] = useState<Coordinate | undefined>(undefined);

  const [endCoordinate, setEndCoordinate] = useState<Coordinate | undefined>(undefined);

  const handleLocationChange = async (value: string, type: Range) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    if (type === Range.Start) {
      setStartAddress(value);
      setStartCoordinate(latLng);
    } else if (type === Range.End) {
      setEndAddress(value);
      setEndCoordinate(latLng);
    } else {
      throw Error(`Unhandled location type ${type}`);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const testing = ["Sydney", "Melbourne", "Brisbane"];
  const listItems = testing.map(item => <div>{item}</div>);

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    if (!startCoordinate || !endCoordinate) {
      // probably show some error here
      return;
    }
    const tripObject: TripGenerationInputs = {
      startLocation: startCoordinate,
      endLocation: endCoordinate,
      startDate: startDate.getTime(),
      endDate: endDate.getTime(),
      budget: budget,
      numberOfPeople: numPeople,
    };
    console.log(tripObject);
    // const result = await generateTrip(tripObject);
    // console.log(result);
  };

  const decrementNumPeople = () => setNumPeople(numPeople - 1);

  const incrementNumPeople = () => setNumPeople(numPeople + 1);

  const handleNumPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNumPeople(Number(e.target.value));
  };

  return (
    <div className="searchcard">
      <div className="searchtop">
        <div className="left-searchcard">
          <div className="inputbox">
            <PlacesAutocomplete
              value={startAddress}
              onChange={setStartAddress}
              onSelect={v => handleLocationChange(v, Range.Start)}
              searchOptions={searchOptions}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="placedropdown">
                  <img src={LocationIcon} className="search-icon" alt="locationIcon" />
                  <input className="locationsearch" {...getInputProps({ placeholder: "Start location" })} />

                  <div className="selecter">
                    {loading ? <div>loading...</div> : null}
                    {suggestions.map(suggestion => (
                      <div className="dropdown-item" {...getSuggestionItemProps(suggestion)}>
                        {suggestion.description}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
          <hr className="line-vertical" />
          <div className="inputbox">
            <PlacesAutocomplete
              value={endAddress}
              onChange={setEndAddress}
              onSelect={v => handleLocationChange(v, Range.End)}
              searchOptions={searchOptions}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="placedropdown">
                  <img src={LocationIcon} className="search-icon" alt="locationIcon" />
                  <input className="locationsearch" {...getInputProps({ placeholder: "End Location" })} />

                  <div className="selecter">
                    {loading ? <div>loading...</div> : null}
                    {suggestions.map(suggestion => (
                      <div className="dropdown-item" {...getSuggestionItemProps(suggestion)}>
                        {suggestion.description}
                      </div>
                    ))}
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
              selectsRange={false}
              dateFormat="dd/MM/yyyy"
              onChange={startDate => setDate(startDate, Range.Start)}
              minDate={new Date()}
            />
          </div>
          <hr className="line-vertical" />
          <div className="inputbox">
            <img src={CalendarIcon} className="search-icon" alt="locationIcon" />
            <DatePicker
              className="datepicker"
              placeholderText="End Date"
              selected={endDate}
              onChange={endDate => setDate(endDate, Range.End)}
              dateFormat="dd/MM/yyyy"
              minDate={startDate}
            />
          </div>
        </div>
        <div className="left-searchcard">
          <div className="inputbox">
            <img src={BudgetIcon} className="search-icon" alt="locationIcon" />
            <input type="text" onChange={b => setBudget(Number(b.target.value))} placeholder="Your Budget" />
          </div>
          <hr className="line-vertical" />
          <div className="inputbox">
            <div className="test">
              <img src={PeopleIcon} className="search-icon" alt="locationIcon" />
              <button disabled={numPeople < 2} onClick={() => decrementNumPeople()} className="btn">
                -
              </button>

              <input
                id="numpeople"
                type="text"
                value={numPeople}
                onChange={handleNumPeopleChange}
                placeholder="People No"
              />
              <button onClick={() => incrementNumPeople()} className="btn">
                +
              </button>
            </div>
          </div>
        </div>

        <button className="searchBtn" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
