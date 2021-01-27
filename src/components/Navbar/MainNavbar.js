import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

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
const Wrapper = styled.nav`
  height: 90px;
  background-color: grey;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .mobile-icon {
    display: none;
    @media screen and (max-width: 768px) {
      z-index: 9999;
      display: block;
    }
  }
  .menu-container {
    @media screen and (max-width: 768px) {
      display: none;
    }
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .menu-container ul {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
const LinkLi = styled(Link)`
  color: white;
  text-decoration: none;
  padding-right: 30px;
`;
