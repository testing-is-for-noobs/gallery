import React from 'react';
import axios from 'axios';
import styles from './style.css';
import GalleryItemList from './GalleryItemList';
import Gallery from './Gallery';
import pixelAlign from './pixelAlign.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryImages: [],
      currentImage: '',
      currentIndex: 0,
      currentBorder: {
        0: true,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
      },
    };

    this.updateCurrentImage = this.updateCurrentImage.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  componentDidMount() {
    axios.get('/1/getGalleries')
      .then((res) => {
        this.setState({
          galleryImages: res.data[0].details,
          currentImage: res.data[0].details[0].img_url,
        }, () => console.log('App.jsx - galleryImages state: ', this.state));
      }).catch((err) => {
        console.error('[FAILED] get request from App.jsx: ', err);
      });
  }

  updateCurrentImage(image) {
    this.setState({
      currentImage: image,
    });
  }

  handlePrevClick() {
    console.log('prev click');
    const { currentIndex, galleryImages } = this.state;
    let index = currentIndex;
    let length = galleryImages.length;

    if (index < 1) {
      index = length - 1;
      document.getElementById('galleryItemList').scrollBy(0, 350);
    } else {
      index -= 1;
      document.getElementById('galleryItemList').scrollBy(0, -65);
    }
    this.setState({
      currentIndex: index,
      currentImage: galleryImages[index].img_url,
    }, () => {console.log(currentIndex)} );
  }

  handleNextClick() {
    console.log('next click');
    const { currentIndex, galleryImages } = this.state;
    let index = currentIndex;
    let length = galleryImages.length;

    if (index === length - 1) {
      index = 0;
      document.getElementById('galleryItemList').scrollBy(0, -350);
    } else {
      index += 1;
      document.getElementById('galleryItemList').scrollBy(0, 65);
    }
    this.setState({
      currentIndex: index,
      currentImage: galleryImages[index].img_url,
    }, () => { console.log(currentIndex); });
  }

  render() {
    const { galleryImages, currentImage, currentIndex, currentBorder } = this.state;
    return (
      <div className={styles.app}>
      {/* <div style={{ background: `url(${pixelAlign})`, height:'100vh', backgroundRepeat: 'no-repeat' }}> */}
        {/* <h1>Gallery MaN gOd B</h1> */}
        <div className={styles.galleries_container}>
          <GalleryItemList
            galleryImages={galleryImages}
            currentIndex={currentIndex}
            handlePrevClick={this.handlePrevClick}
            handleNextClick={this.handleNextClick}
            updateCurrentImage={this.updateCurrentImage}
            currentBorder={currentBorder}
          />
        </div>
        <div>
          <Gallery
            currentImage={currentImage}
            handlePrevClick={this.handlePrevClick}
            handleNextClick={this.handleNextClick}
          />
        </div>
     {/* </div> */}
     </div>
    );
  }
}

export default App;
