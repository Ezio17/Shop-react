import React from 'react';
import Navs from './components/Navs';
import ImageBasket from './components/ImageBasket';
import BurgerMenu from './components/BurgerMenu';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: window.innerWidth,
      visibleCategory: false,
    };

    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  mouseOver() {
    this.setState({
      visibleCategory: true,
    });
  }

  mouseOut() {
    this.setState({
      visibleCategory: false,
    });
  }

  resize() {
    this.setState({ screenWidth: window.innerWidth });
  }

  render() {
    return (
      <header className="header">
        <div className="header__block">
          <div className="header__title-block">
            {this.state.screenWidth <= 500 ? (
              <BurgerMenu />
            ) : (
              <Navs
                mouseOut={this.mouseOut}
                mouseOver={this.mouseOver}
                visibleCategory={this.state.visibleCategory}
              />
            )}
          </div>
          <ImageBasket />
        </div>
      </header>
    );
  }
}

export default Header;
