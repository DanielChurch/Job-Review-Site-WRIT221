import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <a
        {...this.props}
        className={`button ${this.props.type}`}
        href={this.props.href}
      >
        {this.props.children}
      </a>
    );
  }
}

Button.defaultProps = {
  type: ''
};

Button.propTypes = {
  type: PropTypes.string
};

export default Button;
