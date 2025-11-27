import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from './Modal';
import './VideoGrid.css';

const initialVideos = [
  { id: 1, title: 'Villa Pehuenia', src: '/Videos/Villa_Pehuenia.gif' },
  { id: 2, title: 'Collon Cura', src: '/Videos/collon_cura.gif' },
  { id: 3, title: 'Lago MaryMenuco', src: '/Videos/marymenunco.gif' },
  { id: 4, title: 'S.M de los Andes (CC Diaz)', src: '/Videos/sma_Casa_de_te_arrayan_2.gif' },
  { id: 5, title: 'Cerro Bayo VLA', src: '/Videos/Cerro_bayo.gif' },
  { id: 6, title: 'Rahue', src: '/Videos/rahue.gif'  },
  { id: 7, title: 'S.M de los Andes (parques)', src: '/Videos/sma_parques.gif' },
  { id: 8, title: 'Villa Lago Meliquina', src: '/Videos/meliquina.gif' },
  { id: 9, title: 'Boca Chimehuin', src: '/Videos/boca_chimehuin.gif' },
  { id: 10, title: 'Camera 10' },
  { id: 11, title: 'Camera 11' },
  { id: 12, title: 'Camera 12' },
  { id: 13, title: 'Camera 13' },
  { id: 14, title: 'Camera 14' },
  { id: 15, title: 'Camera 15' },
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
