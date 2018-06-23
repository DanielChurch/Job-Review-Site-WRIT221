import React, { Component } from 'react'

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: props.filterText || '',
      shouldShowFilter: false,
    };
  }

  setValue(value) {
    this.setState({ filter: value });

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  resetValue() {
    this.setState({filter: ''});
  }

  renderItems() {
    if (this.props.items) {
      return this.props.items
        .filter(item => item.toLowerCase().startsWith(this.state.filter.toLowerCase()) && this.state.filter.length != 0)
        .map((item) => <div onClick={() => this.setValue(item)}> {item} </div> );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div onBlur={ (_) => setTimeout(() => this.setState({ shouldShowFilter: false }), 200) } >
        <input
          class="input"
          {...this.props}
          onChange={ (event) => {
            this.setValue(event.target.value);
          }}
          onFocus={ (event) => this.setState({ shouldShowFilter: true }) }
          value={this.state.filter}
        />
        {this.state.shouldShowFilter
        ? <div className='autocomplete-items'>
            { this.renderItems() }
          </div>
        : null}
      </div>
    );
  }
}

export default SearchInput;