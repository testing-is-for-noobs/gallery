import React from 'react';
import styles from './style.css';
import GalleryItem from './GalleryItem';

const GalleryItemList = ({
  galleryImages,
  currentIndex,
  updateCurrentImage,
  currentBorder,
  handlePrevClick,
  handleNextClick
}) => (
  <div className="itemList_container">
    <button type="button" className={styles.side_prev} onClick={handlePrevClick}>
      <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true" style={{ transform: 'rotate(-90deg)' }}><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
    </button>
    <div id="galleryItemList" className={styles.galleryItemList}>
      {galleryImages.map((image, i) => (
        <div className={currentBorder[i] ? styles.border : styles.no_border}>
          <GalleryItem
            key={image._id}
            image={image}
            updateCurrentImage={updateCurrentImage}
            currentIndex={currentIndex}
            currentBorder={currentBorder}
          />
        </div>
      ))}
    </div>
    <button type="button" className={styles.side_next} onClick={handleNextClick}>
      <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true" style={{ transform: 'rotate(90deg)' }}><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
    </button>
  </div>
);

// class GalleryItemList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const {
//       galleryImages,
//       currentIndex,
//       updateCurrentImage,
//       currentBorder,
//       handlePrevClick,
//       handleNextClick
//     } = this.props;
//     return (
//       <div className="itemList_container">
//         <button type="button" className={styles.side_prev} onClick={handlePrevClick}>
//           <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true" style={{ transform: 'rotate(-90deg)' }}><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
//         </button>
//         <div id="galleryItemList" className={styles.galleryItemList}>
//           {galleryImages.map((image, i) => (
//             <div className={currentBorder[i] ? styles.border : styles.no_border}>
//               <GalleryItem
//                 key={image._id}
//                 image={image}
//                 updateCurrentImage={updateCurrentImage}
//                 currentIndex={currentIndex}
//                 currentBorder={currentBorder}
//               />
//             </div>
//           ))}
//         </div>
//         <button type="button" className={styles.side_next} onClick={handleNextClick}>
//           <svg width="18px" height="18px" viewBox="0 0 18 28" aria-hidden="true" style={{ transform: 'rotate(90deg)' }}><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" /></svg>
//         </button>
//       </div>
//     )
//   }
// };

export default GalleryItemList;