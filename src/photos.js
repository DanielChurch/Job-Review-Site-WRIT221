import React, { Component } from 'react'
import { Box, Columns, Column } from './components/components';

class Photos extends Component {
  render() {
    return (
      <Columns>
        <Column size='is-8'>
          <Box>
            <div className='title'>Photos</div>
          </Box>
        </Column>
        <Column>
        </Column>
      </Columns>
    );
  }
}

export default Photos;