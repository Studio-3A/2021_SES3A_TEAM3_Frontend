// TODO:
//   -  Create profile/accounts page for the user

import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import './Trips/Trips.css';

// Components
import Header from './Header/Header';
import MenuCard from './MenuCard/MenuCard';
import Categories, { SelectedCategory } from './TripsCategories/Categories';
import NewList from './TripsList/NewList';
import PopularList from './TripsList/PopularList';
import RecList from './TripsList/RecList';
import NavButtons from './NavButtons';
import { Activities } from './Trips/Activities';
import InteractiveMap from './Trips/InteractiveMap';
import {Trip} from 'travelogue-utility';
import { useAuth } from '../../firebase/Auth';


function FirstName() {
  const auth = useAuth();
  let username = auth.user?.displayName || '';
  let index = username.indexOf(' ');

  return username.substr(0, index);
}
// const NavButton = styled.button`
//   padding: 0;
//   border: none;
//   background: none;
//   height: 50px;
//   width: 50px;
//   /* Smooth Blue */
//   background: #f8f8f8;
//   border-radius: 50px;
//   box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.25);
// `;

// TODO:
const Home: FC = () => {
  const [trip, setTrip] = useState<Trip | undefined>(undefined);
  
  const [category, setCategory] = useState<SelectedCategory>('New');

  const onCategoryClick = (category: SelectedCategory) => setCategory(category);

  const setTripProp = (trip: Trip) => setTrip(trip);

  return (
    <div className='Home'>
      <div className='body'>
        <div className='top'>
          <Header name={FirstName()} trip={trip} />
        </div>
        <div className='menu'>
          <MenuCard setTrip={setTripProp}/>
        </div>

        {trip != null ? (
        <>
          <div>
            <InteractiveMap />
          </div>

          <div>
            <Activities trip={trip} />
          </div>
        </>
        ) : (
          <>
            <div>
              <Categories
                selected={category}
                onClick={onCategoryClick}
              />
            </div>

            <div className='location-card-div'>
              {category === 'New' && <NewList />}
              {category === 'Popular' && <PopularList />}
              {category === 'Recommendations' && <RecList />}
            </div> 
          </>
        )}
        
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
};
export default Home;