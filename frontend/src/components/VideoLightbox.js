// components/VideoLightbox.js
import React, { useState } from 'react';

const VideoLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const lightbox_open = () => setIsOpen(true);
  const lightbox_close = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div id="light">
          <div className="boxclose" onClick={lightbox_close}></div>
          <iframe 
            src="https://www.youtube.com/embed/HmrvP-uN0Kg" 
            allowFullScreen
            title="Gardening Video"
          ></iframe>
        </div>
      )}
      
      <div id="fade1" onClick={lightbox_close}></div>
      <div className="vedio-img">
        <button onClick={lightbox_open} className="position-relative black-layer">
          <img className="thumb poster-con index1-poster" 
            src="/assets/images/vedio-img.jpg" 
            alt="video thumbnail"
          />
          <div className="video-wrap position-absolute">
            <img src="/assets/images/play-icon.png" alt="play" />
          </div>
        </button>
      </div>
    </>
  );
};

export default VideoLightbox;