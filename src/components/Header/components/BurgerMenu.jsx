import React from 'react';
import Menu from 'react-burger-menu/lib/menus/bubble';
import { NavLink } from 'react-router-dom';
import { navsBurgerMenu } from '../../../data-image/data';
import { Link } from 'react-scroll';
import Logo from './Logo';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      menuLinks: navsBurgerMenu,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu isOpen={this.state.menuOpen} onStateChange={state => this.handleStateChange(state)}>
        <Logo />
        {this.state.menuLinks.map(title =>
          title.scrollToId === true ? (
            <Link
              key={title.name}
              className="header__title"
              to={title.to}
              smooth={true}
              duration={700}
              onClick={() => this.closeMenu()}
            >
              {title.name}
            </Link>
          ) : (
            <NavLink
              exact
              key={title.name}
              to={title.to}
              className={title.categoryClass ? 'header__title-category' : 'header__title'}
              activeClassName="header__title-active"
              onClick={() => this.closeMenu()}
            >
              {title.name}
            </NavLink>
          )
        )}
      </Menu>
    );
  }
}

export default BurgerMenu;
