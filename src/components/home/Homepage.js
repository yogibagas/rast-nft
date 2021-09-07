import React from 'react'
import Banner from "./section/Banner"
import Body from "./section/Body"
import DataBank from '../DataBank'
import ComingSoonImage from "../../assets/coming-soon-image.png"

export default function Homepage() {
    const data = DataBank.homepage
    return (
        <div className="pb-6">
            <Banner image={ComingSoonImage} content={data}/>
            <Body currentLaunchpad={data.currentLaunchpad} artistLaunchpad={data.artistLaunchpad}/>
        </div>
    )
}
