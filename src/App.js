import React from 'react';
import { Dashboard, Contact, Error, About } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
