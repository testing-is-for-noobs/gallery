import React from 'react';
import styles from './style.css';
import pixelAlign from './pixelAlign.png';

const Gallery = ({ galleryImages }) => {
  const bg = 'https://lego-product-pictures.s3-us-west-1.amazonaws.com/product1-image1.jpg';
  return(
    <div className={styles.container}>
      <div
        className={styles.gallery}
        style={{background: `url(${bg}) no-repeat center`, backgroundSize: 'contain', height: '100%'}}
      >
          {/* <button className='btn_full_screen' type='button'>Full Screen</button> */}
          <a href='#' type='button' className={styles.button}>&lang; &nbsp;</a>
          <a href='#' type='button' className={styles.button}>&nbsp; &rang;</a>
      </div>
    </div>
  )
}

export default Gallery;