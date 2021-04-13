// TODO:
//   -  Create profile/accounts page for the user

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

// Components
import Header from './Header';
import MenuCard from './MenuCard';
import Categories from './Categories';

// Images
import Background from '../../Images/home-bg.svg';
import BackgroundImage from '../../Images/home-bg2.svg';

const Body = styled.body`
    background-color: white;
    background-blend-mode: multiply;
    display: flex;
    flex-direction: column;
    color: black;
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
                    {console.log(this.state.selectedItem)}

                    {/*Main form section*/}
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
                    </Body>
                </div>
            </BrowserRouter >
        );
    }
}
export default Home;