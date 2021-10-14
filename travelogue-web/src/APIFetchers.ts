
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


export {
  leaderboard
};

