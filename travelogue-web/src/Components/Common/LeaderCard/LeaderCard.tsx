import React from 'react';
// import Avatars from '../../common/Avatars/Avatars';
import gold from '../../../Images/gold.svg';
import silver from '../../../Images/silver.svg';
import bronze from '../../../Images/bronze.svg';
import './LeaderCard.css';
import rankone from '../../../Images/rankone.svg';

interface IProps {
  name: String;
  xp: number;
  place: number,
}

const LeaderCard = ({ name, xp, place }: IProps) => {

  const colors = ['#01C48A', '#A051FB', '#FF995A'];
  const trophys = [gold, silver, bronze]

  return (
    <>
      <div className='leader-card'>
        <div className="rank" style={{ backgroundColor: colors[place] }}><p>{place + 1}</p></div>
        <div className='right-details'>
          <h4 className='leader-title-txt'>{name}</h4>
          <p className='leader-points-text'>{`${xp}XP`}</p>
          <div className='leader-card-trophy'>
            <img className='gold' src={trophys[place]} alt='gold' />
          </div>

        </div>
      </div>
    </>
  );
};





export default LeaderCard;
