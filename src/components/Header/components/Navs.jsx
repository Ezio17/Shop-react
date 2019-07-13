import React from 'react';
import { NavLink } from 'react-router-dom';
import { headerNav, category } from '../../../data-image/data';
import { Link } from 'react-scroll';
import Logo from './Logo';

const Navs = props => {
  return (
    <>
      <Logo />
      {headerNav.map(title =>
        title.scrollToId === true ? (
          <Link
            key={title.name}
            className="header__title"
            to={title.to}
            smooth={true}
            duration={700}
          >
            {title.name}
          </Link>
        ) : title.name === 'Магазин' ? (
          <div
            key={title.name}
            className="header__category-block"
            onMouseOut={props.mouseOut}
            onMouseOver={props.mouseOver}
          >
            <div className={props.visibleCategory ? 'block' : 'block-none'}>
              {category.map(categ => (
                <NavLink
                  activeClassName="header__title-active"
                  to={categ.to}
                  key={categ.name}
                  className="header__category"
                >
                  {categ.name}
                </NavLink>
              ))}
            </div>
            <NavLink
              exact
              to={title.to}
              className="header__title"
              activeClassName="header__title-active"
            >
              {title.name}
            </NavLink>
          </div>
        ) : (
          <NavLink
            exact
            key={title.name}
            to={title.to}
            className="header__title"
            activeClassName="header__title-active"
          >
            {title.name}
          </NavLink>
        )
      )}
    </>
  );
};

export default Navs;
