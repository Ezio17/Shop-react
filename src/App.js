import React from 'react';
import './App.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Header from './components/Header/Header';
import Home from './components/Main/Home/Home';
import Shop from './components/Main/Shop/Shop';
import Footer from './components/Footer/Footer';
import HouseholdAppliancesItems from './components/Main/Shop/category/HouseholdAppliances';
import FurnitureItems from './components/Main/Shop/category/FurnitureItems';
import ElectronicsItems from './components/Main/Shop/category/ElectronicsItems';
import Item from './components/common/Item/Item';
import Basket from './components/Header/components/Basket/Basket';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export const BasketItems = React.createContext();

const MySwal = withReactContent(Swal);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      basket: [],
      finalPriceAllItems: 0,
    };

    this.addItemToBasket = this.addItemToBasket.bind(this);
    this.emptyBasket = this.emptyBasket.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  emptyBasket() {
    if (this.state.basket.length === 0) {
      Swal.fire({
        type: 'warning',
        title: 'Кошик порожній',
      });
    }
  }

  addItemToBasket(item, count) {
    item.count = count;
    let finalPrice = count * parseFloat(item.price.replace(/\s+/g, ''));
    item.finalPrice = Math.round(finalPrice);

    let repeatingItem = this.state.basket.filter(
      basket => basket.id === item.id && basket.to === item.to
    );

    if (repeatingItem.length > 0) {
      Swal.fire({
        type: 'info',
        title: 'Цей товар вже є в корзині',
        text: 'Кількість товару можна змінити в корзині',
        confirmButtonText: 'Закрити',
      });
      return;
    } else {
      this.setState({
        basket: [...this.state.basket, item],
        finalPriceAllItems: this.state.finalPriceAllItems + Math.round(finalPrice),
      });

      MySwal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Товар добавлен в корзину',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  deleteItem(item) {
    let deleteItem = this.state.basket.filter(basket => basket.img !== item.img);

    this.setState({
      basket: deleteItem,
      finalPriceAllItems: this.state.finalPriceAllItems - item.finalPrice,
    });
  }

  render() {
    this.basket = {
      basket: this.state.basket,
      setItemInBasket: this.addItemToBasket,
      emptyBasket: this.emptyBasket,
      deleteItem: this.deleteItem,
      finalPriceAllItems: this.state.finalPriceAllItems,
    };

    return (
      <BrowserRouter>
        <BasketItems.Provider value={this.basket}>
          <div className="page">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/basket" component={Basket} />
              <Route exact path="/shop/household-appliances" component={HouseholdAppliancesItems} />
              <Route exact path="/shop/furniture" component={FurnitureItems} />
              <Route exact path="/shop/electronics" component={ElectronicsItems} />
              <Route exact path="/shop/household-appliances/:id" component={Item} />
              <Route exact path="/shop/furniture/:id" component={Item} />
              <Route exact path="/shop/electronics/:id" component={Item} />
            </Switch>
            <Footer />
          </div>
        </BasketItems.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
