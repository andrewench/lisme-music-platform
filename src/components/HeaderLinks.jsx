import React from 'react';
import HeaderLink from './HeaderLink';
import HeaderBtnWithSubMenu from './HeaderBtnWithSubMenu';

const HeaderLinks = () => {
  return (
    <div className="Header-Links fl fl-row-cntr">
      <HeaderLink to="/podcasts" title="Podcasts" />
      <HeaderLink to="/playlists" title="Playlists" />
      <HeaderLink to="/artists" title="Artists" />
      <HeaderLink to="/albums" title="Albums" />
      <div className="App-SprLine"></div>
      <HeaderBtnWithSubMenu title="More" />
    </div>
  )
}

export default HeaderLinks