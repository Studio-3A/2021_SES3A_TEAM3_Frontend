import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import ProfilePic from "../../Images/default-profile-ico.svg";

const Body = styled.body`
  background-color: white;
  background-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  color: black;
`;

class About extends React.Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <Body className="body">
          <div className="container">
            <div className="row">
              <div className="column-66">
                <h1 className="xlarge-font">
                  <b>Our Application</b>
                </h1>
                <h1 className="large-font">
                  <b>Why download it?</b>
                </h1>
                <p>
                  <span>text about travelogue</span> text about travelogue text
                  about traveloguetext about traveloguetext about travelogue
                  text about traveloguetext about traveloguetext about
                  travelogue text about traveloguetext about traveloguetext
                  about travelogue text about traveloguetext about
                  traveloguetext about travelogue text about traveloguetext
                  about traveloguetext about travelogue text about
                  traveloguetext about traveloguetext about travelogue text
                  about traveloguetext about traveloguetext about travelogue
                  text about traveloguetext about travelogue
                </p>
                <button className="button">Download Travelogue</button>
              </div>
              <div className="column-33">
                <img src={ProfilePic}></img>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
            <div className="column-66">
                <img src={ProfilePic}></img>
              </div>
              <div className="column-33">
                <h1 className="xlarge-font">
                  <b>Our Application</b>
                </h1>
                <h1 className="large-font">
                  <b>Why download it?</b>
                </h1>
                <p>
                  <span>text about travelogue</span> text about travelogue text
                  about traveloguetext about traveloguetext about travelogue
                  text about traveloguetext about traveloguetext about
                  travelogue text about traveloguetext about traveloguetext
                  about travelogue text about traveloguetext about
                  traveloguetext about travelogue text about traveloguetext
                  about traveloguetext about travelogue text about
                  traveloguetext about traveloguetext about travelogue text
                  about traveloguetext about traveloguetext about travelogue
                  text about traveloguetext about travelogue
                </p>
                <button className="button">Download Travelogue</button>
              </div>
            </div>
          </div>
        </Body>
      </BrowserRouter>
    );
  }
}

export default About;
