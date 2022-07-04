import React from 'react';

const MusicPlayerControlBtn = ({ className, icon }) => {
  return (
    <button className={`${className} MusicPlayer-ControlBtn`}>
      <img src={icon} draggable="false" />
    </button>
  )
}

export default MusicPlayerControlBtn