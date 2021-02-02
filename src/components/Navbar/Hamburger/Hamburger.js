import React, { useContext } from 'react';
import { HamburgerDiv } from './HamburgerElement';
import { Context } from '../../../context/context';

export default function Hamburger({ isOpen }) {
  const { darkMode } = useContext(Context);

  return (
    <HamburgerDiv darkmode={darkMode}>
      <span className={isOpen ? 'open' : ''}></span>
      <span className={isOpen ? 'open1' : ''}></span>
      <span className={isOpen ? 'open2' : ''}></span>
    </HamburgerDiv>
  );
}
