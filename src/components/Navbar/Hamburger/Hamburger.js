import React from 'react';
import { HamburgerDiv } from './HamburgerElement';

export default function Hamburger({ isOpen }) {
  return (
    <HamburgerDiv>
      <span className={isOpen ? 'open' : ''}></span>
      <span className={isOpen ? 'open1' : ''}></span>
      <span className={isOpen ? 'open2' : ''}></span>
    </HamburgerDiv>
  );
}
