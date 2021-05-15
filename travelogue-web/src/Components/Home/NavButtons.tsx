import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

// Images
import LeftArrowIcon from '../../Images/left-btn.svg';
import RightArrowIcon from '../../Images/right-btn.svg';

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

function NavButtons() {
    return (
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
                    <IconButton className="right-arrow-btn">
                        <img src={RightArrowIcon} className="right-arrow-icon" alt="rightArrowIcon" />
                    </IconButton>
                </NavButton>
            </Grid>
        </Grid>
    )
}

export default NavButtons;