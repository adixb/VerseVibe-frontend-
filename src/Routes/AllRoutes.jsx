import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LoadingPage from '../Pages/LoadingPage'
import HomePage from '../Pages/HomePage'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<LoadingPage/>}/>
        <Route path="/Homepage" element={<HomePage/>}/>

    </Routes>
    </>
  )
}

export default AllRoutes