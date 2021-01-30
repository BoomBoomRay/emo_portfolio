import React from 'react';
import styled from 'styled-components';

export default function Wrapper({ children, ...props }) {
  const { contact, about } = props;
  return (
    <Container contact={contact} about={about}>
      {children}
    </Container>
  );
}
const Container = styled.div`
  padding-top: ${({ contact, about }) =>
    contact === 'Contact' || about === 'About' ? '0px' : '200px'};
  @media (max-width: 800px) {
    padding-top: 0;
  }
`;
