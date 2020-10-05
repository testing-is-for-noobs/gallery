import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const GalleryItem = ({
  image,
  updateCurrentImage,
  updateCurrentBorder,
}) => {
  function handleGalleryClick() {
    console.log(image.img_url);
    const imageURL = image.img_url;
    updateCurrentImage(imageURL);
    updateCurrentBorder(image._id - 1);
  }

  return (
    <div className={styles.galleryItem}>
      <img
        src={image.img_url}
        alt={image.name}
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
