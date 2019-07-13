import React from 'react';
import ItemImage from './itemComponents/ItemImage';
import InfoAboutItem from './itemComponents/InfoAboutItem';
import SimilarItem from './itemComponents/SimilarItem';
import { allItem } from '../../../data-image/data';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      getCategoryFromUrl: props.match.url.split('/')[props.match.url.split('/').length - 2],
      getIdFromUrl: props.match.params.id,
    };

    this.currentItem = allItem.filter(
      item =>
        item.to === this.state.getCategoryFromUrl && item.id === Number(this.state.getIdFromUrl)
    );

    this.similarItem = allItem
      .filter(
        item =>
          item.to === this.state.getCategoryFromUrl && item.id !== Number(this.state.getIdFromUrl)
      )
      .sort(() => Math.random() - 0.5)
      .splice(0, 4);

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  componentDidUpdate(props, prevState) {
    if (this.state.getIdFromUrl !== this.props.match.params.id) {
      this.setState({
        getIdFromUrl: props.match.params.id,
        count: 1,
      });

      this.currentItem = allItem.filter(
        item =>
          item.to === this.state.getCategoryFromUrl &&
          item.id === Number(this.props.match.params.id)
      );

      this.similarItem = allItem
        .filter(
          item =>
            item.to === this.state.getCategoryFromUrl &&
            item.id !== Number(this.props.match.params.id)
        )
        .sort(() => Math.random() - 0.5)
        .splice(0, 4);
    }
  }

  increase() {
    this.setState(state => {
      return {
        count: state.count + 1,
      };
    });
  }

  decrease() {
    if (this.state.count === 1) {
      return;
    }

    this.setState(state => {
      return {
        count: state.count - 1,
      };
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="item">
        <div className="item-info">
          <ItemImage name={this.currentItem[0].name} img={this.currentItem[0].img} />
          <InfoAboutItem
            decrease={this.decrease}
            increase={this.increase}
            count={count}
            item={this.currentItem}
          />
        </div>
        <div className="item-similar">
          <SimilarItem similarItem={this.similarItem} />
        </div>
      </div>
    );
  }
}

export default Item;
