import React from 'react';
import styles from './style.css';
import pixelAlign from './pixelAlign.png';

const Gallery = ({ currentImage }) => (
  <div className={styles.gallery_container}>
    <div
      className={styles.slider}
      // style={{background: `url(${currentImage}) no-repeat center`, height: '100%'}}
    >
      <div id='box'>
        <img className={styles.currentImage}src={currentImage} alt='main slide' />
      </div>
      <a href='#' type='button' className={styles.button}>&lang; &nbsp;</a>
      <a href='#' type='button' className={styles.button}>&nbsp; &rang;</a>
    </div>
  </div>
);

export default Gallery;