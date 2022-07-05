import React from 'react'

const MusicPlayerProgressBar = ({className}) => {
  return (
    <div className={`${className} MusicPlayer-ProgressBar`}>
      <div className="ProgressBar-Drag ProgressBar-ProgressLine"></div>
      <div className="ProgressBar-Track ProgressBar-ProgressLine"></div>
    </div>
  )
}

export default MusicPlayerProgressBar