import React from 'react';
import { BasketItems } from '../../../../../App';

const BasketNumber = props => (
  <BasketItems.Consumer>
    {value =>
      value.basket.length > 0 && (
        <div className="basket__number-wrapper">
          <label className="basket__label">
            Номер телефона:
            <input
              value={props.value}
              onChange={props.handleChange}
              type="tel"
              className="basket__input"
              placeholder="+380123456789"
            />
          </label>
        </div>
      )
    }
  </BasketItems.Consumer>
);

export default BasketNumber;
