import React from 'react';
import SideBarItem from './SideBarItem';

const ProfileSideBar = () => {
  return (
    <div className="Profile-SideBarBox App-UI_always-on-top fl fl-col fl-col-cntr">
      <ul className="Profile-SideBar fl fl-col">
        <SideBarItem type="user" title="My profile" />
        <SideBarItem type="chat" title="Messenger" isShowCounter={true} />
        <SideBarItem type="friends" title="Friends" isShowCounter={true} />
        <SideBarItem type="favourites" title="Favourites" />
        <SideBarItem type="search" title="Search" />
        <SideBarItem type="settings" title="Settings" />
      </ul>
    </div>
  )
}

export default ProfileSideBar