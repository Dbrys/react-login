import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CreateAccount from './views/CreateAccount';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/CreateAccount">
          <CreateAccount />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
