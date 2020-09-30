import React from 'react';
import axios from 'axios';
import styles from './style.css';
import GalleryItemList from './GalleryItemList.jsx';
import Gallery from './Gallery.jsx'
import pixelAlign from './pixelAlign.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryImages: [],
      currentImage: '',
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
    console.log('click');
    this.setState({
      currentImage: image,
    });
  }

  handlePrevClick() {
    console.log('prev click')
  }

  handleNextClick() {
    console.log('next click')
  }

  render() {
    const { galleryImages, currentImage } = this.state;
    return (
      <div className={styles.app}>
      {/* <div style={{ background: `url(${pixelAlign})`, height:'100vh', backgroundRepeat: 'no-repeat' }}> */}
        {/* <h1>Gallery MaN gOd B</h1> */}
        <div className={styles.galleries_container}>
          <GalleryItemList
            galleryImages={galleryImages}
            updateCurrentImage={this.updateCurrentImage}
          />
        </div>
        <div>
          <Gallery currentImage={currentImage} />
        </div>
     {/* </div> */}
     </div>
    );
  }
}

export default App;
