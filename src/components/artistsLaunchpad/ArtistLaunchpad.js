import React from 'react'
import DataBank from '../DataBank'
import Banner from './section/Banner'
import Body from "./section/Body"

export default function ArtistLaunchpad() {
    const content = DataBank.launchpadArtists
    return (
        <div className="w-full flex flex-col mx-auto pb-6">
            <Banner content={content}/>
            <Body artistLaunchpad={content.launchPadItems}/>
        </div>
    )
}
