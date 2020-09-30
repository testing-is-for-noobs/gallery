import React from 'react';
import axios from 'axios';
import styles from './style.css';
import Gallery from './Gallery.jsx';
import GalleryItemList from './GalleryItemList.jsx';
import pixelAlign from './pixelAlign.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      galleryImages: [],
      currentGalleryIndex: 0,
    };
  }

  componentDidMount() {
    const { galleryImages } = this.state;
    axios.get('/1/getGalleries')
      .then((res) => {
        this.setState({
          galleryImages: res.data[0].details,
        }, () => console.log('App.jsx - galleryImages state: ', galleryImages));
      }).catch((err) => {
        console.error('[FAILED] get request from App.jsx: ', err);
      });
  }

  render() {
    const { galleryImages } = this.state;
    return (
      <div style={{ background: `url(${pixelAlign})`, height:'100vh', backgroundRepeat: 'no-repeat' }}>
        <h1>Gallery MaN gOd B</h1>
        <div className={styles.app}>
          <GalleryItemList galleryImages={galleryImages} />
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
