import React from 'react';
import MapComponent from './MapComponent';
import VideoGrid from './VideoGrid';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="map-pane">
        <MapComponent />
      </div>
      <div className="video-pane">
        <VideoGrid />
      </div>
    </div>
  );
};

export default Dashboard;
