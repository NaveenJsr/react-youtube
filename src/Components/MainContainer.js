import React from 'react'

import ButtonList from "./ButtonList"
import VideoContainer from './VideoContainer'


function MainContainer() {
  return (
    <div className='min-w-[88%] m-2 '>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer