import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../components/components';

class Positions extends Component {
  renderPositions() {
    if (this.props.positions) {
      return (
        <table
          className="table is-striped is-hoverable"
          style={{ margin: 'auto' }}
        >
          <thead>
            <tr>
              <th>Position Title</th>
              <th>Base Pay</th>
              <th>Payout Schedule</th>
              <th>Stock Options</th>
              <th>Benefits</th>
              <th>Payed Time Off</th>
            </tr>
          </thead>
          <tbody>
            {this.props.positions.map(position => {
              return (
                <tr key={position}>
                  <th>{position.title}</th>
                  <td>{position.salary}</td>
                  <td>{position.payout}</td>
                  <td>{position.stockOptions}</td>
                  <td>{position.benefits}</td>
                  <td>{position.pto}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return (
        <div> There are no positions currently. Please check back later. </div>
      );
    }
  }

  render() {
    return <Box>{this.renderPositions()}</Box>;
  }
}

Positions.propTypes = {
  positions: PropTypes.array
};

export default Positions;
