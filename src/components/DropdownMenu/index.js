import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { RiArrowUpSLine } from 'react-icons/ri';

export default function DropDown() {
  return (
    <>
      <Wrapper>
        <div className='portfolio-div'>
          <p>Portfolio</p>
          <CloseIcon />
        </div>
        <DropDownContainer>
          <MenuLink to='/'>One</MenuLink>
          <MenuLink to='/'>Two</MenuLink>
          <MenuLink to='/'>Three</MenuLink>
        </DropDownContainer>
      </Wrapper>
    </>
  );
}

const CloseIcon = styled(RiArrowUpSLine)``;
const MenuLink = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
  @media screen and (min-width: 768px) {
    font-size: 13px;
    letter-spacing: 1px;
  }
`;
const DropDownContainer = styled.div`
  visibility: hidden;
  width: 100%;
  background-color: #f9f9f9;
  transition: visibility 0.8s, opacity 0.2s linear;
  opacity: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover ${DropDownContainer} {
    visibility: visible;
    opacity: 1;
    z-index: 999;
  }
  &:hover ${CloseIcon} {
    transform: rotate(180deg);
    transition: transform 0.3s linear;
  }
  .portfolio-div {
    display: flex;
    padding-right: 40px;
    &:hover {
      color: red;
      transition: all 0.2s ease-in-out;
    }
  }
`;
