import React from 'react';
import MultiMenuButton from './MultiMenuButton';

const HeaderMultiMenu = () => {
  return (
    <div className="Header-MultiMenu">
      <MultiMenuButton type="lang" />
      <MultiMenuButton type="theme--dark" />
      <MultiMenuButton type="support" />
    </div>
  )
}

export default HeaderMultiMenu