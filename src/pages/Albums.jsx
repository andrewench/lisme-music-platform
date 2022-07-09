import React from 'react';
import UserPoster from '../assets/img/UserPoster.jpg';
import AlbumTrack from '../assets/img/AlbumTrack.jpg';
import SoundtrackItem from '../components/SoundtrackItem';

const Albums = () => {
  return (
    <div className="App-Albums ScrollBox">
      <div className="Album-ArtistPoster">
        <div className="ArtistPoster-Poster">
          <img className="ArtistPoster-Img" src={UserPoster} alt="" draggable="false" />
        </div>

        <div className="Album-Track">
          <div className="Track-Cover fl">
            <img className="Track-Img" width="200" height="200" src={AlbumTrack} alt="Got Me - Poylow, Nitto-Onna" draggable="false" />
            <div className="Track-ArtistAccount">
              <div className="Track-Title">
                <p><span>Got me</span>(Poylow, Nito-Onna)</p>
              </div>
              <div className="Artist-PersonalData fl fl-jstf-between">
                <div className="Artist-UsernameBox fl fl-row-cntr">
                  <p className="Artist-Username">Poylow</p>
                  <div className="Artist-Verified">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                  </div>
                </div>
                <button className="Artist-Follow App-UI_rounded">Follow</button>
              </div>
            </div>
          </div>
          {/* <div className="Track-Metadata">
            <p className="Album-AlbumName"><span>Album:</span>Single</p>
          </div>
          <div className="Track-Stats fl fl-jstf-around">
            <button className="Track-AddLike Metadata-Counter fl fl-row-cntr">
              <ion-icon name="heart"></ion-icon>
              <span>7.230</span>
            </button>
            <p className="Track-ListeningCounter Metadata-Counter fl fl-row-cntr">
              <ion-icon name="headset-outline"></ion-icon>
              <span>12.430</span>
            </p>
          </div> */}
        </div>
        <div className="Album-Soundtracks">
          <SoundtrackItem />
          <SoundtrackItem />
          <SoundtrackItem />
          <SoundtrackItem />
          <SoundtrackItem />
          <SoundtrackItem />
          <SoundtrackItem />
          <SoundtrackItem />
          <SoundtrackItem />
          <SoundtrackItem />
          <SoundtrackItem />
          <SoundtrackItem />
        </div>
      </div>
    </div>
  )
}

export default Albums