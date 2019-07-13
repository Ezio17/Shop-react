import React from 'react';
import BoardSlider from './components/Slider';
import Category from './components/Category';
import PopularItems from './components/PopularItems';

class Home extends React.Component {
  render() {
    return (
      <main className="main">
        <BoardSlider />
        <Category />
        <PopularItems />
      </main>
    );
  }
}

export default Home;
