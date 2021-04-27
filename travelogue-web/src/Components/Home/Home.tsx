// TODO:
//   -  Create profile/accounts page for the user

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

// Components
import Header from './Header/Header';
import MenuCard from './MenuCard/MenuCard';
import Categories from './TripsCategories/Categories';
import NewList from './TripsList/NewList';
import PopularList from './TripsList/PopularList';
import RecList from './TripsList/RecList';
import NavButtons from './NavButtons';

// Images
import Background from '../../Images/home-bg.svg';
import BackgroundImage from '../../Images/home-bg2.svg';
import NavBar from '../NavBar/NavBar';

const Body = styled.body`
    background-color: #FFFFFF;
    background-blend-mode: multiply;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: black;
    width:100%
    height: 100vh;
`;

const NavButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  height: 50px;
  width: 50px;
  /* Smooth Blue */
  background: #f8f8f8;
  border-radius: 50px;
  box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.25);
`;

interface State {
  name: string;
  selectedItem: string;
}

// TODO:
class Home extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      name: 'Gio',
      selectedItem: 'New',
    };

    this.onClickCategory = this.onClickCategory.bind(this);
  }
  onClickCategory(e: React.MouseEvent<HTMLHeadingElement>) {
    e.preventDefault();
    this.setState({
      selectedItem: e.currentTarget.textContent as string,
    });
  }

  render() {
    return (
      <div className='Home'>  
        <div className="top">
            <img src={BackgroundImage} className="background-layer1" alt="home-bg2" />
            <div className="menu">
             <Header name={this.state.name} />
             <MenuCard />
            </div>
        </div>
      

        <div>
            <Categories
              selectedItem={this.state.selectedItem}
              onClickCategory={this.onClickCategory}
            />
        </div>
        <div className='location-card-div'>
            {this.state.selectedItem === 'New' ? <NewList /> : null}
            {this.state.selectedItem === 'Popular' ? <PopularList /> : null}
            {this.state.selectedItem === 'Recommendations' ? <RecList /> : null}
        </div>
      </div>
    );
  }
}
export default Home;