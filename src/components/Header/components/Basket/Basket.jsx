import React from 'react';
import Table from './BasketConponents/Table';
import TogetherPrice from './BasketConponents/TogetherPrice';
import BasketNumber from './BasketConponents/BasketNumber';
import { BasketItems } from '../../../../App';

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      screenWidth: window.innerWidth,
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearNumber = this.clearNumber.bind(this);
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  handleChange(event) {
    this.setState({ phone: event.target.value });
  }

  clearNumber() {
    this.setState({
      phone: '',
    });
  }

  resize() {
    this.setState({ screenWidth: window.innerWidth });
  }

  render() {
    return (
      <BasketItems.Consumer>
        {value => (
          <div className="basket-wrapper">
            <Table screenWidth={this.state.screenWidth} />
            <BasketNumber value={this.state.phone} handleChange={this.handleChange} />
            <TogetherPrice
              clearBasket={value.clearBasket}
              phoneNumber={this.state.phone}
              clearNumber={this.clearNumber}
            />
          </div>
        )}
      </BasketItems.Consumer>
    );
  }
}

export default Basket;
