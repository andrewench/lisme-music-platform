import React from 'react';
import ProfileSideBar from '../components/ProfileSideBar';
import UserPoster from '../assets/img/UserPoster.png';
// import AlbumTrack from '../assets/img/AlbumTrack.jpg';

const Albums = () => {
  return (
    <div className="App-Albums Page-Pt">
      <div className="Album-UserPoster">
        <div className="UserPoster-Poster">
          <img className="UserPoster-Img" src={UserPoster} alt="" />
        </div>
      </div>

      {/* <div className="Album-Track">
        <img src={AlbumTrack} alt="" draggable="false" />
      </div> */}
    </div>
  )
}

export default Albums