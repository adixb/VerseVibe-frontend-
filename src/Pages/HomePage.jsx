import React from "react";
import Navbar from "../Component/Navbar";
import HeroImage from "../Assets/HeroImage.png";
import Background from "../Assets/background.png";
import {Link} from 'react-router-dom' ; 

function HomePage() {
  return (
    <>
      <Navbar />
      
      <div
        className="Homepage-container w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
   
        <div className="HeroText-1 flex flex-col items-start text-black w-1/2 px-6">
          <p className="text-5xl font-bold">
            VerseVibe - The Ultimate Song Lyrics Generator. Instantly generate
            song lyrics from any YouTube link with ease.
          </p>

          <Link to="/GenerateLyrics">  <button className="my-12 border text-xl bg-red-400 text-white p-2 rounded-lg hover:bg-red-600">
            Generate Lyrics
          </button> </Link>
        </div>

      
        <div className="HeroImage ml-8">
          <img
            src={HeroImage}
            alt="HeroSection-Image"
            className="h-auto w-[40vw]"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
