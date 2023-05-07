import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h2 className='font-bold text-4xl text-center m-7 mt-28'>Uh oh You have lost somewhere.... </h2>
      <div className='text-center'>
      <Link to={"/"} className='border border-black p-3 mt- bg-black text-white'>HomePage</Link>
      </div>
    </div>
  )
}

export default NotFound