import React from "react";
import DataBank from "../DataBank";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

export default function Footer() {
  function ShowLinks(props) {
    const items = props.items;
    return items.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.path}>
            <span className="">{item.label}</span>
          </Link>
        </li>
      );
    });
  }
  return (
    <div className="w-full bg-black text-white py-12">
      <div className="mx-auto w-10/12">
        <div className="flex flex-col md:flex-row space-between border-b-1 pb-8 mb-4">
          <div className="flex-grow-1 flex flex-col">
           <div className="inline-block space-x-2">
             <div className="zlp font-bold text-3xl inline-block">ZLP by </div>
             <div className="nft-rasta inline-block text-3xl font-bold">
               <span className="text-red-rasta">N</span><span className="text-yellow-rasta">F</span><span className="text-green-rasta">T</span> RASTA
             </div>
           </div>
          </div>
          {DataBank.footer.navigation.map((item, index) => {
            return (
              <div
                className="flex flex-col mr-4 last:mr-0 pl-6 md:pl-0 mt-4"
                key={index}
              >
                {item.title}
                  <ul className="list-none mt-6 text-yellow-rasta">
                    <ShowLinks items={item.item} />
                  </ul>
              </div>
            );
          })}
          
        </div>

        <div className="bottom-footer flex space-between pl-6 md:pl-0 pr-6 md:pr-0 flex-col md:flex-row w-full space-between mx-auto">
          <div className="copyright flex-grow-1">
            <span>{DataBank.footer.copyRight}</span>
          </div>
          <div className="social-media text-left md:text-right justify-items-end">
            <div className="md:flex md:flex-row md:space-x-4 gap-4 md:gap-0 mt-4">
                {DataBank.socialMedia.map((item, index) => {
                  return (
                    <Link
                      className=" inline-block md:block mr-5 last:mr-0 md:mr-0 text-md w-50 h-50 border-1 border-white rounded-full p-2 hover:bg-yellow-rasta hover:text-green-rasta"
                      key={index}
                      to={item.link}
                    >
                      {item.icon}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
