import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar({ toggleMenu }) {
  return (
    <Wrapper>
      <h1>Emerson Lau</h1>
      <div className='mobile-icon' onClick={toggleMenu}>
        <FaBars />
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
    align-items: flex-start;
    justify-content: flex-end;
  }
  .mobile-icon {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: white;
    }
  }
  .menu-container {
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
