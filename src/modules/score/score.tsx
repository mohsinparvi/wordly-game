import React from "react";

const Score = () => {
  return (
    <div className="rounded-lg border-t border-primary bg-white">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <h3>Username</h3>
          <p>User not logged in</p>
        </div>
        <div>
          <h3>Game ID</h3>
          <p>6576faaa7aceda167d40fd66</p>
        </div>
        <div>
          <h3>Player ID</h3>
          <p>6576faaa7aceda167d40fd66</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
