import React from 'react';
import Slider from 'react-slick';
import BackgroundImage from 'react-background-image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';
import { dataSlider } from '../../../../data-image/data';

class BoardSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
          },
        },
      ],
    };
    return (
      <div className="slider-wrapper">
        <Slider className="slider" {...settings}>
          {dataSlider.map(slide => (
            <Spring
              key={slide.name}
              config={{ duration: 2000 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props => (
                <div style={props} className="slider__block">
                  <BackgroundImage placeholder={slide.name} src={slide.img} className="slider__bg">
                    <div className="slider__bg-block-name">
                      <h2 className="slider__bg-name">{slide.name}</h2>
                    </div>
                    <Link to={`/shop/${slide.to}/${slide.id}`}>
                      <button className="slider__bg-button">Перейти</button>
                    </Link>
                  </BackgroundImage>
                </div>
              )}
            </Spring>
          ))}
        </Slider>
      </div>
    );
  }
}

export default BoardSlider;
