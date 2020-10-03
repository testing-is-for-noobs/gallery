import React from 'react';
import styles from './style.css';

class GalleryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      border: false,
    };
    // let {image, currentIndex, updateCurrentImage} = this.props;
    this.handleGalleryClick = this.handleGalleryClick.bind(this);
  }

  handleGalleryClick() {
    const { image, currentIndex, updateCurrentImage, currentBorder } = this.props;
    console.log(image.img_url);
    const imageURL = image.img_url;
    updateCurrentImage(imageURL);
  }

  render() {
    let { image } = this.props;
    return (
      <div className={styles.galleryItem}>
        <img
          src={image.img_url}
          alt={image.name}
          onClick={() => { this.handleGalleryClick() }}
        />
      </div>
    );
  }
};

export default GalleryItem;