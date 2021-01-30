import React from 'react';
import styled from 'styled-components';
import { Navbar, Footer, Wrapper } from '../components';

export default function About() {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <div className='about-div-container'>
          <div>first blog of writing</div>
          <div>secondj blog of writing</div>
        </div>
        <div className='about-div-container'>
          <div>first blog of writing</div>
          <div>secondj blog of writing</div>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  padding: 20px;
  /* height: 100vh; */
  .about-div-container {
    border: 1px solid red;
    width: 100%;
  }
  @media (min-width: 500px) {
    width: 100%;
    max-width: 700px;
  }
  div {
  }
`;
