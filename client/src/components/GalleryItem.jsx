import React from 'react';
import styles from './style.css';

const GalleryItem = ({ image, updateCurrentImage }) => {
  function handleGalleryClick() {
    console.log(image.img_url);
    let imageURL = image.img_url;
    updateCurrentImage(imageURL);
  }

  return(
    <div className={styles.galleryItem}>
      <img
        src={image.img_url}
        alt={image.name}
        onClick={() => { handleGalleryClick() }}
      />
    </div>
  );
};

export default GalleryItem;