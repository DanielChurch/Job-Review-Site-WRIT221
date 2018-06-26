import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.title}</p>
            <button
              aria-label="close"
              className="delete"
              onClick={() => this.props.onExitClicked()}
            />
          </header>
          <section className="modal-card-body">{this.props.children}</section>
          <footer className="modal-card-foot">
            {this.props.footerContent}
          </footer>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onExitClicked: PropTypes.func,
  footerContent: PropTypes.element,
  title: PropTypes.object
};

export default Modal;
