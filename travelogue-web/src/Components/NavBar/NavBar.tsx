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
import friendsIcon from '../../Images/friendsico.svg';
import settingsIcon from '../../Images/settings-ico.svg';
import logoutIcon from '../../Images/logout-ico.svg';
import { GetUser } from '../../Auth/AuthContext';
import axios, { AxiosResponse } from 'axios';



function NavBar() {
  const user = GetUser();
  const avatarURL = user?.userImage || defaultProfile;

  const signOut = () => {
    axios.get('http://localhost:5000/auth/logout', { withCredentials: true }).then((res: AxiosResponse) => {
        if(res.data){
            console.log(res.data);
            window.location.href = '/'
        }
    });
}

  return (
    user ? (
      <div className='nav-content'>
        <div className='navbarCol'>
          <div className='navHeader'>
            <div className='icon'>
              <img alt='travelogueIcon' src={TravelogueIcon} />
            </div>
            <div className='iconTxt'>
              <p>Travelogue</p>
            </div>
          </div>
          <div className='navProfile'>
            <div className='profileImg'>
              <img className='avatarIcon' alt='profileIcon' src={avatarURL} />
            </div>
            <div className='profileTxt'>
              <p>
                Welcome to <b>Travelogue</b>
              </p>
            </div>

            <div className='navPages'>
              <Link to='/home'>
                <div className='pageContainer'>
                  <div className='pageImage'>
                    <img alt='homeIcon' src={homeIcon} />
                  </div>
                  <div className='pageLink'>
                    <span>Home</span>
                  </div>
                </div>
              </Link>

              <Link to='/leaderboard'>
                <div className='pageContainer'>
                  <div className='pageImage'>
                    <img alt='leaderboardIcon' src={leaderboardIcon} />
                  </div>
                  <div className='pageLink'>
                    <span>Leaderboard</span>
                  </div>
                </div>
              </Link>

              <Link to='/history'>
                <div className='pageContainer'>
                  <div className='pageImage'>
                    <img alt='historyIcon' src={historyIcon} />
                  </div>
                  <div className='pageLink'>
                    <span>History</span>
                  </div>
                </div>
              </Link>

              
              <Link to='/friendslist'>
                <div className='pageContainer'>
                  <div className='pageImage'>
                    <img alt='accountsIcon' src={friendsIcon} />
                  </div>

                  <div className='pageLink'>
                    <span>Friends List</span>
                  </div>
                </div>
              </Link>

              <Link to='/account'>
                <div className='pageContainer'>
                  <div className='pageImage'>
                    <img alt='accountsIcon' src={accountsIcon} />
                  </div>

                  <div className='pageLink'>
                    <span>Account</span>
                  </div>
                </div>
              </Link>

              <Link to='/' onClick={() => signOut()}>
                <div className='pageContainer'>
                  <div className='pageImage'>
                    <img alt='logoutIcon' src={logoutIcon} />
                  </div>
                  <div className='pageLink'>
                    <span>Logout</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
}

export default NavBar;