import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss'
import CardGame from './components/CardGame/CardGame';
import Home from './components/Home/Home';
import Result from './components/Result/Result';
import { Button } from 'reactstrap';




export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="button">
            <li>
              <Button color="primary">
                <Link to="/">Home</Link>
              </Button>
              
            </li>
            <li>
              <Button color="success">
                <Link to="/play">Play Anonymously</Link>
              </Button>
              
            </li>
          </ul>
        </nav>

        <Switch className="switch">
          <Route path="/play">
            <CardGame />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}