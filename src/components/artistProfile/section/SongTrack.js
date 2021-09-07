import React from "react";
import * as RiIcons from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as Io5Icons from "react-icons/io5";

export default function songTrack(props) {
  const socialMedia = [
    { name: "Facebook", icon: <FaIcons.FaFacebook />, link: "#" },
    { name: "Tik Tok", icon: <Io5Icons.IoLogoTiktok />, link: "#" },
    { name: "Instagram", icon: <FaIcons.FaInstagram />, link: "#" },
    { name: "Twitter", icon: <FaIcons.FaTwitter />, link: "#" },
  ];
  return (
    <div
      className={
        (props.action === "profile" ? "w-full shadow-box p-4" : "w-full md:w-1/4") +
        " songtrack flex flex-col items-cente space-y-4 mt-8 md:mt-0"
      }
    >
      <div className="title flex flex-row text-gray-600  space-x-2 w-full">
        <span className="icon">
          <RiIcons.RiPlayListFill />
        </span>
        <span>Your Tracks</span>
      </div>
      <div className="track-list flex flex-col w-full text-gray-600 space-y-4">
        {props.track.map((item, index) => {
          return (
            <button
              className="grid grid-cols-2 md:grid-cols-3 track-item md:space-x-4 items-center md:pr-4 hover:bg-gray-300 hover:bg-opacity-50"
              key={index}
              onClick={() => props.changeHandler(index)}
            >
              <div className="thumbnail flex-grow-1 w-1/2 md:w-auto">
                <LazyLoadImage
                  src={props.thumbnail}
                  className="w-24 md:mx-auto"
                  alt={props.user}
                />
              </div>
              <div className="song flex-grow-1 flex-col text-left md:w-auto">
                <div className="user capitalize">{props.user}</div>
                <span className="title calitapize text-black text-md">
                  {item.title}
                </span>
                {props.action === "profile" && (
                  <div className="likes flex flex-row space-x-2 items-center">
                    <div className="icon">
                      <FaIcons.FaHeart className="fill-current text-red-rasta" />
                    </div>
                    <div className="totalLikes">13M</div>
                  </div>
                )}
              </div>
              <div className="duration pl-8 hidden md:block"> 3:12</div>
            </button>
          );
        })}
      </div>
      {props.action === "profile" && (
        <div className="social__media flex flex-col items-center space-y-8 mt-4">
          <div className="title">Social Media</div>
          <div className="social__link grid grid-cols-4 gap-4">
            {socialMedia.map((item, index) => {
              return (
                <Link to={item.link} key={index} className="text-2xl">
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
