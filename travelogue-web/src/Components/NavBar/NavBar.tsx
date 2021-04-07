import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import './NavBar.css';
import TravelogueIcon from '../../Images/travelogue-ico.svg';
import defaultProfile from '../../Images/default-profile-ico.svg';
import homeIcon from '../../Images/home-ico.svg';
import leaderboardIcon from '../../Images/leaderboard-ico.svg';
import historyIcon from '../../Images/history-ico.svg';
import savedIcon from '../../Images/saved-ico.svg';
import accountsIcon from '../../Images/accounts-ico.svg';
import settingsIcon from '../../Images/settings-ico.svg';
import logoutIcon from '../../Images/logout-ico.svg';

function NavBar() {
  return (
    <div className='App'>
      <ul>
        <li>
          <div className='iconContainer'>
            <div className='icon'>
              <img src={TravelogueIcon} />
            </div>
            <div className='iconTxt'>
              <p>Travelogue</p>
            </div>
          </div>
        </li>

        <li>
          <div className='profileContainer'>
            <div className='profileImg'>
              <img src={defaultProfile} />
            </div>
            <div className='profileTxt'>
              <p>
                Welcome to <strong>Travelogue</strong>
              </p>
            </div>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img src={homeIcon} />
            </div>
            <div className='pageLink'>
              <a href={'/'}>Home</a>
            </div>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img src={leaderboardIcon} />
            </div>
            <a href={'/leaderboard'}>Leaderboard</a>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img src={historyIcon} />
            </div>
            <a href={'/history'}>History</a>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img src={savedIcon} />
            </div>
            <a href={'/saved'}>Saved</a>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img src={accountsIcon} />
            </div>
            <a href={'/account'}>Account</a>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img src={settingsIcon} />
            </div>
            <a href={'/settings'}>Settings</a>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img src={logoutIcon} />
            </div>
            <a href={'/logout'}>Logout</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
