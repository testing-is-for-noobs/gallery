import React from 'react';
import styles from './style.css';
import pixelAlign from './pixelAlign.png';

const Gallery = () => {
  const bg = 'https://lego-product-pictures.s3-us-west-1.amazonaws.com/product1-image1.jpg';

  return(
    <div className={styles.container}>
      <div
        className={styles.gallery}
        // style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', height: '100%', opacity: 0.6}}
        style={{background: `url(${bg}) no-repeat center`, backgroundSize: 'contain', height: '100%', opacity: 0.6}}
      >
          <button type='button' className={styles.button}>&lt;</button>
          <button type='button' className={styles.button}>&gt;</button>
      </div>
    </div>
  )
}

export default Gallery;