import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar, Home } from '../components/index';

const Dashboard = () => {
  return (
    <Wrapper>
      <Navbar />
      <Home />
    </Wrapper>
  );
};
export default Dashboard;

const Wrapper = styled.main`
  height: 100vh;
`;
