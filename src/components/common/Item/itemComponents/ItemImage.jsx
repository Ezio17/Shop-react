import React from 'react';

const ItemImage = props => {
  return (
    <div className="item__image-wrapper">
      <img src={props.img} alt={props.name} className="item__image" />
    </div>
  );
};

export default ItemImage;
