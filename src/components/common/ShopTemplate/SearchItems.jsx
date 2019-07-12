import React from 'react';

const SearchItems = props => {
  return (
    <div className="search-items">
      <h2 className="search-items__title">{props.title}</h2>
      <input
        type="text"
        className="search-items__input"
        placeholder="search"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default SearchItems;
