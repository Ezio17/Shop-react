import React from 'react';
import { BasketItems } from '../../../../../App';
import Swal from 'sweetalert2';

const TogetherPrice = props => {
  const sendORder = () => {
    let regPhoneNubmer = new RegExp('^\\+380[0-9]{9}$');
    if (regPhoneNubmer.test(`${props.phoneNumber}`)) {
      Swal.fire({
        type: 'success',
        title: 'Замовлення відправленно',
        text: 'Ми звяжемось з Вами для підтвердження замовлення',
      });
      props.clearNumber();
    } else {
      Swal.fire({
        type: 'error',
        title: 'Невірний номер телефона',
      });
      props.clearNumber();
    }
  };

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
              <button className="together-price__button" onClick={sendORder}>
                Оформити замовлення
              </button>
            </div>
          </div>
        )
      }
    </BasketItems.Consumer>
  );
};

export default TogetherPrice;
