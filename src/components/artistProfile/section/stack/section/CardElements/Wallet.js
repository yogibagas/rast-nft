import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import DataBank from "../../../../../DataBank";

export default function Wallet(props) {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const handleConnectWallet = () => {
    //change status wallet to be connected (true)
    props.handleWallet(!props.walletStatus);

    //closeModal
    setShowConnectModal(!showConnectModal);
  };

  const [approveStatus, setApproveStatus] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const coinsAvl = 0.358383838;

  const maxHandle = () => {
    var input = document.getElementById("depositVal");
    input.value = coinsAvl;

  }
  return (
    <div className="wallet">
      {!props.walletStatus ? (
        <button
          onClick={() => setShowConnectModal(!showConnectModal)}
          className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-xl rounded-xl"
        >
          <FaIcons.FaWallet />
          <span>Unlock Wallet</span>
        </button>
      ) : (
        [
          approveStatus ? (
            //status approved
            <div className="flex approved space-x-4">
              <button className="unstake__btn bg-gradient-to-l from-green-rasta to-yellow-rasta py-2 flex-grow-1 rounded-md text-white">
                Unstake Rasta
              </button>

              <button
                className="plus__btn bg-gradient-to-l from-green-rasta to-yellow-rasta py-2 px-4 rounded-md text-white"
                onClick={() => setShowDepositModal(!showDepositModal)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => setApproveStatus(!approveStatus)}
              className="w-full flex flex-row text-green-rasta py-2 bg-white border-2 border-green-rasta  items-center justify-center space-x-4 text-xl rounded-xl"
            >
              <span>Approve Rasta</span>
            </button>
          ),
        ]
      )}
      {showDepositModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full px-4 py-92 md:px-0 md:w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white pb-8 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b-1 border-solid border-gray-100 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    Deposit Rasta Tokens
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowDepositModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col">
                  <div className="available text-right"> { coinsAvl } RASTA Available </div>
                  <form action="#" className="flex flex-col space-x-4">
                    <div className="input-group">
                      <input
                        type="number"
                        name=""
                        id="depositVal"
                        className="w-full border-2 border-green-rasta bg-white px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-rasta focus:ring-opacity-50"
                      />
                    </div>
                    <button type="button" className="text-right mt-4 mr-2" onClick={ maxHandle }>
                      <span className="bg-green-rasta text-white px-2 py-2 rounded-md">Max</span>
                      </button>
                      <div className="flex space-x-0 space-y-2 md:space-y-0 md:space-x-4">
                        <button type="button" className="cancel__btn bg-yellow-rasta border-green-rasta px-8 py-2">Confirm</button>
                        <button type="button" className="cancel__btn bg-white border-2 border-green-rasta  px-8 py-2" onClick={() => setShowDepositModal(false)}>Cancel</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showConnectModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full px-4 py-92 md:px-0 md:w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white pb-8 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b-1 border-solid border-gray-100 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    Connect to a Wallet
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowConnectModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex">
                  <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-4">
                    {DataBank.wallet.map((item, index) => {
                      return (
                        <button
                          className="wallet-wrap flex flex-col space-y-3 bg-gray-white shadow-box px-2 py-4 rounded-xl items-center"
                          to={item.link}
                          key={index}
                          onClick={() => handleConnectWallet()}
                        >
                          <span>
                            <img src={item.icon.type} alt={item.name}/>
                          </span>
                          <span className="text-center">{item.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
