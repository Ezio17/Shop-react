import React from 'react';
import Title from '../../Title';
import ItemCard from '../../ItemCard';
import { Spring } from 'react-spring/renderprops';

const SimilarItem = props => {
  return (
    <>
      <Title className="item-similar__title">Подібні товари</Title>
      <div className="item-similar__bg-warpper">
        {props.similarItem.map(item => (
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
    </>
  );
};

export default SimilarItem;
