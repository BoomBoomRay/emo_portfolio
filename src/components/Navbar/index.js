import React, { useState } from 'react';
import MainNavbar from './MainNavbar';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>
      <MainNavbar toggleMenu={toggleMenu} />
      <MobileNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
