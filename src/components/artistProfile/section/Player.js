import React, {useState, useEffect} from 'react'

import * as MdIcons from "react-icons/md"

const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };
  
  const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);
    return (
        <div>
           <button onClick={toggle}>{playing ? <MdIcons.MdPause className="stroke-current text-white"/> : <MdIcons.MdPlayArrow className="stroke-current text-white"/>}</button>
                  
        </div>
      );
    };

export default Player;