import React from 'react';
import SideBarItem from './SideBarItem';

const ProfileSideBar = () => {
  return (
    <ul className="Profile-SideBar fl fl-col fl-col-cntr">
      <SideBarItem type="user" title="My profile" />
      <SideBarItem type="chat" title="Messenger" isShowCounter={true} />
      <SideBarItem type="friends" title="Friends" isShowCounter={true} />
      <SideBarItem type="favourites" title="Favourites" />
      <SideBarItem type="search" title="Search" />
      <SideBarItem type="settings" title="Settings" />
    </ul>
  )
}

export default ProfileSideBar