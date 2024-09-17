import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LoadingPage from '../Pages/LoadingPage'
import HomePage from '../Pages/HomePage'
import GenLyrics from '../Pages/GenLyrics'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<LoadingPage/>}/>
        <Route path="/Homepage" element={<HomePage/>}/> 
        <Route path="/GenerateLyrics" element={<GenLyrics/>}/>

    </Routes>
    </>
  )
}

export default AllRoutes