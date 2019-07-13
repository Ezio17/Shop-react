import React from 'react';
import { BasketItems } from '../../../../../App';
import { Link } from 'react-router-dom';

const Table = () => (
  <BasketItems.Consumer>
    {value =>
      value.basket.length === 0 ? (
        <div className="basket-empty">
          <h1 className="basket-empty__title">Кошик порожній</h1>
          <Link to="/shop">
            <p className="basket-empty__text">Перейти в магазин для покупок</p>
          </Link>
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
                  <td className="basket__table-count">{basket.count}</td>
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
