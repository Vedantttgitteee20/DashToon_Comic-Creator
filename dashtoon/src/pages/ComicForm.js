import React, { useState } from 'react';
import Styles from '../css/comicForm.module.css'
const ComicForm = ({generateComic}) => {
    const [panelTexts, setPanelTexts] = useState('');

  const handleInputChange = (text) => {
    setPanelTexts(text);
  };

  return (
    <div class="mb-3">
      <div >
      <label for="exampleFormControlTextarea1" class="form-label">Enter text for comic</label>
      <textarea style={{color:"black",backgroundColor:"white",width: "300px", height:"50px",resize: "none"}} id="exampleFormControlTextarea1" rows="3" onChange={(e) => handleInputChange(e.target.value)}></textarea>
      </div>
      <button className={Styles.button} onClick={() => generateComic(panelTexts)}>
          Generate Comic
      </button>
    </div>
  );
};

export default ComicForm;
