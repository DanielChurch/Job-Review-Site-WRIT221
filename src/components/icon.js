import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Icon extends Component {
  static typedProps = {
    glyph: PropTypes.string,
    isRight: PropTypes.bool,
    size: PropTypes.string,
  }

  render() {
    console.log((this.props.isRight === true) ? 'is-right': 'is-left');

    return (
      <span class={`icon ${(this.props.isRight === true) ? 'is-right': 'is-left'} ${this.props.size}`}>
        <i class={`${this.props.glyph}`}></i>
      </span>
    );
  }
}

export default Icon;