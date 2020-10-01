import React from 'react';
import styles from './style.css';
import pixelAlign from './pixelAlign.png';
import expand from '../images/expand.png';

const Gallery = ({ currentImage }) => (
  <div
    className={styles.slider}
  >
    <div id='box'>
      <img className={styles.currentImage} src={currentImage} alt='main slide' />
    </div>
    <button className={styles.full_screen}>
      <img src={expand} alt='expand icon' styles={{width: '10px', height: '10px'}}/>
      <p className={styles.full_screen_words}>Full screen</p>
    </button>
    <a href='#' type='button' className={styles.prev}>&lang; &nbsp;</a>
    <a href='#' type='button' className={styles.next}>&nbsp; &rang;</a>
  </div>
);

export default Gallery;