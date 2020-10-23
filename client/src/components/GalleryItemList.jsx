import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import GalleryItem from './GalleryItem';

const GalleryItemList = ({
  galleryImages,
  currentIndex,
  updateCurrentImage,
  currentBorder,
  updateCurrentBorder,
  handleScrollUp,
  handleScrollDown,
}) => (
  <div className="itemList_container">
    <button type="button" className={styles.side_prev} onClick={handleScrollUp}>
      <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true" style={{ transform: 'rotate(-90deg)' }}><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
    </button>
    <div id="galleryItemList" className={styles.galleryItemList}>
      {galleryImages.map((image) => (
        <div
          key={image.id}
          className={currentBorder[image.id - 1] ? styles.border : styles.no_border}
        >
          <GalleryItem
            image={image}
            updateCurrentImage={updateCurrentImage}
            currentIndex={currentIndex}
            currentBorder={currentBorder}
            updateCurrentBorder={updateCurrentBorder}
          />
        </div>
      ))}
    </div>
    <button type="button" className={styles.side_next} onClick={handleScrollDown}>
      <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true" style={{ transform: 'rotate(90deg)' }}><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
    </button>
  </div>
);

export default GalleryItemList;

GalleryItemList.propTypes = {
  galleryImages: PropTypes.instanceOf(Object),
  currentIndex: PropTypes.number.isRequired,
  updateCurrentImage: PropTypes.func.isRequired,
  currentBorder: PropTypes.instanceOf(Object),
  updateCurrentBorder: PropTypes.func.isRequired,
  handleScrollUp: PropTypes.func.isRequired,
  handleScrollDown: PropTypes.func.isRequired,
};

GalleryItemList.defaultProps = {
  galleryImages: null,
  currentBorder: null,
};
