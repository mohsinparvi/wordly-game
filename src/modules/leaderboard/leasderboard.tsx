import LeaderCard from "@/components/leaderboard/leader-card";
import React from "react";

const LeasderBoard = () => {
  return (
    <div className="my-14">
      <div className="text-center">
        <h1 className="font-bold text-2xl    text-secondary">Leaderboard</h1>
        <h2 className="font-bold text-4xl text-primary">Our Top 10 winners</h2>
      </div>
      <LeaderCard />
    </div>
  );
};

export default LeasderBoard;
