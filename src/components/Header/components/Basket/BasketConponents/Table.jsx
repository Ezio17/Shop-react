import React from 'react';
import { BasketItems } from '../../../../../App';
import { Link } from 'react-router-dom';

const Table = props => (
  <BasketItems.Consumer>
    {value =>
      value.basket.length === 0 ? (
        <div className="basket-empty">
          <h1 className="basket-empty__title">Кошик порожній</h1>
          <Link to="/shop">
            <p className="basket-empty__text">Перейти в магазин для покупок</p>
          </Link>
        </div>
      ) : props.screenWidth <= 610 ? (
        <div className="basket">
          <table className="basket__table">
            {value.basket.map((basket, index) => (
              <tbody key={`${basket.to}/${basket.id}`}>
                <tr>
                  <th>Предмет</th>
                  <td>{index + 1}</td>
                </tr>
                <tr className="basket__tr-photo">
                  <th>Фото</th>
                  <td>
                    <Link to={`/shop/${basket.to}/${basket.id}`}>
                      <img className="basket__table-image" src={basket.img} alt={basket.name} />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th>Імя</th>
                  <td className="basket__table-name">
                    <Link to={`/shop/${basket.to}/${basket.id}`}>{basket.name}</Link>
                  </td>
                </tr>
                <tr>
                  <th>Кількість</th>
                  <td className="basket__table-count">
                    <input
                      className="basket__input-count"
                      type="number"
                      value={basket.count}
                      min="1"
                      onChange={event => value.onChangeBasketCount(basket, event)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Ціна</th>
                  <td className="basket__table-price">{basket.finalPrice} грн</td>
                </tr>
                <tr>
                  <th>Видалити</th>
                  <td>
                    <p className="basket__table-delete" onClick={() => value.deleteItem(basket)}>
                      X
                    </p>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div className="basket">
          <table className="basket__table">
            <thead>
              <tr className="basket__table-tr">
                <th>Фото</th>
                <th>Імя</th>
                <th>Кількість</th>
                <th>Ціна</th>
                <th>Видалити</th>
              </tr>
            </thead>
            <tbody className="basket__table-tbody">
              {value.basket.map(basket => (
                <tr className="basket__table-tr" key={`${basket.to}/${basket.id}`}>
                  <td>
                    <Link to={`/shop/${basket.to}/${basket.id}`}>
                      <img className="basket__table-image" src={basket.img} alt={basket.name} />
                    </Link>
                  </td>
                  <td className="basket__table-name">
                    <Link to={`/shop/${basket.to}/${basket.id}`}>{basket.name}</Link>
                  </td>
                  <td className="basket__table-count">
                    <input
                      className="basket__input-count"
                      type="number"
                      value={basket.count}
                      min="1"
                      onChange={event => value.onChangeBasketCount(basket, event)}
                    />
                  </td>
                  <td className="basket__table-price">{basket.finalPrice} грн</td>
                  <td>
                    <p className="basket__table-delete" onClick={() => value.deleteItem(basket)}>
                      X
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  </BasketItems.Consumer>
);

export default Table;
