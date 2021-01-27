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
          <MenuLink>Home</MenuLink>
          <MenuLink>Portoflio1</MenuLink>
          <MenuLink>Portfoiolo2</MenuLink>
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
`;
const DropDownContainer = styled.div`
  visibility: hidden;
  background-color: #f9f9f9;
  transition: visibility 0.8s, opacity 0.5s linear;
  opacity: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover ${DropDownContainer} {
    visibility: visible;
    height: 200px;
    opacity: 1;
  }
  &:hover ${CloseIcon} {
    transform: rotate(180deg);
    transition: transform 0.5s linear;
  }
  .portfolio-div {
    display: flex;
  }
`;
