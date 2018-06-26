import React, { Component } from 'react';

class Columns extends Component {
  render() {
    return (
      <div {...this.props} className="columns">
        {this.props.children}
      </div>
    );
  }
}

export default Columns;
