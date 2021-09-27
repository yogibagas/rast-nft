import React, { useState, useEffect } from "react";

import * as MdIcons from "react-icons/md";

const useAudio = (song) => {
  const [audio] = useState(new Audio(song.files));
  const [playing, setPlaying] = useState(false);
  audio.src = song.files

  console.log(song.files);
  console.log(audio);

  audio.pause();
  audio.load();
  const toggle = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));

    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ song, setPlay, handlePrevious, handleNext }) => {
  const [playing, toggle] = useAudio(song);
  const previous = () => {
    handlePrevious();
    if (playing) {
      toggle();
    }
  };
  const next = (source) => {
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
