import React from 'react';
import UserAvatarImg from '../assets/img/UserAvatar.png';

const UserInfoBar = ({username, uid}) => {
  return (
    <div className="User-InfoBar fl fl-row-cntr">
      <div className="User-AvatarBox">
        <img
          className="User-Avatar App-Img"
          src={UserAvatarImg}
          alt={username} />
      </div>
      <div className="User-PersonalData">
        <div className="User-Username">{username}</div>
        <div className="User-Uid">ID: {uid}</div>
      </div>
    </div>
  )
}

export default UserInfoBar