import React from 'react'
import { useSelector } from 'react-redux'


import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from './Header'

function Body() {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  
  let currentLocation = useLocation();

  return (
    <>
    <Header/>
    <div className={`flex ${ currentLocation.pathname==="/"?"justify-center":""}`}>
      {
        isMenuOpen && <Sidebar/>
      }
        <Outlet/>
    </div>
      </>
  )
}

export default Body