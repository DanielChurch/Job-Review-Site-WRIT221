import React, { Component } from 'react'

import * as firebase from 'firebase';

import NavBar from './nav';

class Shell extends Component {
  constructor(props) {
    super(props);

    firebase.auth().onAuthStateChanged(user => {
      this.setState({user: user});
    });
  }

  state = {user: null};

  render() {
    return [
      <NavBar user={this.state.user}></NavBar>,
      <div style = {{padding: '1rem'}}>
        {this.props.children}
      </div>
    ];
  }
}

export default Shell;