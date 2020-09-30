import React from 'react';
import GalleryItem from './GalleryItem.jsx';
import styles from './style.css';

const GalleryItemList = ({galleryImages}) => {
  return(
    <div className={styles.galleryItemList}>
      {galleryImages.map(image => (
        <GalleryItem key={image._id} image={image} />
      ))}
    </div>
  )
}

export default GalleryItemList;