// TODO:
//   -  Create profile/accounts page for the user

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

// Components
import Header from './Header';
import MenuCard from './MenuCard';
import Categories from './Categories';
import LocationCard from './LocationCard';

// Images
import Background from '../../Images/home-bg.svg';
import BackgroundImage from '../../Images/home-bg2.svg';
import LocationImage1 from '../../Images/home-card-bg1.svg';
import LocationImage2 from '../../Images/home-card-bg2.svg';
import LeftArrowIcon from '../../Images/left-btn.svg';
import RightArrowIcon from '../../Images/right-btn.svg';

const Body = styled.body`
    background-color: white;
    background-blend-mode: multiply;
    display: flex;
    flex-direction: column;
    color: black;
`;

const NavButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    height: 50px;
    width: 50px;
    /* Smooth Blue */
    background: #F8F8F8;
    border-radius: 50px;
    box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.25);
`;

interface State {
    name: string,
    selectedItem: string
}

// TODO:
class Home extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);

        this.state = {
            name: 'Gio',
            selectedItem: 'New'
        };

        this.onClickCategory = this.onClickCategory.bind(this);

    }
    onClickCategory(e: React.MouseEvent<HTMLHeadingElement>) {
        e.preventDefault();
        this.setState({
            selectedItem: e.currentTarget.textContent as string
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="Home">
                    <Body className="body">
                        <div>
                            <img src={BackgroundImage} className="background-layer1" alt="home-bg2" />
                            <img src={Background} className="background-layer2" alt="home-bg" />
                        </div>
                        <div>
                            <Header name={this.state.name} />
                        </div>
                        <div>
                            <MenuCard />
                        </div>
                        <div>
                            <Categories
                                selectedItem={this.state.selectedItem}
                                onClickCategory={this.onClickCategory} />
                        </div>
                        <div className="location-card-div">
                            <Grid container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start">
                                <Grid item>
                                    <LocationCard placeName="Australia Camp" price="$100" location="Sydney, Australia" image={LocationImage1} />
                                </Grid>
                                <Grid item className="spacer-left2">
                                    <LocationCard placeName="Australia Camp" price="$100" location="Sydney, Australia" image={LocationImage2} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="nav-button-div">
                            <Grid container
                                direction="row"
                                justify="center"
                                alignItems="flex-start"
                                spacing={3}>
                                <Grid item>
                                    <NavButton>
                                        <IconButton>
                                            <img src={LeftArrowIcon} className="left-arrow-icon" alt="leftArrowIcon" />
                                        </IconButton>
                                    </NavButton>
                                </Grid>
                                <Grid item>
                                    <NavButton>
                                        <IconButton>
                                            <img src={RightArrowIcon} className="right-arrow-icon" alt="rightArrowIcon" />
                                        </IconButton>
                                    </NavButton>
                                </Grid>
                            </Grid>
                        </div>
                    </Body>
                </div>
            </BrowserRouter >
        );
    }
}
export default Home;