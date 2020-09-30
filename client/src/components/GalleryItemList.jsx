import React from 'react';
import styles from './style.css';
import GalleryItem from './GalleryItem.jsx';
import Gallery from './Gallery.jsx'

const GalleryItemList = ({ galleryImages }) => {
  return(
    <div className={styles.galleries_container}>
      <div className={styles.galleryItemList}>
        {galleryImages.map(image => (
          <GalleryItem key={image._id} image={image} />
        ))}
      </div>
      <Gallery />
    </div>
  )
}

export default GalleryItemList;