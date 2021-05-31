import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import Mockup1 from "../../Images/mockup1-about.svg";
import Mockup2 from "../../Images/mockup2-about.png";

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
          <div className="breadcrumb-container">
            <div className="breadcrumb">About Travelogue</div>
          </div>
          <div className="container">
            <div className="row">
              <div className="column-66">
                <h1 className="large-font">
                  <b>WHO WE ARE</b>
                </h1>
                <p>
                  We connect partners big and small to travellers, giving access
                  to data, tools and technology that empowers, maximizes
                  potential and builds their business. Travelogue can be used to
                  save time and money; trips can be generated instantly using
                  our AI Trip Generator algorithm.
                </p>
                <button className="button">Download Travelogue</button>
              </div>
              <div className="column-33">
                <img className="mockup1-img" src={Mockup1}></img>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="column-33">
                <img className="mockup2-img" src={Mockup2}></img>
              </div>
              <div className="column-66">
                <div className="vertical-centre">
                  <h1 className="large-font">
                    <b>OUR MISSION</b>
                  </h1>
                  <p>
                    We believe travel is a force for good. When we power more
                    travel, we unleash more opportunities to strengthen
                    connections, broaden horizons and bridge. No matter who you
                    are, or where you are going, Travelogue will help every type
                    of traveler not only find the trip that’s right for them,
                    but get the best value every time.
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

export default About;
