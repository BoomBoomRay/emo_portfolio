import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 100px;

  h1 {
    font-family: var(--ff-primary);
    font-size: 3rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
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
    display: flex;
    letter-spacing: 1px;
    font-family: var(--ff-secondary);
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
export const LinkLi = styled(Link)`
  color: black;
  text-decoration: none;
  padding-right: 40px;
  &:hover {
    color: red;
    transition: all 0.2s ease-in-out;
  }
`;
