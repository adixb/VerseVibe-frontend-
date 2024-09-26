import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Background from "../Assets/background.png";
import axios from 'axios';

function GenLyrics() {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleGenerateLyrics = async () => {
    if (!youtubeLink) {
        alert("Please enter a valid YouTube link");
        return;
    }

    setLoading(true);

    try {
        // Sending link to backend
        const response = await axios.post('http://localhost:8000/api/lyrics/getLyrics', { link: youtubeLink });

        // Check if response contains lyrics
        if (response.data && response.data.lyrics) {
            setLyrics(response.data.lyrics);
        } else {
            alert('Lyrics not found for this song!');
        }
    } catch (err) {
        console.error('Error fetching lyrics:', err.message);
        alert('Failed to generate lyrics, please try again!');
    } finally {
        setLoading(false);
    }
};

  return (
    <>
      <Navbar />
      <div 
        className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center max-w-xl w-full mx-4 md:mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Generate Song Lyrics</h1>
          <p className="text-lg text-gray-600 mb-6">Paste your YouTube music link below:</p>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input
              type="url"
              placeholder="https://youtube.com/your-song-link"
              className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-400 transition-shadow"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
            />
            <button
              onClick={handleGenerateLyrics}
              className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-auto"
            >
              Generate Lyrics
            </button>
          </div>
        </div>

        {/* Display lyrics or loading state */}
        <div className="mt-10 w-full max-w-3xl p-4 text-center">
          {loading ? (
            <p className="text-2xl text-gray-800 font-semibold animate-pulse">Generating lyrics, please wait...</p>
          ) : (
            <div className="bg-white bg-opacity-90 border border-gray-200 rounded-lg p-6 shadow-lg max-h-[30vw] overflow-y-auto">
              <p className="text-lg font-medium text-gray-800 whitespace-pre-wrap">
                {lyrics || 'Your generated lyrics will appear here.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GenLyrics;
