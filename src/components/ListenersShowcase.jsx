import React from 'react';
import UserAvatarBox from './UserAvatarBox';
import FirstListenerAvatar from '../assets/img/ListenerAvatar_1.png';
import SecondListenerAvatar from '../assets/img/ListenerAvatar_2.png';
import ThirdListenerAvatar from '../assets/img/ListenerAvatar_3.png';
import FourthListenerAvatar from '../assets/img/ListenerAvatar_4.png';

const ListenersShowcase = () => {
  return (
    <div className="Listeners-Showcase">
      <div className="Listeners-Label fl fl-row-cntr">
        <span>Listening now</span>
        <ion-icon name="radio-outline"></ion-icon>
      </div>
      <div className="Listeners-ShowcaseList fl">
        <UserAvatarBox
          className="Listeners-User"
          avatar={FirstListenerAvatar}
          username="Marianna Malloc"
          size="40" />
        <UserAvatarBox
          className="Listeners-User"
          avatar={SecondListenerAvatar}
          username="Joshua McAdams"
          size="40" />
        <UserAvatarBox
          className="Listeners-User"
          avatar={ThirdListenerAvatar}
          username="Elizabeth Harmon"
          size="40" />
        <UserAvatarBox
          className="Listeners-User"
          avatar={FourthListenerAvatar}
          username="Nicole Bruxon"
          size="40" />
        <UserAvatarBox
          className="Listeners-User"
          username="More Listeners"
          size="40" />
      </div>
    </div>
  )
}

export default ListenersShowcase