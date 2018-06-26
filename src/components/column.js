import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Column extends Component {
  render() {
    return (
      <div {...this.props} className={`column ${this.props.size}`}>
        {this.props.children}
      </div>
    );
  }
}

Column.propTypes = {
  size: PropTypes.string
};

export default Column;
