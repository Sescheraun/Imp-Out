import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx'

const ShipsPage = (props) => (
  <div>
  
    <button onClick={() => props.history.push('/')}>Home</button>

    <h1>
      Ship very fresh
    </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component={HomePage} /> 
        <Route exact path = '/ships' component={ShipsPage} /> 
      </Switch>
    </div>
  );
}

export default App;
