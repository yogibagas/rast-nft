import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";

export default class MultipleSlick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: props.items,
    };
    console.log(props)
  }

  sliders() {
    return this.state.sliders.map((item, index) => {
      return (
        <div
          key={index}
          className="flex-imp py-16 flex-col w-full items-center content-center justify-center shadow-md bg-white"
        >
          <LazyLoadImage
            src={item.avatar.type}
            alt="Logo"
            className={`w-full mx-auto`}
            effect="blur"
          />
          <h2 className="mt-8 font-bold text-xl">{item.name}</h2>
          <h3 className="mt-4 text-md">{item.position}</h3>
        </div>
      );
    });
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="text-black">
        <Slider {...settings}>{this.sliders()}</Slider>
      </div>
    );
  }
}
