import React, { useState, useEffect } from "react";
import Header from "./section/Header";
import { useParams } from "react-router-dom";
import Upload from "./section/Upload";
import SongTrack from "./section/SongTrack";
import CardSection from "./section/stack/section/CardSection";

export default function Profile() {
  const { profile } = useParams();
  const { action } = useParams();
  // console.log(action)
  const songTrack = [
    { index: 0, isPlay: false, title: "Dreaming", files: "/song/music.mp3" },
    {
      index: 1,
      isPlay: false,
      title: "Love Of A Lifetime",
      files: "/song/music.mp3",
    },
    {
      index: 2,
      isPlay: false,
      title: "Lorem ipsum Lifetime",
      files: "https://vitejs.dev/vite.mp3",
    },
    { index: 3, isPlay: false, title: "Lorem", files: "/song/music.mp3" },
  ];
  const [currentMusic, setCurrentMusic] = useState(songTrack[1]);

  const useAudio = (song) => {
    const [audio] = useState(new Audio(song.files));
    const [playing, setPlaying] = useState(false);

    audio.src = song;

    // console.log(song.files);
    // console.log(audio);
    audio.pause();
    audio.load();
    const toggle = () => {
      setPlaying(!playing);
    };

    useEffect(() => {
      if (playing) {
        audio.play().catch((error) => {
          console.log(error);
        });
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

  const [playing, toggle] = useAudio(currentMusic.files);

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

  const [act, setAct] = useState(false);

  const changeMusic = (i) => {
    setCurrentMusic(songTrack[i]);
  };
  const handleNext = () => {
    var getCurrentMusic = currentMusic;
    var max = songTrack.length;

    const counter =
      getCurrentMusic.index + 1 === max
        ? getCurrentMusic.index
        : getCurrentMusic.index + 1;
    setCurrentMusic(songTrack[counter]);
  };
  const handlePrevious = () => {
    var min = 0;
    var getCurrentMusic = currentMusic;
    const counter =
      getCurrentMusic.index === min
        ? getCurrentMusic.index
        : getCurrentMusic.index - 1;
    setCurrentMusic(songTrack[counter]);
  };

  return (
    <div className="wrapper bg-white">
      <div className="flex flex-col intro-music">
        <Header
          user={profile}
          intro={musicIntro}
          useAudio={useAudio}
          toggle={toggle}
          playing={playing}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          act={act}
        />
      </div>
      <div
        className={
          (action === "edit"
            ? "w-full md:w-10/12"
            : "w-full md:w-4/6 xl:w-8/12") +
          " px-8 md:px-0 flex flex-col md:flex-row body mx-auto py-16 space-x-0 space-y-16 md:space-y-0 md:space-x-8"
        }
      >
        {action === "edit" ? <Upload /> : false}
        {action === "profile" ? <CardSection /> : false}
        <SongTrack
          track={songTrack}
          user={profile}
          useAudio={useAudio}
          toggle={toggle}
          playing={playing}
          currentPlay={currentMusic}
          thumbnail={musicIntro.profile}
          changeHandler={changeMusic}
          act={act}
          setAct={setAct}
          action={action}
        />
      </div>
    </div>
  );
}
