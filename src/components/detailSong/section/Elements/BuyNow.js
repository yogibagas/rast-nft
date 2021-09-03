import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"

export default function BuyNow() {
    const [number, setNumber] = useState(0)
    
    const minHandler = () => {
        if(number > 0 )
        setNumber(number-1)
    } 
    const plusHandler = () => {
        setNumber(number+1)
    }
    
    return (
        <form action="#" className="flex flex-col items-center w-full md:items-baseline">
            <div className="amount flex flex-col space-y-2">
            <label>Buy Amount</label>
            <div className="flex flex-row">
                <div className="wrapper border-1 border-gray-400 rounded-md">
                <button className="min px-2 text-2xl text-green-rasta" type="button" onClick={minHandler}>--</button>
                <input type="number" className="border-0  text-2xl focus:border-opacity-0 w-16 text-center" id="qty" name="qty" value={number} onChange={e => setNumber(e.target.value)}/>
                <button className="plus px-2  text-2xl text-green-rasta" type="button" onClick={plusHandler}>+</button>
                </div>
            </div>
            </div>
            <div className="button flex flex-col md:flex-row flex-grow-1 mt-4 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="flex rounded-lg flex-row bg-gradient-to-l from-yellow-rasta to-green-rasta px-16 py-2 items-center text-white space-x-2">
                <span className="icon"><FaIcons.FaWallet/></span>
                <span className="text">BUY NOW</span>
                </button>
                <button className="flex rounded-lg flex-row text-black bg-gradient-to-l shadow-md border-1 hover:text-white border-gray-300 hover:bg-gradient-to-l hover:from-yellow-rasta hover:to-green-rasta px-16 py-2 items-center space-x-2">
                <span className="icon"><FaIcons.FaDollarSign/></span>
                <span className="text">BUY RASTA</span>
                </button>
            </div>
        </form>
    )
}
