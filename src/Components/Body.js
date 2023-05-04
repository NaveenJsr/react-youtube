import React from 'react'
import { useSelector } from 'react-redux'


import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


function Body() {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

  return (
    <div className='flex justify-between'>
      {
        isMenuOpen && <Sidebar/>
      }
        <Outlet/>
    </div>
  )
}

export default Body