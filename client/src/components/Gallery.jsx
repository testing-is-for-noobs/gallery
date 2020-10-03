import React from 'react';
import styles from './style.css';
import expand from '../images/expand.png';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: false,
      fullScreen: false,
    };
    this.handleZoomToggle = this.handleZoomToggle.bind(this);
    this.handleFullScreen = this.handleFullScreen.bind(this);
  }

  handleZoomToggle() {
    console.log('toggle');
    this.setState({
      zoom: !this.state.zoom
    }, () => console.log(this.state.zoom));
  }

  handleFullScreen() {
    console.log('full screen');
    // this.setState({
    //   fullScreen: !this.state.fullScreen
    // }, () => console.log(this.state.fullScreen));
    document.getElementById('app').style.height = '100vh';
  }

  render() {
    const { currentImage, handlePrevClick, handleNextClick } = this.props;
    let zoomStyle = this.state.zoom ? styles.currentImageActive : styles.currentImage;

    return (
      <div className={styles.slider}>
        <div onClick={this.handleZoomToggle}>
          <img className={zoomStyle} src={currentImage} alt="main slide" />
        </div>
        <button type="button" className={styles.full_screen} onClick={this.handleFullScreen}>
          <img src={expand} alt="expand icon" />
          <p className={styles.full_screen_words}>Full screen</p>
        </button>
        <button type="button" className={styles.prev} onClick={handlePrevClick}>
          <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true" style={{ transform: 'rotate(180deg)' }}><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
        </button>
        <button type="button" className={styles.next} onClick={handleNextClick}>
          <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
        </button>
      </div>
    );
  }
}

export default Gallery;