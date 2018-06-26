import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompanyStatBox extends Component {
  render() {
    return (
      <div>
        <div className="title has-text-centered"> {this.props.name} </div>
        <div className="is-ancestor has-text-centered">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <section className="info-tiles">
                <div className="tile is-ancestor has-text-centered">
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">${this.props.salary.average}k</p>
                      <p className="subtitle">National Average</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">${this.props.salary.median}k</p>
                      <p className="subtitle">National Median</p>
                    </article>
                  </div>
                </div>
                <div className="tile is-ancestor has-text-centered">
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">${this.props.salary.low}</p>
                      <p className="subtitle">National Minimum</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">${this.props.salary.high}k</p>
                      <p className="subtitle">National Maximum</p>
                    </article>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

CompanyStatBox.propTypes = {
  name: PropTypes.string,
  salary: PropTypes.object
};

export default CompanyStatBox;
