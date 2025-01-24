import React, { useState, useEffect } from 'react';

import b2 from '../../public/images/umundu_train.jpeg';
import ua from '../../public/images/ocha.jpeg';
import styles from '@/styles/courasel.module.css';
import Image from 'next/image'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    b1,
    b2,
    ua
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.carouselcontainer}>
      <button className={styles.prevbutton} onClick={prevImage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
        </svg>
      </button>
      <Image priority src={images[currentIndex]} alt={`image ${currentIndex + 1}`} className={styles.carouselimage} />
      <button className={styles.nextbutton} onClick={nextImage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
          <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg>
      </button>
      <span className={styles.centeredspan}>
        <strong>Umundu</strong> is a native word originating from the Embu
        Community in Kenya. It means{" "}
        <strong>The Spirit of Togetherness</strong>
      </span>
    </div>
  );
};

export default Carousel;
