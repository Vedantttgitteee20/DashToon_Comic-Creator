import React, { useState } from 'react';
import ComicDisplay from './pages/ComicDisplay';
import ComicForm from './pages/ComicForm';
import { query } from './pages/utils'
import Navbar from './components/Navbar';
import styles from './css/home.module.css'
const Home = () => {
  const [imageUrl, setImageUrl] = useState('');
  const generateComic = async (panelTexts) => {
    try {
    query({ "inputs": panelTexts }).then((response) => {
      // Use the image, for example:
      setImageUrl(URL.createObjectURL(response));
      console.log(imageUrl); // You can use this URL to display the image
    });
    } catch (error) {
      console.error('Error generating comic:', error);
      // Handle error and provide user feedback
    }
  };
  return (
    <div className={styles.outerDiv}>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Navbar />
      <div className={styles.innerDiv}>
        <div className={styles.strip}>
          <ComicForm generateComic={generateComic} />
          <ComicDisplay imageUrl={imageUrl}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
