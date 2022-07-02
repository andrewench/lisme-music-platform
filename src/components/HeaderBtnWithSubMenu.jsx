import React from 'react'

const HeaderBtnWithSubMenu = ({title}) => {
  return (
    <button className="App-Btn Header-MenuList Header-Link fl">
      <p className="MenuList-Label">{title}</p>
      <ion-icon name="chevron-down-outline"></ion-icon>
    </button>
  )
}

export default HeaderBtnWithSubMenu