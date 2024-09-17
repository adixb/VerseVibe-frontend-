import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Background from "../Assets/background.png";

function GenLyrics() {
  const [youtubeLink, setYoutubeLink] = useState('');  
  const [lyrics, setLyrics] = useState('');            
  const [loading, setLoading] = useState(false);       


  const handleGenerateLyrics = async () => {
    if (!youtubeLink) {
      alert('Please paste a valid YouTube link.');
      return;
    }

    setLoading(true);

    try {
      // Simulate an API call to fetch lyrics using the youtubeLink
      const response = await fetch('/api/getLyrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link: youtubeLink }),
      });
      
      const data = await response.json();
      
      // Assuming the API response contains the lyrics in a field called 'lyrics'
      setLyrics(data.lyrics);
    } catch (error) {
      console.error('Error fetching lyrics:', error);
      alert('Failed to generate lyrics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="Generation-container  w-full h-screen flex flex-col items-center justify-center"
       style={{ backgroundImage: `url(${Background})` }}>
        <div className="text-center">
          <p className='text-3xl font-bold my-12'>Paste your YouTube music link below</p>
          <input
            type='url'
            placeholder='https://youtube.com/your-song-link'
            className='p-3 border border-gray-400 rounded w-full max-w-lg'
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)} // Capture input
          />
          <button
            onClick={handleGenerateLyrics}
            className='mt-4 p-3 bg-red-400 text-white rounded-lg hover:bg-red-600 transition-colors'
          >
            Generate Lyrics
          </button>
        </div>

        {/* Display lyrics or a loading state */}
        <div className="lyrics-container mt-10 w-full max-w-2xl p-4 text-center">
          {loading ? (
            <p className="text-xl text-black">Generating lyrics, please wait...</p>
          ) : (
            <p className="text-lg text-gray-700 whitespace-pre-wrap">
              {lyrics || 'Your generated lyrics will appear here.'}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default GenLyrics;
