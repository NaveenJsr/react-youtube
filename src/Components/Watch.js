import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {useSearchParams } from 'react-router-dom';

import { closeMenu } from '../Utils/AppSlice'

import CommentContainers from './CommentContainers';

function Watch() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [])

  const [searchParams] = useSearchParams();


  return (
    <>
    <div className='ml-12'>
    <div className='mt-6'>
      <iframe width="1200" height="600" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className='mt-3'>
    <CommentContainers/>
    </div>
    </div>
    </>
  )
}

export default Watch