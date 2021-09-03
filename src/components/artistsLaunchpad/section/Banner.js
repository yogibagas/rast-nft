import React from "react";
import LeafBgNFT from "../../../assets/leaf-bg-nft.jpg"

export default function Banner(props) {
  return (
    <div
      className="bg-black  hero-section py-32 flex items-center flex-col text-center text-white"
      style={{
        backgroundImage: "url(" + LeafBgNFT + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="wrapper max-w-screen-lg space-y-4">
        <div className="title w-full">
          <h1 className="text-2xl md:text-5xl font-bold">{props.content.header.title}</h1>
        </div>
      </div>
    </div>
  );
}
