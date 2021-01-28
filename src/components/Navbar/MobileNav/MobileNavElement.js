import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.aside`
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
    font-family: var(--ff-secondary);
  }
`;

export const LinkLi = styled(Link)`
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
