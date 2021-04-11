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
              <img alt="e-1" src={TravelogueIcon} />
            </div>
            <div className='iconTxt'>
              <p>Travelogue</p>
            </div>
          </div>
        </li>

        <li>
          <div className='profileContainer'>
            <div className='profileImg'>
              <img alt="e-2" src={defaultProfile} />
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
              <img alt="e-3" src={homeIcon} />
            </div>
            <div className='pageLink'>
              <a href={'/'}>Home</a>
            </div>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img alt="e-3" src={leaderboardIcon} />
            </div>
            <a href={'/leaderboard'}>Leaderboard</a>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img alt="e-4" src={historyIcon} />
            </div>
            <a href={'/history'}>History</a>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img alt="e-5" src={savedIcon} />
            </div>
            <a href={'/saved'}>Saved</a>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img alt="e-6" src={accountsIcon} />
            </div>
            <a href={'/account'}>Account</a>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img alt="e-7" src={settingsIcon} />
            </div>
            <a href={'/settings'}>Settings</a>
          </div>
        </li>

        <li>
          <div className='pageContainer'>
            <div className='pageImage'>
              <img alt="e-8" src={logoutIcon} />
            </div>
            <a href={'/Login'}>Login</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
