import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/common/Footer'
import NavBar from './Components/common/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App