import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as FaIcons from "react-icons/fa";

export default function MoreArtist(props) {
  return (
    <div className="current-launchpad flex flex-col space-y-8">
      <div className="header flex flex-col md:flex-row items-center">
        <div className="title-bar flex-grow-1">
          <h2 className="text-2xl font-bold">More from this Artist</h2>
        </div>
        <Link className="browse flex flex-row items-center space-x-4" to={"/"}>
          <span>Browse More</span>
          <span>
            <FaIcons.FaArrowRight />
          </span>
        </Link>
      </div>
      <div className="body grid grid-cols-4 gap-4">
        {props.items.map((item, index) => {
          return (
            <Link
              to={item.url}
              className="card current__launchpad__item flex flex-col gap-2 hover:shadow-box pb-12"
              key={index}
            >
              <div className="thumbnail">
                <LazyLoadImage src={item.thumbnail.type} alt={item.artist} />
              </div>
              <div className="song-detail px-4 flex flex-col space-y-2">
                <div className="artist-name text-xl font-bold">
                  {item.artist}
                </div>
                <div className="songTitle">{item.songTitle}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
