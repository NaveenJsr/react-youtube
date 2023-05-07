import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { closeMenu } from '../Utils/AppSlice'

import CommentContainers from './CommentContainers';
import LiveChat from "./LiveChat"

function Watch() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [])

  const [searchParams] = useSearchParams();

  if(!searchParams.get("v")){
    return
  }


  return (
    <>
      <div className='ml-12 flex w-full'>
        <div>
          <div className='mt-6'>
            <iframe width="1100" height="600" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className='mt-3'>
            <CommentContainers />
          </div>
        </div>
        <div className='ml-3 mt-5 w-full'>
          <LiveChat />
        </div>
      </div>
    </>
  )
}

export default Watch