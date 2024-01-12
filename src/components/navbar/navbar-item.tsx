import Image from "next/image";
import React from "react";
import settings from "@/assets/icons/settings.svg";
import graph from "@/assets/icons/graph.svg";
import hamburger from "@/assets/icons/hamburger.svg";

import Button from "../button/button";

const NavbarItem = () => {
  return (
    <div className="flex items-center gap-4 mx-4 lg:mx-0">
      <Image src={settings} alt="settings" />
      <Image src={graph} alt="graph" />
      <div className="hidden lg:flex items-center gap-4 ">
        <Button text="new game" />
        <Button text="login" />
      </div>
      <div className="block lg:hidden">
        <Image src={hamburger} alt="hamburger" className="w-10" />
      </div>
    </div>
  );
};

export default NavbarItem;
