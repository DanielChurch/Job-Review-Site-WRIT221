import React, { Component } from 'react';

import * as firebase from 'firebase';

import NavBar from './nav';

class Shell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user });
    });
  }

  render() {
    return (
      <div>
        <NavBar user={this.state.user} />,
        <div style={{ padding: '1rem' }}>{this.props.children}</div>
      </div>
    );
  }
}

export default Shell;
