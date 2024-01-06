import Image from 'next/image'
import React from 'react'
import logo from "@/assets/icons/logo.svg";

const Navbar = () => {
  return (
    <div>
      <Image src={logo} alt="lgog" />
        
    </div>
  )
}

export default Navbar