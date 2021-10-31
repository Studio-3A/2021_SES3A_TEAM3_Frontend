const axios = require('axios');

const leaderboard = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  try {
    let resp = await fetch("http://localhost:5000/api/leaderboard", requestOptions);
    let result = await resp.json();
    return result;
  } catch (e) {
    return e;
  } finally {
  }
};


const updatePoints = async () => {
  axios.get("http://localhost:5000/api/updatePoints", { withCredentials: true }).then((res) => {
    console.log('Response', res);
  })
}

//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     credentials: 'same-origin'
//   };

//   try {
//     let resp = await fetch("http://localhost:5000/api/updatePoints", requestOptions);
//     let result = await resp.json();
//     return result;
//   } catch (e) {
//     return e;
//   } finally {
//   }
// };



// const getAllUsers = async () => {
//   axios.get("http://localhost:5000/api/getAllUsers", { withCredentials: true }).then((res) => {
//     console.log('Response', res);
//   })
// }

const getAllUsers = async () => {
  try {
    const resp = await fetch("http://localhost:5000/api/allUsers");
    const result = await resp.json();
    return result;
  } catch (e) {
    return e;
  } finally {

  }
};


const addAFriend = async (friend) => {
  const body = {
    friend: friend,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  try {
    let resp = await fetch("http://localhost:5000/api/addFriend", requestOptions);
    let result = await resp.json();
    return result;
  } catch (e) {
    return e;
  } finally {
  }
};

const removeFriend = async (friend) => {
  const body = {
    friend: friend,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  try {
    let resp = await fetch("http://localhost:5000/api/removeFriend", requestOptions);
    let result = await resp.json();
    return result;
  } catch (e) {
    return e;
  } finally {
  }
};

// const getFriendNames = async () => {
//   axios.get("http://localhost:5000/api/getFriendNames", { withCredentials: true }).then((res) => {
//     console.log('Response', res);
//   })

// };


const getFriendNames = async () => {
  axios.get("http://localhost:5000/api/getFriendNames", { withCredentials: true }).then((res) => {
    console.log('Response', res);
  })
}

// const getFriendNames = async () => {
//   const requestOptions = {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   };

//   try {
//     let resp = await fetch("/api/getFriendNames", requestOptions);
//     let result = await resp.json();

//     return result;
//   } catch (e) {

//     return e;
//   } finally {

//   }
// };






export {
  leaderboard,
  getAllUsers,
  removeFriend,
  addAFriend,
  getFriendNames,
  updatePoints
};

