import React from 'react';
import MusicPlayer from '../components/MusicPlayer';

const AppFooter = () => {
  return (
    <div className="AppFooter fl fl-jstf-between">
      <div className="Footer-Listeners">1</div>
      <MusicPlayer />
      <div className="MusicPlayer-Volume">3</div>
    </div>
  )
}

export default AppFooter