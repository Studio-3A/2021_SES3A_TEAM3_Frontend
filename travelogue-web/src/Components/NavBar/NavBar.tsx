import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
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
              <img alt='travelogueIcon' src={TravelogueIcon} />
            </div>
            <div className='iconTxt'>
              <p>Travelogue</p>
            </div>
          </div>
        </li>

        <li>
          <div className='profileContainer'>
            <div className='profileImg'>
              <img alt='profileIcon' src={defaultProfile} />
            </div>
            <div className='profileTxt'>
              <p>
                Welcome to <strong>Travelogue</strong>
              </p>
            </div>
          </div>
        </li>

        <Link to='/'>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img alt='homeIcon' src={homeIcon} />
              </div>
              <div className='pageLink'>
                <span>Home</span>
              </div>
            </div>
          </li>
        </Link>

        <Link to='/leaderboard'>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img alt='leaderboardIcon' src={leaderboardIcon} />
              </div>
              <span>Leaderboard</span>
            </div>
          </li>
        </Link>

        <Link to='/history'>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img alt='historyIcon' src={historyIcon} />
              </div>
              <span>History</span>
            </div>
          </li>
        </Link>

        <Link to='/saved'>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img alt='savedIcon' src={savedIcon} />
              </div>
              <span>Saved</span>
            </div>
          </li>
        </Link>

        <Link to='/account'>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img alt='accountsIcon' src={accountsIcon} />
              </div>
              <span>Account</span>
            </div>
          </li>
        </Link>

        <Link to='/settings'>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img alt='settingsIcon' src={settingsIcon} />
              </div>
              <span>Settings</span>
            </div>
          </li>
        </Link>

        <Link to='/login'>
          <li>
              <div className='pageContainer'>
                <div className='pageImage'>
                  <img alt='logoutIcon' src={logoutIcon} />
                </div>
                <span>Login</span>
              </div>
          </li>
        </Link>
          
      </ul>
    </div>
  );
}

export default NavBar;
