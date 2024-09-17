import React from "react";
import NavLogo from "../Assets/logo_versevibe.png";
import NavText from "../Assets/Group_7.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="NavBar border boreder-y flex items-center justify-between">
      <Link to="/"> <span className="Logo-div flex items-center  w-full  p-2">
          <img src={NavLogo} alt="VerseVibe-logo" className="w-12 h-12" />
          <img src={NavText} alt="VerseVibe-text" className="w-36 h-12 mx-2" />
        </span>
        </Link> 

        <span className="NavText  p-2 flex items-center gap-4 mx-12">
          <a href="https://github.com/adixb" target="_blank"><p className="text-gray-500 font-serif text-lg cursor-pointer hover:text-black"> Developer GitHub</p></a>
          
          <p className="text-gray-400 "> | </p>
        <Link to="/GenerateLyrics"> <button className="  text-lg bg-red-400 text-white p-2 rounded-lg hover:bg-red-600 ">
            Generate Lyrics
          </button></Link>
        </span>
      </nav>
    </>
  );
}

export default Navbar;
