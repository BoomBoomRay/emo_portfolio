import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/context';

export default function Footer() {
  const { darkMode } = useContext(Context);
  return (
    <Wrapper darkmode={darkMode ? 1 : 0}>
      <div>&copy; Raymond Romero</div>
      <div>All photos &copy; Emerson Lau </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  div {
    font-family: 'didot';
    color: ${({ darkmode }) => (darkmode ? 'white' : 'black')};
  }
  @media (max-width: 400px) {
    div {
      font-size: 10px;
    }
  }
`;
