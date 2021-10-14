import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { leaderboard } from '../../APIFetchers';
import LeaderBoardHeader from '../../Images/leaderboard.svg';

import '../../App.css';
import './Leaderboard.css';


import LeaderCard from '../Common/LeaderCard/LeaderCard';

const LeaderBoard = () => {
  const [loading, setLoading] = useState(false);
  const [topUsers, setTopUsers] = useState([]);

  const populateLeaderboard = async () => {
    setLoading(true);

    //Placeholder backend api skeleton code
    // let leaders = await leaderboard();
    // leaders = leaders.map((leader, i) => <LeaderCard key={leader.fullName} name={leader.fullName} xp={leader.experiencePoints} place={i} />);
    // setTopUsers(leaders);
    console.log(topUsers);
    setLoading(false);
  }

  //Populate leaderboard
  // useEffect(() => {
  //   populateLeaderboard();
  // }, []);

  return (
    <div className='leaderboard'>
      <img
        className='leaderboard-img'
        src={LeaderBoardHeader}
        alt='leaderboard-background'
      ></img>

      <canvas id='my-canvas'></canvas>
      <div className='leader-content'>
        <h1 className='leader-title'>LeaderBoard</h1>
        <h4 className='leader-subtitle'>
          These users have earned the most experience points by travelling!
        </h4>
        <LeaderCard key={1} name={"Hello"} xp={4444} place={1} />
        <LeaderCard key={1} name={"Hello"} xp={4444} place={1} />
        <LeaderCard key={1} name={"Hello"} xp={4444} place={1} />
        {loading &&
          <div className="loading-card">
          </div>
        }
        {!loading &&
          <div>
            {topUsers}
          </div>
        }
      </div>
    </div>
  );

};

export default LeaderBoard;
