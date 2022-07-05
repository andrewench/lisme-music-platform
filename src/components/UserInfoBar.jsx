import React from 'react';
import UserAvatarBox from './UserAvatarBox';
import UserAvatarImg from '../assets/img/UserAvatar.png';

const UserInfoBar = ({username, uid}) => {
  return (
    <div className="User-InfoBar fl fl-row-cntr">
      <UserAvatarBox avatar={UserAvatarImg} username={username} />
      <div className="User-PersonalData">
        <div className="User-Username">{username}</div>
        <div className="User-Uid">ID: {uid}</div>
      </div>
    </div>
  )
}

export default UserInfoBar