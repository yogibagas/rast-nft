import React from "react";
import ShopSong from "./section/ShopSong";
import ProfileTab from "./section/ProfileTab";
import TradingHistory from "./section/TradeHistory";
import MoreArtist from "./section/MoreArtist";
import LaunchpadArtist from "./section/LaunchpadArtist";
import SupportArtist from "./section/SupportArtist";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import NftComingSoonImage from "../../assets/nft-coming-soon.png";

import DataBank from "../DataBank";
export default function DetailSong() {
  const { artist } = useParams();
  const { songTitle } = useParams();

  const user = {
    userName: "Aleine",
    aboutInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel cursus dolor, 
    in faucibus nibh. Nunc auctor, nibh vel luctus blandit, augue sem eleifend eros, quis
    dapibus quam augue a metus. Proin mattis elementum augue id ultricies. Phasellus 
    ut neque aliquam, vestibulum lectus vel, eleifend lorem. Aenean quis turpis eros.`,
    tradeHistory: [
      {
        event: parse("Lorem "),
        price: parse("60 "),
        date: "2020-06-28",
      },
      {
        event: parse("Lorem "),
        price: parse("55 "),
        date: "2020-06-29",
      },
      {
        event: parse("Lorem"),
        price: parse("50 "),
        date: "2020-06-30",
      },
    ],
  };
  const data = DataBank.homepage.artistLaunchpad;

  const song = {
    title: artist + " - " + songTitle,
    thumbnail: <NftComingSoonImage />,
    price: 15,
    descriptionSong: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel cursus dolor, 
    in faucibus nibh. Nunc auctor, nibh vel luctus blandit, augue sem eleifend eros, quis
    dapibus quam augue a metus. Proin mattis elementum augue id ultricies. Phasellus 
    ut neque aliquam, vestibulum lectus vel, eleifend lorem. Aenean quis turpis eros.`,
  };
  return (
    <div className="md:max-w-screen-lg mx-auto bg-white text-black pb-32 flex space-y-12 flex-col">
      <ShopSong song={song} />
      <ProfileTab user={user} song={song} />
      <TradingHistory user={user} />
      <SupportArtist user={user} />
      <MoreArtist items={data} />
      <LaunchpadArtist items={data} />
    </div>
  );
}
