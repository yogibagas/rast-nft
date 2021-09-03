import React, {useState} from "react";
import Header from "./section/Header";
import { useParams } from "react-router-dom";
import Upload from "./section/Upload";
import SongTrack from "./section/SongTrack"
import CardSection from "./section/stack/section/CardSection";

export default function Profile() {
  const { profile } = useParams();
  const {action} = useParams();
  console.log(action)
  const songTrack = [
    {index:0, title:'Dreaming',files:'/song/music.mp3'},
    {index:1, title:'Love Of A Lifetime',files:'/song/music.mp3'},
    {index:2, title:'Lorem ipsum Lifetime',files:'/song/music.mp3'},
    {index:3, title:'Lorem',files:'/song/music.mp3'}
]
  const [currentMusic, setCurrentMusic] = useState(songTrack[1])

  const musicIntro = {
    music: currentMusic,
    profile: "/profile/example.png",
    length: "4:30",
    genre: "reggae",
    fundRaised: "Lorem Ipsum",
    release: "2021",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
        od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min
        im veniam, quis nostdeserunt`,
  };
  
  const changeMusic = (i) => {
      setCurrentMusic(songTrack[i]);
  }
  const handleNext = () => {
    var getCurrentMusic = currentMusic;
    var max = songTrack.length;

    const counter = getCurrentMusic.index == max ? getCurrentMusic.index : (getCurrentMusic.index+1)
    setCurrentMusic(songTrack[counter])
  }
  const handlePrevious = () => {
    var min = 0;
    var getCurrentMusic = currentMusic;
    const counter = getCurrentMusic.index == min ? getCurrentMusic.index : (getCurrentMusic.index-1)
    setCurrentMusic(songTrack[counter])

  }
  return (
    <div className="wrapper bg-white">
      <div className="flex flex-col intro-music">
        <Header user={profile} intro={musicIntro} handleNext={handleNext} handlePrevious={handlePrevious} action={action}/>
        
      </div>
      <div className={(action === 'edit' ? 'w-full md:w-10/12': 'w-full md:w-1/2')+" px-8 md:px-0 flex flex-col md:flex-row body mx-auto py-12 space-x-0 space-y-4 md:space-y-0 md:space-x-8"}>
        {action === 'edit' ? <Upload/> : false }
        {action === 'profile' ? <CardSection/> : false}
        <SongTrack track={songTrack} user={profile} thumbnail={musicIntro.profile} changeHandler={changeMusic} action={action}/>
        
      </div>
    </div>
  );
}
