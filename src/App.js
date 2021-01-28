import React from 'react';
import styled from 'styled-components';
import { Dashboard, Contact, Error, About } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 100px;
`;
