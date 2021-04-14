import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardMedia';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

import LocationIcon from '../../Images/location-ico.svg';
import CalendarIcon from '../../Images/calendar-ico.svg';
import BudgetIcon from '../../Images/budget-ico.svg';
import PeopleIcon from '../../Images/people-ico.svg';
import SettingsIcon from '../../Images/settings-ico2.svg';
import SearchIcon from '../../Images/search-ico.svg';

const StyledButton1 = styled.button`
    padding: 0;
    border: none;
    background: none;
    height: 64px;
    width: 64px;
    /* Smooth Blue */
    background: linear-gradient(115.74deg, #83C2FE 1.79%, #3672F8 100%);
    border-radius: 10px;
`;

const StyledButton2 = styled.button`
    padding: 0;
    border: none;
    background: none;
    height: 64px;
    width: 64px;
    /* Turquoise Blue */
    background: linear-gradient(115.74deg, #14F1D9 1.79%, #3672F8 100%);
    border-radius: 10px;
`;

function MenuCard() {
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
                                <Grid item className="spacer-right">
                                    <text className="menu-card-text">
                                        Where do you want to go?
                                    </text>
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
                                    <text className="menu-card-text">
                                        Duration of the trip
                                    </text>
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
                                    <text className="menu-card-text">
                                        Budget
                                    </text>
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
                                    <text className="menu-card-text">
                                        Number of people
                                    </text>
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
                                <img src={SearchIcon} className="search-icon" alt="searchIcon" />
                            </IconButton>
                        </StyledButton2>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MenuCard;