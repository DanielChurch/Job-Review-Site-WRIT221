import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav, {
  NavItem,
  NavDropdown,
  NavDropdownItem
} from './components/nav.js';
import * as firebase from 'firebase';
import { NavLink } from 'react-router-dom';

import { Button } from './components/components';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.tabs = {
      Overview: 'overview',
      Salaries: 'salaries',
      Reviews: 'reviews',
      Questions: 'questions',
      Photos: 'photos'
    };

    this.state = { user: this.props.user };
  }

  componentDidUpdate(_, lastState) {
    if (
      lastState.user &&
      this.props.user &&
      lastState.user.displayName === this.props.user.displayName
    )
      return;

    this.setState({ user: this.props.user });
  }

  renderUserInfo() {
    if (this.state.user) {
      return (
        <div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <img src={this.state.user.photoURL} />
              {/* <Icon glyph='fas fa-user'/> */}
            </a>
            <NavDropdown isRight={true}>
              <NavDropdownItem
                onClick={() => {
                  firebase.auth().signOut();
                  this.setState({ user: null });
                }}
              >
                {' '}
                Sign out{' '}
              </NavDropdownItem>
            </NavDropdown>
          </div>
        </div>
      );
    }

    return (
      <Button
        type="is-primary"
        onClick={() => {
          firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(result => {
              this.setState({ user: result.user });
            });
        }}
      >
        {' '}
        Log in{' '}
      </Button>
    );
  }

  renderEndNavContent() {
    return (
      <NavItem>
        <NavItem> Contact Us </NavItem>
        <div className="field is-grouped">
          <p className="control">{this.renderUserInfo()}</p>
        </div>
      </NavItem>
    );
  }

  renderNav() {
    return (
      <Nav endContent={this.renderEndNavContent()}>
        {Object.keys(this.tabs).map(item => {
          return (
            <NavItem key={item}>
              <NavLink
                to={this.tabs[item]}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <NavItem
                  style={{
                    padding: '0px 0px 0px 0px',
                    margin: '0px 0px 0px 0px'
                  }}
                >
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
    return this.renderNav();
  }
}

NavBar.propTypes = {
  user: PropTypes.object
};

export default NavBar;
