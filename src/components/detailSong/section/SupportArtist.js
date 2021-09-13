import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SupportArtist(props) {
  console.log(props);
  return (
    <div className="flex flex-col items-center space-y-4">
      <label>Want to Support Artist?</label>
      <Link to={'/user/'+props.user.userName.toLowerCase()+'/profile'} className="uppercase flex flex-row text-xl items-center space-x-8 px-12 rounded-md py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta text-white">
        <div className="icon">
          <FaIcons.FaHandHoldingUsd className="text-2xl"/>
        </div>
        <div className="text">STAKE NFT </div>
      </Link>
    </div>
  );
}
