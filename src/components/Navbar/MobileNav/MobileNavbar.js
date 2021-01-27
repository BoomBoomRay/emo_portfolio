import React from 'react';
import { Wrapper, LinkLi } from './MobileNavElement';

export default function SidebarNav({ toggleMenu, isOpen }) {
  return (
    <Wrapper isOpen={isOpen} onClick={toggleMenu}>
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
