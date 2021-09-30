import React from "react";

import * as MdIcons from "react-icons/md";


const Player = ({ handlePrevious, handleNext, playing,toggle}) => {
  // console.log(playing);
  const previous = () => {
    handlePrevious();
    if (playing) {
      toggle();
    }
  };
  const next = () => {
    handleNext();
    if (playing) {
      toggle();
    }
  };

  return (
    
    <div className="button flex flex-row text-5xl justify-content-between flex-grow-1 w-full">
      <div className="prev flex-grow-1 text-center">
        <button onClick={previous}>
          <MdIcons.MdSkipPrevious className="stroke-current text-white" />
        </button>
      </div>
      <div className="play flex-grow-1 text-center">
        <button onClick={toggle}>
          {playing ? (
            <MdIcons.MdPause className="stroke-current text-white" />
          ) : (
            <MdIcons.MdPlayArrow className="stroke-current text-white" />
          )}
        </button>
      </div>
      <div className="next flex-grow-1 text-white text-center">
        <button onClick={next}>
          <MdIcons.MdSkipNext className="stroke-current text-white" />
        </button>
      </div>
    </div>
  );
};

export default Player;
