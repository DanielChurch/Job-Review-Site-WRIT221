import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Login from './login';
import Salaries from './salaries';
import Overview from './overview';
import Reviews from './reviews';
import Questions from './questions';
import Photos from './photos';
import Shell from './shell';

import './index.css';

function main() {
  const config = {
    apiKey: "AIzaSyD_CpuHCEcrCwGi1RTeVXCrXh05p_kWuQ0",
    authDomain: "legendarymonitor.firebaseapp.com",
    databaseURL: "https://legendarymonitor.firebaseio.com",
    projectId: "legendarymonitor",
    storageBucket: "legendarymonitor.appspot.com",
    messagingSenderId: "990462121846"
  };
  firebase.initializeApp(config);
  
  ReactDOM.render((
    <Router>
      <Shell>
        <Route exact path='/' component={Salaries} />
        <Route path='/overview' component={Overview} />
        <Route path='/salaries' component={Salaries} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/questions' component={Questions} />
        <Route path='/photos' component={Photos} />
      </Shell>
    </Router>
  ), document.getElementById('root'));
  registerServiceWorker();
}

main();