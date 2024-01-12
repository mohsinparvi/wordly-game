import React from "react";

const Score = () => {
  return (
    <div className="rounded-lg border-t-2 border-blue bg-white relative">
      <div className="absolute -top-4 left-0 right-0 flex justify-center">
        <button className="font-bold text-base rounded-full   bg-secondary text-white p-2  ">
          You score
        </button>
      </div>
      <div className="flex justify-between items-center  flex-wrap p-10">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-base">Username</h3>
          <p className="font-normal text-sm">User not logged in</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-base">Game ID</h3>
          <p className="font-normal text-sm">6576faaa7aceda167d40fd66</p>
        </div>{" "}
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-base">Player ID</h3>
          <p className="font-normal text-sm">6576faaa7aceda167d40fd66</p>
        </div>
      </div>
      <div className="grid grid-cols-2 place-content-center">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-base">Gussess</h3>
          <p className="font-normal text-sm">-</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-base">Time</h3>
          <p className="font-normal text-sm">00:27:06:152</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
