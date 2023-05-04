import React from 'react'
import MenuItems from './MenuItems'

//Icons Import
import {HomeIcon,MusicalNoteIcon,
  LifebuoyIcon,PlayCircleIcon,
  PlayIcon,BuildingLibraryIcon,
  ClockIcon,
  VideoCameraIcon,
  ChartPieIcon,
  ArrowDownTrayIcon,
  HandThumbUpIcon
  

} from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <Link to={"/"}><MenuItems Icon={HomeIcon} item={"Home"} /></Link>
      <MenuItems Icon={MusicalNoteIcon} item={"Shorts"} />
      <MenuItems Icon={LifebuoyIcon} item={"Subscriptions"} />
      <MenuItems Icon={PlayIcon} item={"Originals"} />
      <MenuItems Icon={PlayCircleIcon} item={"YouTube Music"} />
      <hr className='border border-spacing-2 bg-black ml-3'></hr>
      <MenuItems Icon={BuildingLibraryIcon} item={"Library"}/>
      <MenuItems Icon={ChartPieIcon} item={"History"}/>
      <MenuItems Icon={VideoCameraIcon} item={"Your videos"}/>
      <MenuItems Icon={ClockIcon} item={"Watch Later"}/>
      <MenuItems Icon={ArrowDownTrayIcon} item={"Downloads"}/>
      <MenuItems Icon={HandThumbUpIcon} item={"Liked videos"}/>
    </div>
  )
}

export default Sidebar