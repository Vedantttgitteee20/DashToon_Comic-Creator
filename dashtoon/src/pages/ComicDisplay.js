import React from 'react';

const ComicDisplay = ({ imageUrl }) => {
  return (
    <div>
      {imageUrl && <img src={imageUrl} width="200px" height="200px" alt="Generated Comic" />}
    </div>
  );
};

export default ComicDisplay;
