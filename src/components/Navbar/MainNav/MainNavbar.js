import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { Wrapper, LinkLi } from './MainNavbarElement';

export default function Navbar({ isOpen, toggleMenu }) {
  return (
    <Wrapper>
      <h1>Emerson Lau</h1>
      <div className='mobile-icon' onClick={toggleMenu}>
        <Hamburger isOpen={isOpen} />
      </div>
      <div className='menu-container'>
        <ul>
          <LinkLi to='/'>Portfolio</LinkLi>
          <LinkLi to='about'>About</LinkLi>
          <LinkLi to='contact'>Contact</LinkLi>
        </ul>
      </div>
    </Wrapper>
  );
}
