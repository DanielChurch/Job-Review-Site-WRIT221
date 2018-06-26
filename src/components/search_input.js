import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: props.filterText || '',
      shouldShowFilter: false
    };
  }

  setValue(value) {
    this.setState({ filter: value });

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  resetValue() {
    this.setState({ filter: '' });
  }

  renderItems() {
    if (this.props.items) {
      return this.props.items
        .filter(
          item =>
            item.toLowerCase().startsWith(this.state.filter.toLowerCase()) &&
            this.state.filter.length != 0
        )
        .map(item => (
          <div key={item} onClick={() => this.setValue(item)}>
            {' '}
            {item}{' '}
          </div>
        ));
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div
        onBlur={() =>
          setTimeout(() => this.setState({ shouldShowFilter: false }), 200)
        }
      >
        <input
          {...this.props}
          className="input"
          onChange={event => this.setValue(event.target.value)}
          onFocus={() => this.setState({ shouldShowFilter: true })}
          value={this.state.filter}
        />
        {this.state.shouldShowFilter ? (
          <div className="autocomplete-items">{this.renderItems()}</div>
        ) : null}
      </div>
    );
  }
}

SearchInput.propTypes = {
  filterText: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func
};

export default SearchInput;
