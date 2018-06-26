import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    return (
      <span
        className={`icon ${
          this.props.isRight === true ? 'is-right' : 'is-left'
        } ${this.props.size}`}
      >
        <i className={`${this.props.glyph}`} />
      </span>
    );
  }
}

Icon.propTypes = {
  glyph: PropTypes.string,
  isRight: PropTypes.bool,
  size: PropTypes.string
};

export default Icon;
