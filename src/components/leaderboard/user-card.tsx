import React from "react";
import user from "@/assets/icons/user.svg";
import country from "@/assets/icons/country-icon.svg";

import Image from "next/image";
const UserCard = () => {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center gap-2">
        <Image src={user} alt="user icon" />
        <p>Teresa Harper</p>
      </div>
      <div className="flex items-center gap-2">
        <Image src={country} alt="country icon" />
        <p className="font-semibold text-sm text-[#7777]">420</p>
      </div>
    </div>
  );
};

export default UserCard;
