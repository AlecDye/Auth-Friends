import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';

import Login from './components/Login'
import PrivateRoute from "./components/PrivateRoute"
import Friends from './components/Friends';

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
              <Link to="/protected">Protected</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
