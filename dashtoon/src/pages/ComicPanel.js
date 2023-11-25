// ComicPanel.js
import React from 'react';

const ComicPanel = ({ strips }) => {
  // Filter out empty strips
  const nonEmptyStrips = strips.filter((strip) => strip.imageUrl);

  return (
    <div>
      {nonEmptyStrips.map((strip) => (
        <img
          key={strip.id}
          src={strip.imageUrl}
          alt={`Generated Comic Strip ${strip.id}`}
          style={{ objectFit: 'contain', border: '2px solid white', maxWidth: '200px', maxHeight: '200px', margin: '5px' }}
        />
      ))}
    </div>
  );
};

export default ComicPanel;
