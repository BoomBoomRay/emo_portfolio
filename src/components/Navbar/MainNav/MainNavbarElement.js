import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
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
    display: flex;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
export const LinkLi = styled(Link)`
  color: white;
  text-decoration: none;
  padding-right: 30px;
`;
