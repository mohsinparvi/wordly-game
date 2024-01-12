import React from "react";
import leadGraph from "@/assets/graph-icon.svg";
import Image from "next/image";
import UserCard from "./user-card";
const LeaderCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
      <Image src={leadGraph} alt="leaderboard graph" />
      <div className="divide-y-2 ">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default LeaderCard;
