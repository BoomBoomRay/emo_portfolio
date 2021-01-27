import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

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

const Wrapper = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

  .menu-container ul {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
    list-style: none;
  }
`;
const Icon = styled(FaTimes)`
  color: white;
`;
const LinkLi = styled(Link)`
  color: white;
  font-size: 1.5rem;
  margin-top: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: red;
  }
`;
