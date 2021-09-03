import React, { useState } from "react";

import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import Data from "../DataBank";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  
  function CheckParent(props){
      const parent = props.isParent;
    if(parent){
        return (<IoIcons.IoIosArrowDropright/>);
    }
    return false
  }

  function ShowDropdown(props){
      const item = props.childItem;
      if(item.length > 0 ){
          return (
              <ul className="flex flex-col items-start text-sm">
                  {item.map((item,index) => {
                     return <li key={index}>
                          <Link to={item.path} onClick={showSidebar} >
                            <span className="ml-10">{item.label}</span>
                          </Link>
                      </li>
                  })}
              </ul>
          )
      }

      return true;
  }

  return (
    <div className="text-black">
      <div className="navbar text-black">
        <Link to="#" className="menu-bars text-2xl">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav
        className={
          "h-screen w-auto top-0 py-6 px-8 bg-gray-rasta z-50 absolute transition duration-1000 " +
          (sidebar ? "left-0" : "-left-full")
        }
      >
        <Link to="#" className="menu-bars absolute right-4 text-3xl text-white">
          <FaIcons.FaRegWindowClose onClick={showSidebar} />
        </Link>
        <ul className="menu-items text-white mt-12 text-2xl space-y-4">
          {Data.navbar.menu.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex flex-row space-x-4" onClick={showSidebar} 
                >
                  <span className="flex-grow-1 pr-8">{item.label}</span>
                  <CheckParent isParent={item.parent} />
                </Link>
                <ShowDropdown childItem={item.child} />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
