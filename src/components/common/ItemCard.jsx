import React from 'react';
import ReactTooltip from 'react-tooltip';
import BackgroundImage from 'react-background-image';
import 'sweetalert2/src/sweetalert2.scss';
import { Link } from 'react-router-dom';
import { BasketItems } from '../../App';

const ItemCard = props => {
  return (
    <div className="card">
      <div style={props.style} className="card__block">
        <Link to={`/shop/${props.to}/${props.id}`}>
          <BackgroundImage placeholder={props.name} src={props.img} className="card__bg" />
        </Link>
        <div className="card__name-add">
          <Link to={`/shop/${props.to}/${props.id}`}>
            <h3 className="card__name">{props.name}</h3>
          </Link>

          <BasketItems.Consumer>
            {value => (
              <p
                data-tip="Добавити в корзину"
                onClick={() => value.setItemInBasket(props.item, 1)}
                className="card__add"
              >
                +
              </p>
            )}
          </BasketItems.Consumer>
        </div>
        <Link to={`/shop/${props.to}`}>
          <h5 className="card__category">{props.category}</h5>
        </Link>
        <h6 className="card__price">{props.price}</h6>
      </div>
      <ReactTooltip place="right" type="info" />
    </div>
  );
};

export default ItemCard;
