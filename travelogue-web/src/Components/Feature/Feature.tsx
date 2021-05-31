import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feature.css";
import Features1 from "../../Images/features1.png";
import Features2 from "../../Images/features2.png";
import Features3 from "../../Images/features3.png";
import Features4 from "../../Images/features4.png";


const Body = styled.body`
  background-color: white;
  background-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  color: black;
`;

class Feature extends React.Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <Body className="body">
          <div className="breadcrumb-container">
            <div className="breadcrumb">Travelogue Features</div>
          </div>
          <div className="container">
            <div className="row">
              <div className="column-66">
                <h1 className="large-font">
                  <b>BOOKING A TRIP IS SO EASY!</b>
                </h1>
                <p>
                Trips are generated based off your inputs. 
                Our Machine Learning algorithm is great at generating and recommending trips.
                </p>
                <button className="button">Download Travelogue</button>
              </div>
              <div className="column-33">
                <img className="mockup1-img" src={Features1}></img>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="column-33">
                <img className="mockup2-img" src={Features2}></img>
              </div>
              <div className="column-66">
                <div className="vertical-centre">
                  <h1 className="large-font">
                    <b>MEET AND TALK TO OTHER TRAVELLERS</b>
                  </h1>
                  <p>
                  Share your past experiences with other Travelogers and express your excitement 
                  for upcoming trips!
                  </p>
                </div>
                <button className="button">Download Travelogue</button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="column-66">
                <h1 className="large-font">
                  <b>SAVE YOUR AMAZING PAST TRIPS</b>
                </h1>
                <p>
                Trips can be saved to refer back to them later on. 
                You can also share your saved trips amongst other Travelogers!
                </p>
                <button className="button">Download Travelogue</button>
              </div>
              <div className="column-33">
                <img className="mockup1-img" src={Features4}></img>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="column-33">
                <img className="mockup2-img" src={Features3}></img>
              </div>
              <div className="column-66">
                <div className="vertical-centre">
                  <h1 className="large-font">
                    <b>COMPETE AGAINST OTHER TRAVELOGERS TO GET A SPOT ON THE LEADERBOARD</b>
                  </h1>
                  <p>
                  Compete for a spot on the leaderboard! Earn points each time you book a trip on Travelogue.
                  </p>
                </div>
                <button className="button">Download Travelogue</button>
              </div>
            </div>
          </div>
        </Body>
      </BrowserRouter>
    );
  }
}

export default Feature;
