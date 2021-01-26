import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export default function Navbar({ toggleMenu }) {
  return (
    <Wrapper>
      <h1>Portfolio Name</h1>
      <div className='mobile-icon' onClick={toggleMenu}>
        <FaBars />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  height: 80px;
  background-color: grey;
  width: 100%;
  @media screen and (max-width: 768px) {
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
`;
