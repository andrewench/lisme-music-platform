import React from 'react';
import MultiMenuButton from './MultiMenuButton';

const HeaderMultiMenu = () => {
  return (
    <div className="Header-MultiMenu fl">
      {/* <MultiMenuButton type="lang" /> */}
      <button className="Header-MultiMenuButton MultiMenu-Lang App-Btn fl fl-row-cntr">
        <ion-icon name="language-outline"></ion-icon>
        <p className="Lang-Label">RU</p>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </button>
      <MultiMenuButton type="theme--dark" />
      <MultiMenuButton type="support" />
    </div>
  )
}

export default HeaderMultiMenu