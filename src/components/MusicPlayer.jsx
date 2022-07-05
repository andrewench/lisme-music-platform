import React from 'react';
import MusicPlayerControlBtn from './MusicPlayerControlBtn';
import MusicPlayerShuffleTrackIcon from '../assets/icons/MusicPlayerShuffleTrackIcon.svg';
import MusicPlayerPrevTrackIcon from '../assets/icons/MusicPlayerPrevTrackIcon.svg';
import MusicPlayerPlayTrackIcon from '../assets/icons/MusicPlayerPlayTrackIcon.svg';
import MusicPlayerNextTrackIcon from '../assets/icons/MusicPlayerNextTrackIcon.svg';
import MusicPlayerLoopTrackIcon from '../assets/icons/MusicPlayerLoopTrackIcon.svg';
import MusicPlayerProgressBar from './MusicPlayerProgressBar';

const MusicPlayer = () => {
  return (
    <div className="Footer-MusicPlayer">
      <div className="MusicPlayer-Controls fl fl-row-cntr fl-col-cntr">
        <MusicPlayerControlBtn
          className="MusicPlayer-ControlBtn_action_shuffle"
          icon={MusicPlayerShuffleTrackIcon} />
        <MusicPlayerControlBtn
          className="MusicPlayer-ControlBtn_action_prev"
          icon={MusicPlayerPrevTrackIcon} />
        <MusicPlayerControlBtn
          className="MusicPlayer-ControlBtn_action_play"
          icon={MusicPlayerPlayTrackIcon} />
        <MusicPlayerControlBtn
          className="MusicPlayer-ControlBtn_action_next"
          icon={MusicPlayerNextTrackIcon} />
        <MusicPlayerControlBtn
          className="MusicPlayer-ControlBtn_action_loop"
          icon={MusicPlayerLoopTrackIcon} />
      </div>
      <div className="MusicPlayer-ProgressBar fl fl-row-cntr">
        <p className="MusicPlayer-TimeIndicator_action_prev TimeIndicator">2:05</p>
        <MusicPlayerProgressBar />
        <p className="MusicPlayer-TimeIndicator_action_next TimeIndicator">3:23</p>
      </div>
    </div>
  )
}

export default MusicPlayer