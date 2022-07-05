import React from 'react';
import ListenersShowcase from '../components/ListenersShowcase';
import MusicPlayer from '../components/MusicPlayer';
import MusicPlayerProgressBar from '../components/MusicPlayerProgressBar';

const AppFooter = () => {
  return (
    <div className="AppFooter Page-Pt fl fl-jstf-between">
      <ListenersShowcase />
      <MusicPlayer />
      <div className="MusicPlayer-VolumeIndicator">
        <MusicPlayerProgressBar className="ProgressBar-VolumeIndicator" />
      </div>
    </div>
  )
}

export default AppFooter