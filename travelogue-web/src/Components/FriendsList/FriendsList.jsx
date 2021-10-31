import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './FriendsList.css';
import FriendBG from '../../Images/friendlist.svg';
import FriendCard from '../FriendCard/FriendCard';
import Swal from "sweetalert2";

import SkeletonCard from '../Common/SkeletonLoad/Skeleton';

import Pagination from '../Common/Pagination/Pagination';

import { getAllUsers, getFriendNames, addAFriend, removeFriend } from '../../APIFetchers';


const FriendsList = (props) => {
  const [loading, setLoading] = useState(false);
  const [friendsList, setFriendsList] = useState([]);
  const [yourFriends, setYourFriends] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const populateFriendsList = async () => {
    //API call
    setLoading(true);
    let mates = await getFriendNames();
    console.log(mates);
    setYourFriends(mates);
    let users = await getAllUsers();
    console.log('Coolusers', users);
    users = users.map((user) => {
      // if (mates) {
      // const match = mates.find(i => i._id == user._id) !== undefined;
      // return <div key={user._id}>
      //   {user.fullName.toLowerCase().includes(filter.toLowerCase()) &&
      //     <FriendCard name={user.fullName} xp={user.experiencePoints} id={user._id} addFriend={addFriends} removeFriend={removeFriends} isFriend={match} />}
      // </div>
      // }
      // else {
      //   return <div> </div>
      // }
    });

    // setFriendsList(users);
  }

  // const populateYourFriends = async () => {
  //   setLoading(true);
  //   let users = yourFriends.map(user => <div key={user._id}>
  //     {user.fullName.toLowerCase().includes(filter.toLowerCase()) &&
  //       <FriendCard name={user.fullName} xp={user.experiencePoints} id={user._id} addFriend={addFriends} removeFriend={removeFriends} isFriend={true} />}
  //   </div>)
  //   setFriendsList(users);
  // }

  const addFriends = async (key) => {
    let addFriend = await addAFriend(key);

    if (addFriend.success) {
      Swal.fire(
        "Friend added",
        "Hit them up with a favour!",
        "success"
      );
      populateFriendsList();
    } else {
      Swal.fire(
        "Something went wrong...",
        addFriend.message,
        "error"
      );
    }
  }

  const removeFriends = async (key) => {
    let remFriend = await removeFriend(key);

    if (remFriend.success) {
      Swal.fire(
        "Success",
        "Friend removed",
        "success"
      );
      populateFriendsList();
    } else {
      Swal.fire(
        "Something went wrong...",
        remFriend.message,
        "error"
      );
    }
  }

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  const showAllUsers = () => {
    populateFriendsList();
  };

  const showFriends = () => {
    // populateYourFriends();
  };

  const paginate = pageNumbers => setCurrentPage(pageNumbers);

  //update on launch and when filter changes
  useEffect(() => {
    // populateFriendsList();
  }, [filter]);

  //set loading to false AFTER friends list is updated
  useEffect(() => {
    setLoading(false);
  }, [friendsList]);

  return (
    <>
      <div>
        <div className="content">
          <img className="friend-img" src={FriendBG} alt="friend-img"></img>
          <h1 className="friend-title">Friends List</h1>
          <br></br>
          <div className='nav-middle'>
            <form className='search-form'>
              <input
                type='text'
                className='search-input-friend'
                placeholder='Search for friends....'
                onChange={(e) => handleFilter(e)}
              />
            </form>
          </div>
          <button className="button-all" onClick={showAllUsers}>
            Add Friends
          </button>
          <button className="button-all" onClick={showFriends}>
            Your Friends
          </button>
          <div className='friend-bg'>

            {loading &&
              <div className="loading-card">
                <SkeletonCard />
              </div>
            }
            {!loading &&
              <div>
                <FriendCard name={"James"} xp={1333334} id={12333} isFriend={true} />
                <FriendCard name={"Greg"} xp={433553} id={124353} isFriend={true} />
                <FriendCard name={"Raj"} xp={433553} id={124353} isFriend={true} />
                <FriendCard name={"EK"} xp={433553} id={124353} isFriend={true} />
                {/* {friendsList.length !== 0 ? <>
                  {friendsList.slice(indexOfFirstPost, indexOfLastPost)}
                  <Pagination postsPerPage={postsPerPage} totalAvatarCards={friendsList.length} paginate={paginate} />
                </> : <h2 className="friends-placeholder-text">Go add some friends!</h2>} */}
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsList;