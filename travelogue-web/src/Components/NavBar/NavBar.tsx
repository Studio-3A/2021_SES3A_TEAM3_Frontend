import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <a href={'/'}>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img src={homeIcon} />
              </div>
              <div className='pageLink'>
                <span>Home</span>
              </div>
            </div>
          </li>
        </a>

        <a href={'/leaderboard'}>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img src={leaderboardIcon} />
              </div>
              <span>Leaderboard</span>
            </div>
          </li>
        </a>

        <a href={'/history'}>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img src={historyIcon} />
              </div>
              <span>History</span>
            </div>
          </li>
        </a>

        <a href={'/saved'}>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img src={savedIcon} />
              </div>
              <span>Saved</span>
            </div>
          </li>
        </a>

        <a href={'/account'}>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img src={accountsIcon} />
              </div>
              <span>Account</span>
            </div>
          </li>
        </a>

        <a href={'/settings'}>
          <li>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img src={settingsIcon} />
              </div>
              <span>Settings</span>
            </div>
          </li>
        </a>

        <li>
          <button>
            <div className='pageContainer'>
              <div className='pageImage'>
                <img src={logoutIcon} />
              </div>
              <span>Logout</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
