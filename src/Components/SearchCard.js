import React from 'react'
import { getPublishedAtSimplified } from '../Utils/Helper'

function SearchCard({videoInfo}) {
  const {snippet} = videoInfo
  let publishedAt = getPublishedAtSimplified( snippet.publishedAt)

  return (
    <div className='m-1 mb-6 flex'>
        <img className='rounded-lg' alt='' src={snippet.thumbnails.medium.url}></img>
        <div className='ml-5'>
        <h3 className='text-lg font-bold'>{snippet.title}</h3>
        <p className='text-gray-600'>{snippet.description}</p>
        <h3 className='font-semibold'>{snippet.channelTitle}</h3>
        <p>{publishedAt.diff} {publishedAt.type} ago</p>
        </div>
    </div>
  )
}

export default SearchCard