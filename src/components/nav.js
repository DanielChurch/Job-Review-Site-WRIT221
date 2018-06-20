import React, { Component } from 'react';
import Button from './button';

export class NavItem extends Component {
  render() {
    return (
      <a {...this.props} class={`navbar-item ${this.props.isActive ? 'is-active' : ''}`} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

export class NavDropdown extends Component {
  render() {
    return (
      <div {...this.props} class={`navbar-dropdown is-boxed ${this.props.isRight ? 'is-right' : ''}`}>
        {this.props.children}
      </div>
    );
  }
}

export class NavDropdownItem extends Component {
  render() {
    return (
      <div {...this.props} class="navbar-item has-dropdown is-hoverable">
        {this.props.children}
      </div>
    );
  }
}

export default class Nav extends Component {
  render() {
    return (
      <nav class={`navbar is-transparent ${this.props.isFixed ? 'is-fixed-top' : ''}`} style={{borderBottom: '1px solid black'}}>
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src={require('../logo.png')} alt=""/>
          </a>
          <div class="navbar-burger burger" data-target="nav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id='nav' class="navbar-menu">
          <div class="navbar-start">
            {this.props.children}
          </div>

          <div class="navbar-end">
            {this.props.endContent}
          </div>
        </div>
      </nav>
    );
  }
}

Nav.defaultProps = {
  isFixed: true
}