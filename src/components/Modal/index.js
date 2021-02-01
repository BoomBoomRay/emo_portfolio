import React from 'react';
import styled from 'styled-components';

export default function Modal({ selectedImg, setSelectedImg }) {
  return (
    <Container className='backdrop' onClick={() => setSelectedImg(null)}>
      <img src={selectedImg} alt='enlarged pic' />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.9);

  img {
    display: block;
    max-width: 80%;
    max-height: 80%;
    margin: 80px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
    border: 3px solid white;
  }

  @media (max-width: 500px) {
    display: grid;
    align-items: center;
    img {
      display: block;
      max-width: 95%;
      max-height: 80%;
      margin: auto;
    }
  }
`;
