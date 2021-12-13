import React from "react";
import * as FaIcons from "react-icons/fa";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import SlickSlide from "./SlickSlide/CurrentLaunchpadSlick"

export default function CurrentLaunchpad(props) {
  return (
    <div className="current-launchpad flex flex-col space-y-8">
      <div className="header flex flex-col md:flex-row items-center">
        <div className="title-bar flex-grow-1">
          <h2 className="text-2xl font-bold">Current Launchpad NFTs</h2>
        </div>
        <Link className="browse flex flex-row items-center space-x-4" to={"/"}>
          <span>Browse More</span>
          <span>
            <FaIcons.FaArrowRight />
          </span>
        </Link>
      </div>
      <div className="body flex flex-col gap-4">
          <SlickSlide items={props.items}/>
      </div>
    </div>
  );
}
