import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
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
  }
`;
