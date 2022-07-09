import React from 'react';
import HeaderProfile from './HeaderProfile';
import SideBarItem from './SideBarItem';

const ProfileSideBar = () => {
  return (
    <div className="Profile-SideBarBox SideBar_size_mini fl fl-col fl-row-cntr">
      <HeaderProfile />
      <ul className="Profile-SideBar fl fl-col fl-row-cntr">
        <SideBarItem type="user" title="My profile" />
        <SideBarItem type="chat" title="Messenger" isShowCounter={true} />
        <SideBarItem type="friends" title="Friends" isShowCounter={true} />
        <SideBarItem type="favourites" title="Favourites" />
        <SideBarItem type="search" title="Search" />
        <SideBarItem type="settings" title="Settings" />
        <button className="SideBar-ToogleSideBar UI-Btn">
          <ion-icon name="caret-forward-outline"></ion-icon>
        </button>
      </ul>
    </div>
  )
}

export default ProfileSideBar