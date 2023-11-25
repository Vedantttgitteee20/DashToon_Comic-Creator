import React from 'react';
import Styles from '../css/comicPanel.module.css'
const ComicPanel = ({ strips }) => {
  // Filter out empty strips
  const nonEmptyStrips = strips.filter((strip) => strip.imageUrl);

  return (
    <div className={Styles.outer}>
      <div className={Styles.heading}>Comic Panel</div>
      <div className={Styles.imagesPanel}>
        {nonEmptyStrips.map((strip) => (
          <img
            key={strip.id}
            src={strip.imageUrl}
            alt={`Generated Comic Strip ${strip.id}`}
            className={Styles.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ComicPanel;
