import React from 'react';
import './App.css';
import CreateAccount from './views/CreateAccount';
import Login from './views/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
