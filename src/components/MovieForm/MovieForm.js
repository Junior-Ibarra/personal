import React, { useState } from 'react';

const MovieForm = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputTrailer, setInputTrailer] = useState('');
  const [inputRating, setInputRating] = useState(null);
  const [isWatchlist, setIsWatchlist] = useState(false);
  

  const handleInsert = () => {
    
    }
  
  return (
    <div className="MovieForm">
      <input
        type="text"
        placeholder="movie title"
        value={inputTitle}
        onChange={e => setInputTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="trailer url"
        value={inputTrailer}
        onChange={e => setInputTrailer(e.target.value)}
      />
      <div className="radio-buttons">
        <input
          type="radio"
          name="selection"
          onClick={() => setIsWatchlist(false)}
        />
        <p>Watched</p>
        {!isWatchlist
          ? (
            <div className="rating-input">
              <input
                type="text"
                value={inputRating}
                onChange={e => setInputRating(e.target.value)}
              />
              <p>Rating</p>
            </div> 
          ) : null
        }
        <input
          type="radio"
          name="selection"
          onClick={() => setIsWatchlist(true)}
        />
        <p>Watchlist</p>
        <button onClick={() => handleInsert()}>
          Insert
        </button>
      </div>
    </div>
  );
}

export default MovieForm;