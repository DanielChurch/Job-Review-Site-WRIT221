import React, { Component } from 'react'

class Icon extends Component {
  render() {
    return (
      <span class="icon">
        <i class={this.props.glyph}></i>
      </span>
    );
  }
}

export default Icon;