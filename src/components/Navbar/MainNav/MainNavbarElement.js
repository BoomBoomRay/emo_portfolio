import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  position: ${({ about, contact }) =>
    about === 'About' || contact === 'Contact' ? 'relative' : 'fixed'};
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 100px;
  .nav-header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h1 {
    font-family: var(--ff-primary);
    font-size: 3rem;
    color: ${({ darkmode }) => (darkmode ? 'white' : 'black')};
  }
  @media screen and (max-width: 800px) {
    position: relative;
    h1 {
      font-size: 2rem;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 414px) {
    h1 {
      font-size: 1.5rem;
    }
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
  color: ${({ scrollstate, darkmode }) =>
    darkmode ? 'white' : scrollstate === 'top' ? 'black' : 'white'};
  text-decoration: none;
  padding-right: 40px;
  &:hover {
    color: red;
    transition: all 0.2s ease-in-out;
  }
`;
