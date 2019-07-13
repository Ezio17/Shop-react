import React from 'react';
import SearchItmes from './SearchItems';
import ShopItems from './ShopItems';

class ShopTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <main className="shop">
        <SearchItmes
          value={this.state.value}
          handleChange={this.handleChange}
          title={this.props.title}
        />
        <ShopItems value={this.state.value} items={this.props.items} />
      </main>
    );
  }
}

export default ShopTemplate;
