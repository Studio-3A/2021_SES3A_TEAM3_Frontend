import React from 'react';
import logo from './logo.svg';
import '../App.css';
import * as $ from 'jquery';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import telescopeLady from "./svg/telescopeLady.svg";
import Logo from "./svg/travelogueLogo.svg";
import blob1 from "./svg/frontpageBlob1.svg";
import blob2 from "./svg/frontpageBlob2.svg";

export default function frontPage() {

    return (
        <div className="container">
            <img className="frontPageBlob2" src={blob2}/>
            <img className="frontPageBlob1" src={blob1}/>
         
            <div className="header">
                <div className="logo">
                    <div className="logo-icon">
                        <img className="logoIcon" src={Logo}></img>
                    </div>
                    <div className="logo-text">
                        <p>Travelogue</p>
                    </div>
                </div>
                <div className="search"></div>
                <div className="menu-items">
                    <div className="menu-items-home">Home</div>
                    <div className="menu-items-about">About</div>
                    <div className="menu-items-features">Features</div>
                    <div className="menu-items-login btn-secondary">Login</div>
                </div>
            </div>
            <div className="main-content">
                <div className="view-landing">
                    <div className="view-landing-left">
                        <div className="left-title">
                            <h1><u>Explore</u> the world <br /> without the stress</h1>
                        </div>
                        <div className="left-description">
                            <p>Simply enter information of your current situation and travelogue will automatically generate a trip for you.</p>
                        </div>
                        <div className="left-start-button">
                            <button className="btn-secondary btn-shadow-blue">Start Now</button>
                        </div>
                    </div>
                    <div className="view-landing-right">
                        <img className="telescopeLady" src={telescopeLady}></img>
                    </div>
                </div>
                <div className="view-scroll"></div>
            </div>
        </div>
    );
}