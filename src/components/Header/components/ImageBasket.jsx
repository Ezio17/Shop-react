import React from 'react';
import basket from '../../../img/basket.png';
import BackgroundImage from 'react-background-image';
import { BasketItems } from '../../../App';
import { Link } from 'react-router-dom';

const ImageBasket = () => (
  <BasketItems.Consumer>
    {value =>
      value.basket.length > 0 ? (
        <Link to="/basket">
          <div className="header__basket-block">
            <BackgroundImage placeholder="basket" src={basket} className="header__basket">
              {value.basket.length > 0 && (
                <div className="header__basket-number-block">
                  <h3 className="header__basket-number">{value.basket.length}</h3>
                </div>
              )}
            </BackgroundImage>
          </div>
        </Link>
      ) : (
        <div className="header__basket-block" onClick={() => value.emptyBasket()}>
          <BackgroundImage placeholder="basket" src={basket} className="header__basket">
            {value.basket.length > 0 && (
              <div className="header__basket-number-block">
                <h3 className="header__basket-number">{value.basket.length}</h3>
              </div>
            )}
          </BackgroundImage>
        </div>
      )
    }
  </BasketItems.Consumer>
);

export default ImageBasket;
