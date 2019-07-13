import React from 'react';
import { Spring } from 'react-spring/renderprops';
import ItemCard from '../ItemCard';

const ShopItems = props => {
  let filterItems = props.items.filter(item =>
    item.name
      .toLocaleLowerCase()
      .replace(/\s+/g, '')
      .includes(props.value.toLocaleLowerCase().replace(/\s+/g, ''))
  );

  return (
    <div className="shop-item">
      {filterItems.map(item => (
        <Spring
          key={item.name}
          from={{ opacity: 0, transform: 'translate3d(-1000%, 0, 0)' }}
          to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        >
          {props => (
            <ItemCard
              key={item.name}
              name={item.name}
              img={item.img}
              category={item.category}
              price={item.price}
              id={item.id}
              to={item.to}
              item={item}
              style={props}
            />
          )}
        </Spring>
      ))}
    </div>
  );
};

export default ShopItems;
