import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class MultipleSlick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: props.items,
    };
  }

  sliders() {
    return this.state.sliders.map((item, index) => {
      return (
        <Link
                to={item.url}
                className="card current__launchpad__item flex flex-col gap-2 hover:shadow-box pb-2 md:pb-12 transition duration-500 scale-150"
                key={index}
              >
                <div className="thumbnail">
                  <LazyLoadImage src={item.thumbnail.type} alt={item.artist}/>
                </div>
                <div className="song-detail px-1 md:px-4 flex flex-col space-y-1 md:space-y-2">
                  <div className="artist-name text-md md:text-xl font-bold">
                    {item.artist}
                  </div>
                  <div className="songTitle">{item.songTitle}</div>
                </div>
              </Link>
      );
    });
  }
  render() {
    const settings = {
      dots: true,
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
            slidesToShow: 2,
            slidesToScroll: 2
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
