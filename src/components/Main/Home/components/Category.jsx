import React from 'react';
import BackgroundImage from 'react-background-image';
import Title from './../../../common/Title';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';
import { category } from '../../../../data-image/data';

const Category = () => {
  return (
    <div className="wrapper-category">
      <Title>Категорії</Title>
      <div className="category">
        {category.map(item => (
          <Spring
            key={item.name}
            from={{ opacity: 0, transform: 'translate3d(0, -1000%, 0)' }}
            to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          >
            {props => (
              <div style={props} className="category__block">
                <Link to={item.to}>
                  <BackgroundImage placeholder={item.name} src={item.img} className="category__bg">
                    <h3 className="category__name">{item.name}</h3>
                  </BackgroundImage>
                </Link>
              </div>
            )}
          </Spring>
        ))}
      </div>
    </div>
  );
};

export default Category;
