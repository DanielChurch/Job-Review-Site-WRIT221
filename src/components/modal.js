import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Modal extends Component {
  static propTypes = {
    onExitClicked: PropTypes.func,
    footerContent: PropTypes.element,
    title: PropTypes.object
  };

  render() {
    return (
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{this.props.title}</p>
            <button class="delete" aria-label="close" onClick={() => this.props.onExitClicked()}></button>
          </header>
          <section class="modal-card-body">
            {this.props.children}
          </section>
          <footer class="modal-card-foot">
            {this.props.footerContent}
          </footer>
        </div>
      </div>
    );
  }
}

export default Modal;