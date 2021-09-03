import React from "react";
import { Link } from "react-router-dom";

export default function Banner(props) {
  return (
    <div
      className="bg-black  hero-section py-8 md:py-64 flex items-center flex-col text-center text-white"
      style={{
        backgroundImage: "url(" + props.image + ")",
        backgroundSize: "",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="wrapper max-w-screen-lg space-y-4">
        <div className="title w-full">
          <h1 className="text-xl md:text-5xl font-bold">{props.content.banner.title}</h1>
        </div>
        <div className="desc w-full px-4 md:px-64">
          <p>{props.content.banner.desc}</p>
        </div>
        <div className="button w-full">
          <Link to={'/'} className="rounded-xl px-12 py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta">
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
}
