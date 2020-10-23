/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const GalleryItem = ({
  image,
  updateCurrentImage,
  updateCurrentBorder,
}) => {
  function handleGalleryClick() {
    // console.log(image.image);
    const imageURL = image.image;
    updateCurrentImage(imageURL);
    updateCurrentBorder(image.id - 1);
  }

  return (
    <div className={styles.galleryItem}>
      <img
        src={image.image}
        alt={image.description}
        onClick={() => { handleGalleryClick(); }}
      />
    </div>
  );
};

GalleryItem.propTypes = {
  image: PropTypes.instanceOf(Object),
  updateCurrentImage: PropTypes.func.isRequired,
  updateCurrentBorder: PropTypes.func.isRequired,
};

GalleryItem.defaultProps = {
  image: null,
};

export default GalleryItem;
