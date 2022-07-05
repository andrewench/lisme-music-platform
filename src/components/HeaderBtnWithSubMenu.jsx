import React from 'react';
import MenuListDropItem from './MenuListDropItem';

const HeaderBtnWithSubMenu = ({title}) => {
  return (
    <div className="Header-MenuList">
      <button className="App-Btn Header-MenuList Header-Link fl">
        <p className="MenuList-Label">{title}</p>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </button>

      <ul className="MenuList-Drop">
        <MenuListDropItem title="My account" />
        <MenuListDropItem title="Saved Playlists" />
        <MenuListDropItem title="Liked Songs" />
        <MenuListDropItem title="Followed Artists" />
        <MenuListDropItem title="Recommendations" />
      </ul>
    </div>
  )
}

export default HeaderBtnWithSubMenu