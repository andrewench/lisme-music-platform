import React from 'react';
import UserPoster from '../assets/img/UserPoster.png';

const Albums = () => {
  return (
    <div className="App-Albums Page-Pt">
      <div className="Album-UserPoster">
        <div className="UserPoster-Poster">
          <img className="UserPoster-Img" src={UserPoster} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Albums