import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { leaderboard } from '../../APIFetchers';
import LeaderBoardHeader from '../../Images/leaderheader.png';

import '../../App.css';
import './Leaderboard.css';


import SkeletonCard from '../Common/SkeletonLoad/Skeleton';
import LeaderCard from '../Common/LeaderCard/LeaderCard';
import { ContactSupportOutlined } from '@material-ui/icons';
// const ConfettiGenerator = require('confetti-js');
import ConfettiGenerator from 'confetti-js';

const LeaderBoard = () => {
  const [loading, setLoading] = useState(false);
  const [topUsers, setTopUsers] = useState([]);

  const populateLeaderboard = async () => {
    setLoading(true);
    console.log("Loading the scores");
    //Placeholder backend api skeleton code
    let leaders = await leaderboard();
    console.log(leaders);
    leaders = leaders.map((leader, i) => <LeaderCard key={leader._id} name={leader.firstName} xp={leader.experiencePoints} place={i} />);

    // leaders = leaders.map((leader: any, i: any) => <LeaderCard key={leader.firstName} name={leader.firstName} xp={leader.experiencePoints} place={i} />);
    setTopUsers(leaders);
    // console.log(topUsers);
    setLoading(false);
  }

  useEffect(() => {
    populateLeaderboard();
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    return () => confetti.clear();
  }, []);

  return (
    <div className='leaderboard'>
      <canvas id='my-canvas'></canvas>
      <img
        className='leaderboard-img card-shadow'
        src={LeaderBoardHeader}
        alt='leaderboard-background'
      ></img>

      <canvas id='my-canvas'></canvas>
      <div className='leader-content'>
        <h1 className='leader-title'>LeaderBoard</h1>
        <h4 className='leader-subtitle'>
          These users have earned the most experience points by travelling!
        </h4>
        {loading &&
          <div className="loading-card">
            <SkeletonCard />
          </div>
        }
        {!loading &&
          <div className='leader-body'>
            {topUsers}
          </div>
        }
      </div>
    </div>
  );

};

export default LeaderBoard;
