import React from "react";
import CurrentLaunchpad from "./launchpad/CurrentLaunchpad";
import ArtistsLaunchpad from "./launchpad/ArtistsLaunchpad"

export default function Body(props) {
    const currentLaunchpadItems = props.currentLaunchpad
    const launchpadArtistItems = props.artistLaunchpad
  return (
    <div className="bg-white py-16">
      <div className="wrapper max-w-screen-lg mx-auto">
        <CurrentLaunchpad items={currentLaunchpadItems}/>

        <ArtistsLaunchpad items={launchpadArtistItems}/>
      </div>
    </div>
  );
}
