import Image from "next/image";
import React from "react";
import logo from "@/assets/icons/logo.svg";
import NavbarItem from "@/components/navbar/navbar-item";

const Navbar = () => {
  return (
    <div className="flex py-4  w-full justify-center">
      <div
        className="flex justify-between mx-auto items-center w-full max-w-[1280px]"
        // style={{ justifyContent: "space-between", maxWidth: "1200px" }}
      >
        <Image src={logo} alt="lgog" />
        <div>
          <NavbarItem />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
