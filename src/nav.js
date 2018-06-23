import React, { Component } from 'react'
import Nav, { NavItem, NavDropdown, NavDropdownItem } from './components/nav.js';
import * as firebase from 'firebase';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import { Icon, Button } from './components/components';

class NavBar extends Component {
  constructor(props) {
    super(props);
    
    this.tabs = {
      'Overview': 'overview',
      'Salaries': 'salaries',
      'Reviews': 'reviews',
      'Questions': 'questions',
      'Photos': 'photos',
    };

    this.state = {user: this.props.user};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({user: nextProps.user})
  }

  renderUserInfo() {
    if (this.state.user) {
      return (
        <div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <img src={this.state.user.photoURL}/>
              {/* <Icon glyph='fas fa-user'/> */}
            </a>
            <NavDropdown isRight={true}>
              <NavDropdownItem onClick={e => {
                firebase.auth().signOut();
                this.setState({user: null});
              }}> Sign out </NavDropdownItem>
            </NavDropdown>
          </div>
        </div>
      );
    }

    return (
      <Button
        type='is-primary'
        onClick={e => {
          firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {
            this.setState({user: result.user});
          });
        }}
      > Log in </Button>
    );
  }

  renderEndNavContent() {
    return (
      <NavItem>
        <NavItem> Contact Us </NavItem>
        <div class="field is-grouped">
          <p class="control">
            {this.renderUserInfo()}
          </p>
        </div>
      </NavItem>
    );
  }

  renderNav() {
    return (
      <Nav endContent={this.renderEndNavContent()}>
          {Object.keys(this.tabs).map(item => {
            return (
              <NavItem>
                <NavLink to={this.tabs[item]} style={{ textDecoration: 'none', color: 'black' }}>
                  <NavItem style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}>
                    {item}
                  </NavItem>
                </NavLink>
              </NavItem>
            );
          })}
      </Nav>
    );
  }

  render() {
    return (
     this.renderNav() 
    );
  }
}

export default NavBar;