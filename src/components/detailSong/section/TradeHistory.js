import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import BNBRastaIcon from "../../../assets/bnb-rasta-icon.png";
import * as FaIcons from "react-icons/fa";

export default function TradeHistory(props) {
  const [open, setOpen] = useState(false);
  const tradeHistory = props.user.tradeHistory;
  return (
    <div className="trade__history px-4 md:px-0">
        <div className="flex flex-col mt-0 md:mt-12 shadow-box px-8 py-4">
      <div className="title flex flex-row w-full space-x-4">
        <div className="icon text-2xl">
          <IoIcons.IoMdSwap className=" transform -rotate-45" />
        </div>
        <div className="toggle flex flex-col  flex-grow-1">
          <div
            className={
              (open ? "border-b-4  pb-4 " : false) +
              "title  border-gray-400 flex flex-col cursor-pointer"
            }
            onClick={() => setOpen(!open)}>
            Trading History
          </div>
          {open && <div className="body grid grid-cols-1 w-full mt-8">
            <div className="header__body grid grid-cols-3">
              <h2 className="font-bold">Event</h2>
              <h2 className="font-bold">Price</h2>
              <h2 className="font-bold">Date</h2>
            </div>
            <div className="body__content">
              {tradeHistory.map((item, index) => {
                return (
                  <div className="row grid grid-cols-3" key={index}>
                    <span className="item event flex flex-row items-center">
                      {item.event} <FaIcons.FaStickyNote />
                    </span>
                    <span className="item price  flex flex-row items-center space-x-2">
                      <span>{item.price} </span>
                      <img src={BNBRastaIcon} className={"w-8"} alt="no data" />
                    </span>
                    <span className="item date  flex flex-row items-center">
                      {item.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          }
        </div>
        <div className="toggle">
          <button className="text-xl" onClick={() => setOpen(!open)}>
            {open ? <IoIcons.IoIosArrowUp /> : <IoIcons.IoIosArrowDown />}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
