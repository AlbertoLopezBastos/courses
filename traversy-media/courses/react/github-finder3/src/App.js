import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Home from './components/pages/Home.js';
import NotFound from './components/pages/NotFound.js';
import About from './components/pages/About.js';
import Alert from './components/layout/Alert.js';
import User from './components/users/User.js';
import GithubState from './context/github/GithubState.js';
import AlertState from './context/alert/AlertState.js';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/user/:login' component={User}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
