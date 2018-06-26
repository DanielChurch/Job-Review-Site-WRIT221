import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div {...this.props} className={`box ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Box;
