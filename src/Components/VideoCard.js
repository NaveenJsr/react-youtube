import React from 'react'

import { convertIntoShortNumber,getPublishedAtSimplified } from '../Utils/Helper'

function VideoCard({snippet,statistics}) {

  let publishedAt = getPublishedAtSimplified(snippet.publishedAt)

  return (
    <div className='m-2 w-72 mb-2 rounded-lg'>
        <img src={snippet?.thumbnails.medium.url} className='rounded-lg mb-2 hover:scale-110' alt=''></img>
        <p className='text-black font-semibold'>{snippet?.title}</p>
        <p className='font-normal text-gray-600'>{snippet?.channelTitle}</p>
        <p className='text-gray-600'>{convertIntoShortNumber(statistics?.viewCount)} views<span className='font-bold'>.</span> {publishedAt.diff} {publishedAt.type} ago</p>
        <span></span>
    </div>
  )
}

export default VideoCard