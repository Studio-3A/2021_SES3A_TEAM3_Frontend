import Grid from '@material-ui/core/Grid';
import './Home.css';

interface State {
    name: string
}

function Header(props: State) {
    return (
        <div className="header">
            <h6 className="header-text1">Hey, {props.name}!</h6>
            <h1 className="header-text2">Let's make a trip for you</h1>
        </div>
    )
}

export default Header;