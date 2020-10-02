import React from 'react';
import styles from './style.css';
import GalleryItem from './GalleryItem';

const GalleryItemList = ({
  galleryImages,
  currentIndex,
  updateCurrentImage,
  handlePrevClick,
  handleNextClick
}) => (
  <div className="itemList_container">
    <button type="button" className={styles.side_prev} onClick={handlePrevClick}>&#7610;</button>
    <div className={styles.galleryItemList}>
      {galleryImages.map(image => (
        <GalleryItem
          key={image._id}
          image={image}
          updateCurrentImage={updateCurrentImage}
          currentIndex={currentIndex}
        />
      ))}
    </div>
    <button type="button" className={styles.side_next} onClick={handleNextClick}>&#7515;</button>
  </div>
);

export default GalleryItemList;