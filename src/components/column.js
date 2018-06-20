import React, { Component } from 'react'

class Column extends Component {
  render() {
    return (
      <div {...this.props} className={`column ${this.props.size}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Column;