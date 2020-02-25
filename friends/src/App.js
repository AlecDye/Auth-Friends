import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';

import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="#">Protected</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Login />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
