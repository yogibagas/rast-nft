import React from "react";
import SlickSlide from "./elements/slickSlider/SlickSlide"

export default function Body(props) {
    const launchpadArtistItems = props.artistLaunchpad
  return (
    <div className="bg-white py-16">
      <div className="wrapper max-w-screen-lg mx-auto">
      <div className="artist-launchpad flex flex-col space-y-8">
        <div className="header flex flex-col md:flex-row items-center">
          <div className="title-bar flex-grow-1 text-center">
            <h2 className="text-2xl font-bold">Our Latest ZION Launches</h2>
            <p>Discover, hear, and share what’s trending for free in the Rasta Launch Pad community 
from creative musicians around the world</p>
          </div>
        </div>
        <div className="body grid grid-cols-1 md:grid-cols-1 gap-3">
          <SlickSlide items ={launchpadArtistItems}/>
        </div>
      </div>
      </div>
    </div>
  );
}
