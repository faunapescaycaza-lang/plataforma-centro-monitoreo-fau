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
  { id: 10, title: 'Villa Traful La Puntilla', src: '/Videos/villataful_la_puntilla.gif' },
  { id: 11, title: 'Villa Traful ingreso', src: '/Videos/Villa Traful Ingreso4.gif' },
  { id: 12, title: 'Villa Traful Torre', src: '/Videos/villa traful torre.gif' },
  { id: 13, title: 'Confluencia', src: '/Videos/confluencia.gif' },
  { id: 14, title: 'Correntoso Puente', src: '/Videos/Correntoso puente.gif' },
  { id: 15, title: 'Ingreso VLA - Correntoso', src: '/Videos/Villa la Angostura Ingreso Correntoso.gif' },
  { id: 16, title: 'Dina Huapi', src: '/Videos/Dina Huapi.gif' },
  { id: 17, title: 'Lago Correntoso', src: '/Videos/lago correntosp.gif' },
  { id: 18, title: 'Pilo Lil Ingreso', src: '/Videos/pilo lil.gif' },
  { id: 19, title: 'Primeros Pinos', src: '/Videos/primeros pinos.gif' },
  { id: 20, title: 'Rio Quilquihue-Lolog', src: '/Videos/Rio Quilquihue - lolog.gif' },
  { id: 21, title: 'J.de los Andes Ingreso', src: '/Videos/juniningreso.gif' },
  { id: 22, title: 'Aucapan', src: '/Videos/Aucapan.gif' },
  { id: 23, title: 'Ingreso Ruta 52', src: '/Videos/Ruta 52 JDLA.gif' },
  { id: 24, title: 'Fauna Chosmalal', src: '/Videos/Chosmalal.gif' },
  { id: 25, title: 'Lago Lolog JDLA', src: '/Videos/Lago lolog.gif' },
  { id: 26, title: 'Junin de los Andes', src: '/Videos/Junin de los Andes.gif' },
  { id: 27, title: 'Caviahue-Copahue' },
  { id: 28, title: 'Fauna Neuquén', src: '/Videos/Fauna Neuquen.gif' },
  { id: 29, title: 'Ingreso Chosmalal' },
  { id: 30, title: 'Muelle de Piedra', src: '/Videos/VLA - Muelle de Piedra.gif' },
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
