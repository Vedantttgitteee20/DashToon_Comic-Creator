// Home.js
import React, { useState } from 'react';
import ComicDisplay from './ComicDisplay';
import ComicForm from './ComicForm';
import { query } from '../components/utils';
import Navbar from '../components/Navbar';
import styles from '../css/home.module.css';
import ComicPanel from './ComicPanel';
const Home = () => {
  const [strips, setStrips] = useState([{ id: 1, text: '', imageUrl: '', loading: false }]); // Initial strip
  console.log(strips)
  const generateComic = async (panelTexts, stripId) => {
    try {
      setStrips((prevStrips) =>
        prevStrips.map((strip) =>
          strip.id === stripId ? { ...strip, loading: true } : strip
        )
      );

      const response = await query({ inputs: panelTexts });

      setStrips((prevStrips) =>
        prevStrips.map((strip) =>
          strip.id === stripId
            ? { ...strip, text: panelTexts, imageUrl: URL.createObjectURL(response), loading: false }
            : strip
        )
      );
    } catch (error) {
      console.error('Error generating comic:', error);
      // Handle error and provide user feedback
      setStrips((prevStrips) =>
        prevStrips.map((strip) =>
          strip.id === stripId ? { ...strip, loading: false } : strip
        )
      );
    }
  };

  const addStrip = () => {
    // Check if all current strips are filled with URLs
    const allStripsFilled = strips.every((strip) => strip.imageUrl);

    if (allStripsFilled) {
      setStrips((prevStrips) => [...prevStrips, { id: prevStrips.length + 1, text: '', imageUrl: '', loading: false }]);
    } else {
      alert('Generate images for all current strips before adding more.');
    }
  };

  const removeStrip = (stripId) => {
    setStrips((prevStrips) => prevStrips.filter((strip) => strip.id !== stripId));
  };

  return (
    <div className={styles.outerDiv}>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Navbar />
      <div className={styles.info}>No of Pages: {strips.length}</div>
      <div className={styles.innerDiv}>
        {strips.map((strip) => (
          <div key={strip.id} className={styles.strip}>
            <ComicForm generateComic={(text) => generateComic(text, strip.id)} />
            <ComicDisplay imageUrl={strip.imageUrl} loading={strip.loading} />
            <button
              className={styles.button}
              style={{ position: 'absolute', left: '0px', top: '0px' }}
              onClick={() => removeStrip(strip.id)}
            >
              -
            </button>
          </div>
        ))}
        <div className={styles.centerButton}>
          <button className={styles.button} onClick={addStrip}>
            +
          </button>
        </div>
      </div>
      <ComicPanel strips={strips} />
    </div>
  );
};

export default Home;