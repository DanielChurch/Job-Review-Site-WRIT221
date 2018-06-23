import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CompanyStatBox extends Component {
  static propTypes = {
    name: PropTypes.string,
    salary: PropTypes.object,
  };

  render () {
    return (
      <div>
        <div className='title has-text-centered'> {this.props.name} </div>
        <div class="is-ancestor has-text-centered">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <section class="info-tiles">
                <div class="tile is-ancestor has-text-centered">
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">${this.props.salary.average}k</p>
                      <p class="subtitle">National Average</p>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">${this.props.salary.median}k</p>
                      <p class="subtitle">National Median</p>
                    </article>
                  </div>
                </div>
                <div class="tile is-ancestor has-text-centered">
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">${this.props.salary.low}</p>
                      <p class="subtitle">National Minimum</p>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">${this.props.salary.high}k</p>
                      <p class="subtitle">National Maximum</p>
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

export default CompanyStatBox;