import React from 'react';
import { Link } from 'react-router-dom';
import { BasketItems } from '../../../../App';

const InfoAboutItem = props => {
  return props.item.map(item => (
    <div key={item.id} className="item__wrapper-info">
      <h2 className="item__name">{item.name}</h2>
      <p className="item__info">{item.info}</p>
      <Link to={`/shop/${item.to}`}>
        <p className="item__category">{item.category}</p>
      </Link>
      <p className="item__price">{item.price}</p>
      <div className="item__wrapper-add">
        <div className="item__wrapper-count">
          <button className="item__count-plus-minus" onClick={props.decrease}>
            -
          </button>
          <p className="item__count">{props.count}</p>
          <button className="item__count-plus-minus" onClick={props.increase}>
            +
          </button>
        </div>
        <BasketItems.Consumer>
          {value => (
            <button onClick={() => value.setItemInBasket(item, props.count)} className="item__add">
              В корзину
            </button>
          )}
        </BasketItems.Consumer>
      </div>
    </div>
  ));
};

export default InfoAboutItem;
