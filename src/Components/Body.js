import React from 'react'
import { useSelector } from 'react-redux'


import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSearchParams,useLocation } from 'react-router-dom'

function Body() {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  
  let currentLocation = useLocation();

  return (
    <div className={`flex ${ currentLocation.pathname==="/"?"justify-center":""}`}>
      {
        isMenuOpen && <Sidebar/>
      }
        <Outlet/>
    </div>
  )
}

export default Body