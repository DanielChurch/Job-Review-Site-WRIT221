import React, { Component } from 'react';
import { Box, Columns, Column } from './components/components';

class Questions extends Component {
  render() {
    return (
      <Columns>
        <Column size="is-8">
          <Box>
            <div className="title">Questions</div>
          </Box>
        </Column>
        <Column />
      </Columns>
    );
  }
}

export default Questions;
