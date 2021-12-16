import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Assignment from "./components/assignment.component"
import Fees from "./components/fees.component"
import Home from "./components/home.component"
import Repo from "./components/repository.component"
import Schedule from "./components/schedule.component"

import Login from "./components/login.component";
import { Header } from "./components/header.component";


function App() {

  return (
  <Router>
    <div className="App">
      <Header />

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/dpskolkata/sign-in" component={Login} />
            <Route path="/dpskolkata/home" component={Home} />
            <Route path="/dpskolkata/assignment" component={Assignment} />
            <Route path="/dpskolkata/fees" component={Fees} />
            <Route path="/dpskolkata/schedule" component={Schedule} />
            <Route path="/dpskolkata/repos" component={Repo} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;