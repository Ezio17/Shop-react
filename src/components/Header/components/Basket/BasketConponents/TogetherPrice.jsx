import React from 'react';
import { BasketItems } from '../../../../../App';
import Swal from 'sweetalert2';

class TogetherPrice extends React.Component {
  constructor(props) {
    super(props);

    this.sendORder = this.sendORder.bind(this);
  }

  sendORder() {
    let regPhoneNubmer = new RegExp('^\\+380[0-9]{9}$');
    if (regPhoneNubmer.test(`${this.props.phoneNumber}`)) {
      Swal.fire({
        type: 'success',
        title: 'Замовлення відправленно',
        text: 'Ми звяжемось з Вами для підтвердження замовлення',
      });
      this.props.clearNumber();
      this.props.clearBasket();
    } else {
      Swal.fire({
        type: 'error',
        title: 'Невірний номер телефона',
      });
      this.props.clearNumber();
    }
  }

  render() {
    return (
      <BasketItems.Consumer>
        {value =>
          value.basket.length > 0 && (
            <div className="together-price">
              <div className="together-price__wrapper">
                <div className="together-price__price-block">
                  <p className="together-price__together">Разом:</p>
                  <p className="together-pric__price">{value.finalPriceAllItems} грн</p>
                </div>
                <button className="together-price__button" onClick={this.sendORder}>
                  Оформити замовлення
                </button>
              </div>
            </div>
          )
        }
      </BasketItems.Consumer>
    );
  }
}

// TogetherPrice.contextType = BasketItems;
export default TogetherPrice;
