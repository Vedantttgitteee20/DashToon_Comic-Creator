// ComicDisplay.js
import React from 'react';

const ComicDisplay = ({ imageUrl, loading }) => {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      {loading && <p>Loading...</p>}
      {imageUrl && !loading && (
        <img
          src={imageUrl}
          alt="Generated Comic"
          style={{ objectFit: 'contain', border: '2px solid white', maxWidth: '200px', maxHeight: '200px' }}
        />
      )}
    </div>
  );
};

export default ComicDisplay;
