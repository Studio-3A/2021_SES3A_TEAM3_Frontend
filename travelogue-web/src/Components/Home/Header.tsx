import Grid from '@material-ui/core/Grid';
import './Home.css';

interface State {
    name?: string
}

function Header(props: State) {
    return (
        <div className="HeaderH">
            <h6 className="HeaderH-text1">Hey, {props.name}!</h6>
            <h1 className="HeaderH-text2">Let's make a trip for you</h1>
        </div>
    )
}

export default Header;