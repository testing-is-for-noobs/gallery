import React from 'react';
import styles from './style.css';
import GalleryItem from './GalleryItem.jsx';

const GalleryItemList = ({ galleryImages, updateCurrentImage }) => (
  <div className={styles.galleryItemList}>
    {galleryImages.map(image => (
      <GalleryItem
        key={image._id}
        image={image}
        updateCurrentImage={updateCurrentImage}
      />
    ))}
  </div>
);

export default GalleryItemList;