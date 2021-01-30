import React, { useState } from 'react';
import MainNavbar from './MainNav/MainNavbar';
import MobileNavbar from './MobileNav/MobileNavbar';

export default function Navbar({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MainNavbar {...props} isOpen={isOpen} toggleMenu={toggleMenu} />
      <MobileNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
