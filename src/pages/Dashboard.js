import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar, Home, Footer, Wrapper } from '../components/index';

const Dashboard = () => {
  return (
    <Wrapper>
      <Navbar />
      <Home />
      <Footer />
    </Wrapper>
  );
};
export default Dashboard;
