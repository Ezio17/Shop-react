import React from 'react';
import Title from './../../../common/Title';
import { popularItems } from './../../../../data/data';
import { Spring } from 'react-spring/renderprops';
import ItemCard from './../../../common/ItemCard';

const PopularItems = () => {
  return (
    <div className="popular">
      <div>
        <Title>Популярні речі</Title>
      </div>
      <div className="popular__bg-warpper">
        {popularItems.map(item => (
          <Spring
            key={item.name}
            from={{ opacity: 0, transform: 'translate3d(-1000%, 0, 0)' }}
            to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          >
            {props => (
              <ItemCard
                name={item.name}
                img={item.img}
                category={item.category}
                price={item.price}
                to={item.to}
                id={item.id}
                item={item}
                style={props}
              />
            )}
          </Spring>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
