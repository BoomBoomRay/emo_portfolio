import React, { useState } from 'react';
import MainNavbar from './MainNavbar';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MainNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
      <MobileNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
