import React from 'react';
import Table from './BasketConponents/Table';
import TogetherPrice from './BasketConponents/TogetherPrice';
import BasketNumber from './BasketConponents/BasketNumber';

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearNumber = this.clearNumber.bind(this);
  }

  handleChange(event) {
    this.setState({ phone: event.target.value });
  }

  clearNumber() {
    this.setState({
      phone: '',
    });
  }

  render() {
    return (
      <div className="basket-wrapper">
        <Table />
        <BasketNumber value={this.state.phone} handleChange={this.handleChange} />
        <TogetherPrice phoneNumber={this.state.phone} clearNumber={this.clearNumber} />
      </div>
    );
  }
}

export default Basket;
