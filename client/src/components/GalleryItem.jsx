import React from 'react';
import styles from './style.css';

const GalleryItem = ({ image }) => {
  return(
    <div className={styles.galleryItem}>
      <img src={image.img_url} alt={image.name} />
    </div>
  )
}

export default GalleryItem;