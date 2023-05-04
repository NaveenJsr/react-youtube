import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {useSearchParams } from 'react-router-dom';

import { closeMenu } from '../Utils/AppSlice'

function Watch() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [])

  const [searchParams] = useSearchParams();


  return (
    <div className='ml-12 mt-6'>
      <iframe width="1200" height="600" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Watch