import React, { useEffect, useState, useContext } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import DropDownMenu from '../../DropdownMenu';
import { Wrapper, LinkLi } from './MainNavbarElement';
import ToggleButton from '../../ToggleDarkMode/index';
import { Context } from '../../../context/context';

export default function Navbar({ isOpen, toggleMenu, ...props }) {
  const [scrollState, setScrollState] = useState('top');
  const { about, contact } = props;
  const { darkMode } = useContext(Context);
  let listener;

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
    <Wrapper about={about} contact={contact} darkmode={darkMode}>
      <div
        className='nav-header-container'
        style={{ visibility: isOpen ? 'hidden' : 'visible' }}
      >
        <h1>Emerson Lau</h1>
        <ToggleButton isOpen={isOpen} />
      </div>
      <div className='mobile-icon' onClick={toggleMenu}>
        <Hamburger isOpen={isOpen} />
      </div>
      <div className='menu-container'>
        <ul>
          <DropDownMenu scrollstate={scrollState} />
          <LinkLi
            scrollstate={scrollState}
            darkmode={darkMode ? 1 : 0}
            to='about'
          >
            About
          </LinkLi>
          <LinkLi
            scrollstate={scrollState}
            darkmode={darkMode ? 1 : 0}
            to='contact'
          >
            Contact
          </LinkLi>
        </ul>
      </div>
    </Wrapper>
  );
}
