import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import BNBRastaIcon from "../../../assets/bnb-rasta-icon.png";
import BuyNow from './Elements/BuyNow';

export default function ShopSong(props) {
    return (
        <div className="section flex flex-col md:flex-row flex-grow-1 w-full items-center pt-0 px-8 md:px-0 md:pt-16 space-x-0 md:space-x-16">
            <div className="thumbnail">
                <LazyLoadImage src={props.song.thumbnail.type} alt={ props.song.title } />
            </div>
            <div className="shopSection flex flex-col flex-grow-1 space-y-4 w-full items-center md:items-baseline">
                <div className="title text-3xl font-bold capitalize">
                    {props.song.title}
                </div>
                <div className="price flex flex-row items-center">
                    <span className="icon"><img src={BNBRastaIcon} className="w-12" alt="no data"/></span>
                    <div className="price text-3xl">{props.song.price}</div>
                </div>
                <BuyNow/>
            </div>
        </div>
    )
}
