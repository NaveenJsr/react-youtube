import React from 'react'

function VideoCard({snippet,statistics}) {

  return (
    <div className='m-2 w-72 mb-2 rounded-lg'>
        <img src={snippet?.thumbnails.medium.url} className='rounded-lg mb-2' alt=''></img>
        <p className='text-black font-semibold'>{snippet?.title}</p>
        <p className='font-normal text-gray-600'>{snippet?.channelTitle}</p>
        <p className='text-gray-600'>{statistics?.viewCount} views </p>
    </div>
  )
}

export default VideoCard