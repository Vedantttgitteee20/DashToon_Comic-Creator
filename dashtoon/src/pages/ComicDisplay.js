// ComicDisplay.js
import React from 'react';
import Spinner from '../components/Spinner'; // Import the Spinner component
// import { css } from 'react-spinners';

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

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
