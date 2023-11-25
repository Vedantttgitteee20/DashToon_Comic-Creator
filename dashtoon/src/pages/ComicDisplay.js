import React from 'react';
import Spinner from '../components/Spinner'; 

const ComicDisplay = ({ imageUrl, loading }) => {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      {loading ? <Spinner /> : null}
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
