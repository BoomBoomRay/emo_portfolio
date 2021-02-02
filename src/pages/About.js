import React, { useContext } from 'react';
import styled from 'styled-components';
import { Navbar, Footer, Wrapper } from '../components';
import { TiSocialInstagram } from 'react-icons/ti';
import { Context } from '../context/context';

export default function About() {
  const { darkMode } = useContext(Context);

  return (
    <Wrapper about='About'>
      <Navbar about='About' />
      <Container darkmode={darkMode ? 1 : 0}>
        <div className='about-div-container'>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{' '}
          </p>
          <h2>Contact Info</h2>
          <p>
            Emerson@gmail.com <br />
            Mobile: 604 122 1222 <br />
            Social:
            <span>
              <a
                className='instagram-svg'
                href='https://instagram.com/emmolau'
                target='_'
              >
                <TiSocialInstagram
                  style={{ color: darkMode ? 'white' : 'black' }}
                />
              </a>
            </span>
          </p>
        </div>
        <div className='about-div-container'>
          <h2>Publications</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{' '}
          </p>
          <h2>Clients</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{' '}
          </p>
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
  text-align: center;

  h2 {
    color: ${({ darkmode }) => (darkmode ? 'white' : 'black')};
  }
  p {
    color: ${({ darkmode }) => (darkmode ? 'white' : 'black')};
  }
  .instagram-svg:hover {
    color: red;
  }
  .about-div-container {
    width: 100%;
  }
  .about-div-container {
    text-transform: uppercase;
    font-family: var(--ff-secondary);
  }
  .about-div-container p {
    line-height: 2rem;
    margin-bottom: 30px;
  }
  .about-div-container h2 {
    margin-bottom: 15px;
  }
  .about-div-container span {
    margin-left: 20px;
    display: inline-block;
    vertical-align: middle;
  }
  .about-div-container span a {
    color: black;
  }
  .about-div-container span a:hover {
    color: red;
  }
  @media (min-width: 500px) {
    max-width: 700px;
    margin: auto;
  }
`;
