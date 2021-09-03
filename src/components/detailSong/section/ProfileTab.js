import React, { useState } from 'react'
import DescriptionTab from './Elements/DescriptionTab'
import AboutTab from './Elements/AboutTab'

export default function ProfileTab(props) {
    const [tabs, setTabs] = useState('desc')
    return (
        <div className="flex flex-col tabs__profile space-y-4 w-full px-8 md:px-0">
            <div className="tab__title flex-flex-row space-x-4">
                <button className={(tabs === 'desc'? "text-black border-b-2 border-black":"text-gray-500")} onClick={() => setTabs('desc')} >Description</button>
                <button className={(tabs === 'about'? "text-black border-b-2 border-black":"text-gray-500")} onClick={() => setTabs('about')}>About Artist</button>
            </div>
            
            <div className="content">
            {tabs === 'desc'? <DescriptionTab desc={props.song.descriptionSong}/> : <AboutTab desc={props.user.aboutInfo}/>}
            </div>
        </div>
    )
}
