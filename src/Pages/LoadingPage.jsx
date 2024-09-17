import React, { useEffect } from 'react'
import LoaderLogo from '../Assets/logo_versevibe.png' ; 
import LoaderText from '../Assets/Group_7.png' ; 
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { IoMdMusicalNote } from "react-icons/io";
import Background from "../Assets/background.png";


function LoadingPage() {

  const [loadCounter, setLoadCounter] = useState(0) 
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setInterval(() => {
            setLoadCounter(prevCount => {
                if (prevCount >= 0 && prevCount < 100) {
                    return prevCount + 1
                } else {
                    clearInterval(timer)
                    return 100
                }
            })
        }, 10)

        return () => {
            clearInterval(timer)
        }
    }, [])



  return (
    <>
   
    <div className="Loader-container w-screen h-screen border border-black flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${Background})` }}>

      <img src={LoaderLogo} alt='Loading-page-logo' className='w-28 h-28'></img>
     <span className='flex items-center'><img src={LoaderText} alt='Loading-page-logo' className='w-60 h-14 '></img>
     <IoMdMusicalNote className='w-7 h-7'/>
     </span> 
      <div className="w-80 border border-black h-2 my-5 rounded-full ">
      <div className="h-2 bg-black rounded-full" style={{ width: `${loadCounter}%` }}></div>
      </div>
      {loadCounter===100?navigate('/Homepage'):null}

    </div>

    
    
    </>
  )
}

export default LoadingPage ; 