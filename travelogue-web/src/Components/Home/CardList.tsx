import Grid from '@material-ui/core/Grid';
import LocationCard from './LocationCard';
import './Home.css';

interface State {
    selectedItem: string
}

// Dummy Data
var newList = new Array(3).fill(new Array(3).fill(["Australia Camp", "$100", "Sydney, Australia"]));
var popularList = new Array(3).fill(new Array(3).fill(["Australia Camp", "$100", "Sydney, Australia"]));
var recommendationList = new Array(3).fill(new Array(3).fill(["Australia Camp", "$100", "Sydney, Australia"]));

function CardList(props: State) {
    return (
    )
}

export default CardList;