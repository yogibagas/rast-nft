import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DataBank from '../../../../../DataBank'

export default function Wallet(props) {
    const initialWallet = props.walletStatus
    const [showModal, setShowModal] = useState(false)
    console.log(props)

    return (
        <div className="wallet">
            {!initialWallet && 
            
            <button onClick={() => setShowModal(!showModal)} className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-xl rounded-xl">
            <FaIcons.FaWallet/>
            <span>Unlock Wallet</span>
                 </button>
                 
            }

            {showModal ? (
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
                    onClick={() => setShowModal(false)}
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
                      <button className="wallet-wrap flex flex-col space-y-3 bg-gray-white shadow-box px-2 py-4 rounded-xl items-center" to={item.link} key={index} 
                      onClick={ () => props.handleWallet()}>
                        <span><img src={item.icon.type}></img></span>
                        <span className="text-center">{item.name}</span>
                      </button>)
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
    )
}
