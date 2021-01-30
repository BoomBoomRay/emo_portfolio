import React, { useEffect, useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import DropDownMenu from '../../DropdownMenu';
import { Wrapper, LinkLi } from './MainNavbarElement';

export default function Navbar({ isOpen, toggleMenu, ...props }) {
  let listener;
  const [scrollState, setScrollState] = useState('top');
  const { about, contact } = props;

  useEffect(() => {
    let isSubscribed = true;
    listener = document.addEventListener('scroll', (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (isSubscribed) {
        if (scrolled >= 120) {
          if (scrollState !== 'notTop') {
            setScrollState('notTop');
          }
        } else {
          if (scrollState !== 'top') {
            setScrollState('top');
          }
        }
      }
    });
    return () => {
      isSubscribed = false;
      document.removeEventListener('scroll', listener);
    };
  }, [scrollState]);

  return (
    <Wrapper about={about} contact={contact}>
      <h1 style={{ visibility: isOpen ? 'hidden' : 'visible' }}>Emerson Lau</h1>
      <div className='mobile-icon' onClick={toggleMenu}>
        <Hamburger isOpen={isOpen} />
      </div>
      <div className='menu-container'>
        <ul>
          <DropDownMenu scrollstate={scrollState} />
          <LinkLi scrollstate={scrollState} to='about'>
            About
          </LinkLi>
          <LinkLi scrollstate={scrollState} to='contact'>
            Contact
          </LinkLi>
        </ul>
      </div>
    </Wrapper>
  );
}
