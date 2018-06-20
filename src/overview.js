import React, { Component } from 'react'
import { Box, Columns, Column } from './components/components';

class Overview extends Component {
  render() {
    return (
      <Columns>
        <Column size='is-8'>
          <Box>
            <div className='title'>Overview</div>
          </Box>
        </Column>
        <Column>
        </Column>
      </Columns>
    );
  }
}

export default Overview;