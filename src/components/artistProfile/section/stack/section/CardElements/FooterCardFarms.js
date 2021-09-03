import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function FooterCardFarms(props) {
    return (
        <div className="space-y-8">
            <div className="flex justify-between w-full mt-8">
                <span className="text-orange-rasta">Stake:{props.farmStake}</span>
                <div className="flex flex-col md:flex-row space-x-4">
                    <span className="text-orange-rasta">{props.farmName}</span>
                    <Link to="/">
                        <FaIcons.FaShareSquare className="text-red-rasta"/>
                    </Link>
                </div>
            </div>
            <div className="flex items-end w-full justify-end">
                <span className="text-orange-rasta">{props.farmValue}</span>
            </div>
            
            <div className="flex justify-between w-full items-center">
                <Link to={props.farmBscLink === undefined ? "/" : props.farmBscLink} className="text-red-rasta">View on BscScan</Link>
                <div className="flex flex-row space-x-4 items-center text-red-rasta">
                    <span className="font-bold text-md">DETAIL</span>
                    <FaIcons.FaChevronCircleUp/>
                </div>
            </div>
        </div>
    )
}
