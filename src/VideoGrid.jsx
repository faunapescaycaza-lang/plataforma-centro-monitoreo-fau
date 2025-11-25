import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from './Modal';
import './VideoGrid.css';

const initialVideos = [
  { id: 1, title: 'Villa Pehuenia', src: '/Videos/Villa_Pehuenia.gif' },
  { id: 2, title: 'Camera 2' },
  { id: 3, title: 'Camera 3' },
  { id: 4, title: 'Camera 4' },
  { id: 5, title: 'Camera 5' },
  { id: 6, title: 'Camera 6' },
  { id: 7, title: 'Camera 7' },
  { id: 8, title: 'Camera 8' },
  { id: 9, title: 'Camera 9' },
];

// Simplified item component - just shows a thumbnail/placeholder
const VideoItem = ({ video, onSelect }) => {
  const isGif = video.src && video.src.toLowerCase().endsWith('.gif');

  return (
    <div className="video-placeholder" onClick={() => onSelect(video)}>
      <div className="video-title">{video.title}</div>
      <div className="video-mock-content">
        {video.src ? (
          isGif ? (
            <img src={video.src} alt={video.title} className="gif-player" />
          ) : (
            // Show a play button for videos
            <div className="play-button-overlay">
              <svg className="play-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
              </svg>
            </div>
          )
        ) : (
          <p>Video stream unavailable</p>
        )}
      </div>
    </div>
  );
};

const VideoGrid = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openModal = (media) => {
    if (media.src) {
      setSelectedMedia(media);
    }
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const isSelectedGif = selectedMedia && selectedMedia.src.toLowerCase().endsWith('.gif');

  return (
    <>
      <div className="video-grid-container">
        <h2>Red de Cámaras Fauna Neuquén</h2>
        <div className="video-grid">
          {initialVideos.map((video) => (
            <VideoItem key={video.id} video={video} onSelect={openModal} />
          ))}
        </div>
      </div>

      {selectedMedia && (
        <Modal onClose={closeModal}>
          <h3>{selectedMedia.title}</h3>
          <div className="modal-media-wrapper">
            {isSelectedGif ? (
              <img src={selectedMedia.src} alt={selectedMedia.title} className="modal-media" />
            ) : (
              <ReactPlayer
                url={selectedMedia.src}
                playing={true}
                controls
                muted
                loop
                width="100%"
                height="100%"
              />
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default VideoGrid;
