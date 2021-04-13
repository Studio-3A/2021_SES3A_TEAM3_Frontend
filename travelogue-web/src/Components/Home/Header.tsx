import Grid from '@material-ui/core/Grid';
import './Home.css';

interface State {
    name: string
}

function Header(props: State) {
    return (
        <Grid container
            direction="column"
            justify="center"
            alignItems="flex-start"
            className="header">
            <Grid item>
                <h6 className="header-text1">Hey, {props.name}!</h6>
            </Grid>
            <Grid item>
                <h1 className="header-text2">Let's make a trip for you</h1>
            </Grid>
        </Grid>
    )
}

export default Header;