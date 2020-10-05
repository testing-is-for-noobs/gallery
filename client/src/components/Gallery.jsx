import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import expand from '../images/expand.png';
import close from '../images/close.png';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: false,
      fullScreen: false,
      fullScreenBtn: expand,
    };
    this.handleZoomToggle = this.handleZoomToggle.bind(this);
    this.handleFullScreen = this.handleFullScreen.bind(this);
    this.handleFullScreenBtn = this.handleFullScreenBtn.bind(this);
  }

  handleZoomToggle() {
    console.log('toggle');
    const { zoom } = this.state;
    this.setState({
      zoom: !zoom,
    }, () => console.log(zoom));
  }

  handleFullScreen() {
    console.log('full screen');
    const { fullScreen } = this.state;
    this.handleFullScreenBtn();
    this.setState({
      fullScreen: !fullScreen,
    }, () => console.log(fullScreen));
  }

  handleFullScreenBtn() {
    console.log('toggle full screen btn style');
    const { fullScreenBtn } = this.state;
    let updatedStatus = expand;
    if (fullScreenBtn === expand) {
      updatedStatus = close;
    }
    this.setState({
      fullScreenBtn: updatedStatus,
    }, () => console.log('updated status:', updatedStatus));
  }

  render() {
    const { currentImage, handlePrevClick, handleNextClick } = this.props;
    const { zoom, fullScreen, fullScreenBtn } = this.state;
    const zoomStyle = zoom ? styles.currentImageActive : styles.currentImage;
    const fullScreenStyle = fullScreen ? styles.sliderFullScreen : styles.slider;

    return (
      <div className={fullScreenStyle}>
        <button type="button" className={styles.currentImageContainer} onClick={this.handleZoomToggle}>
          <img className={zoomStyle} src={currentImage} alt="main slide" />
        </button>
        <button type="button" className={styles.full_screen} onClick={this.handleFullScreen}>
          <img className={styles.fullScreen_icon} src={fullScreenBtn} alt="close icon" />
          <p className={styles.full_screen_words}>Full screen</p>
        </button>
        <button type="button" className={`${styles.prev} ${styles.slide_btn}`} onClick={handlePrevClick}>
          <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true" style={{ transform: 'rotate(180deg)' }}>
            <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" />
          </svg>
        </button>
        <button type="button" className={`${styles.next} ${styles.slide_btn}`} onClick={handleNextClick}>
          <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true">
            <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" />
          </svg>
        </button>
      </div>
    );
  }
}

Gallery.propTypes = {
  currentImage: PropTypes.string.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
};

export default Gallery;
