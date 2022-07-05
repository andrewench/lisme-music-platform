import React from 'react';
import MoreListeners from '../assets/img/MoreListeners.png';

const UserAvatarBox = ({ className, avatar, size, username }) => {
  return (
    <div className={`User-AvatarBox ${className}`}>
      {
        size
          ? <img
              className="User-Avatar App-Img"
              width={size}
              height={size}
              src={avatar ? avatar : MoreListeners}
              alt={username} />
          : <img
              className="User-Avatar App-Img"
              src={avatar ? avatar : MoreListeners}
              alt={username} />
      }
    </div>
  )
}

export default UserAvatarBox