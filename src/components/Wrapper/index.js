import React from 'react';
import styled from 'styled-components';

export default function Wrapper({ children }) {
  return <Container>{children}</Container>;
}
const Container = styled.div`
  padding-top: 200px;
  @media (max-width: 800px) {
    padding-top: 0;
  }
`;