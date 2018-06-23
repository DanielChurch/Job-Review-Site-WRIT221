import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class NavItem extends Component {
  render() {
    return (
      <a {...this.props} className={`navbar-item ${this.props.isActive ? 'is-active' : ''}`} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

NavItem.propTypes = {
  isActive: PropTypes.bool
}

export class NavDropdown extends Component {
  render() {
    return (
      <div {...this.props} className={`navbar-dropdown is-boxed ${this.props.isRight ? 'is-right' : ''}`}>
        {this.props.children}
      </div>
    );
  }
}

NavDropdown.propTypes = {
  isRight: PropTypes.bool
}

export class NavDropdownItem extends Component {
  render() {
    return (
      <div {...this.props} className='navbar-item has-dropdown is-hoverable'>
        {this.props.children}
      </div>
    );
  }
}

export default class Nav extends Component {
  render() {
    return (
      <nav className={`navbar is-transparent ${this.props.isFixed ? 'is-fixed-top' : ''}`} style={{borderBottom: '1px solid black'}}>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img src={require('../logo.png')} alt='' />
          </a>
          <div className='navbar-burger burger' data-target='nav'>
            <span />
            <span />
            <span />>
          </div>
        </div>

        <div id='nav' className='navbar-menu'>
          <div className='navbar-start'>
            {this.props.children}
          </div>

          <div className="navbar-end">
            {this.props.endContent}
          </div>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  isFixed: PropTypes.bool,
  endContent: PropTypes.element
}

Nav.defaultProps = {
  isFixed: true
}