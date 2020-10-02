import React from 'react';
import styles from './style.css';
import expand from '../images/expand.png';

const Gallery = ({ currentImage, handlePrevClick, handleNextClick }) => (
  <div className={styles.slider}>
    <div id="box">
      <img className={styles.currentImage} src={currentImage} alt="main slide" />
    </div>
    <button type="button" className={styles.full_screen}>
      <img src={expand} alt="expand icon" />
      <p className={styles.full_screen_words}>Full screen</p>
    </button>
    <button type="button" className={styles.prev} onClick={handlePrevClick}>&lang; &nbsp;</button>
    <button type="button" className={styles.next} onClick={handleNextClick}>&nbsp; &rang;</button>
  </div>
);

export default Gallery;