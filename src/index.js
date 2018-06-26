import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Salaries from './salaries/salaries';
import Overview from './overview';
import Reviews from './reviews';
import Questions from './questions';
import Photos from './photos';
import Shell from './shell';

function main() {
  const config = {
    apiKey: 'AIzaSyD_CpuHCEcrCwGi1RTeVXCrXh05p_kWuQ0',
    authDomain: 'legendarymonitor.firebaseapp.com',
    databaseURL: 'https://legendarymonitor.firebaseio.com',
    projectId: 'legendarymonitor',
    storageBucket: 'legendarymonitor.appspot.com',
    messagingSenderId: '990462121846'
  };
  firebase.initializeApp(config);

  const path = '';

  ReactDOM.render(
    <Router>
      <Shell>
        <Route exact path={path} component={Overview} />
        <Route path={`${path}/overview`} component={Overview} />
        <Route path={`${path}/salaries`} component={Salaries} />
        <Route path={`${path}/reviews`} component={Reviews} />
        <Route path={`${path}/questions`} component={Questions} />
        <Route path={`${path}/photos`} component={Photos} />
      </Shell>
    </Router>,
    document.getElementById('root')
  );
  registerServiceWorker();
}

main();
