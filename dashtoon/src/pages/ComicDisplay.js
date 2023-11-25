import React from 'react';

const ComicDisplay = ({ imageUrl }) => {
  return (
    <div style={{ display: 'flex',objectFit: 'contain', alignItems: 'center', justifyContent: 'center', border: '2px solid white', overflow: 'hidden' }}>
      {imageUrl && <img src={imageUrl} alt="Generated Comic" style={{ objectFit: 'contain', maxWidth: '200px', maxHeight: '200px' }} />}
    </div>
  );
};

export default ComicDisplay;
