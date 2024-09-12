import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LoadingPage from '../Pages/LoadingPage'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path="" element={<LoadingPage/>}/>

    </Routes>
    </>
  )
}

export default AllRoutes