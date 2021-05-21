// TODO:
//   -  Create profile/accounts page for the user

import React, { FC, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { useAuth } from '../../firebase/Auth';
import { FirstName } from './GeneratedTrip';

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

// TODO:
const Home: FC = () => {
  const auth = useAuth();
  const [selectedItem, setSelectedItem] = useState<string>('New');

  let onClickCategory = (e: React.MouseEvent<HTMLHeadingElement>) => {
    e.preventDefault();
    setSelectedItem(e.currentTarget.textContent as string);
  }
  onClickCategory = onClickCategory.bind(this);

  return (
    <div className='Home'>
      <div className='body'>
        <div className='top'>
          <Header name={FirstName()} />
        </div>
        <div className='menu'>
          <MenuCard />
        </div>

        <div>
          <Categories
            selectedItem={selectedItem}
            onClickCategory={onClickCategory}
          />
        </div>
        <div className='location-card-div'>
          {selectedItem === 'New' ? <NewList /> : null}
          {selectedItem === 'Popular' ? <PopularList /> : null}
          {selectedItem === 'Recommendations' ? <RecList /> : null}
        </div>
        {/* 
          <div>
            <div className="nav-button-div">
                <NavButtons />
            </div> 
          </div>
        */}
      </div>
    </div>
  );
}
export default Home;