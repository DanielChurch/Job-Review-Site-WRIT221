import React, { Component } from 'react'


class Button extends Component {
  render() {
    return (
      <a {...this.props} class={`button ${this.props.type}`} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

Button.defaultProps = {
  type: ''
}

export default Button;