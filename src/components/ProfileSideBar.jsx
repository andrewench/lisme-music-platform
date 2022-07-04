import React from 'react';
import SideBarItem from './SideBarItem';

const ProfileSideBar = () => {
  return (
    <ul className="Profile-SideBar">
      <SideBarItem type="user" />
      <SideBarItem type="chat" />
      <SideBarItem type="friends" />
      <SideBarItem type="favourites" />
      <SideBarItem type="search" />
      <SideBarItem type="settings" />
    </ul>
  )
}

export default ProfileSideBar