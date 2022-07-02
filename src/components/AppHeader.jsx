import React from 'react';
import HeaderProfile from './HeaderProfile';
import HeaderLinks from './HeaderLinks';
import HeaderMultiMenu from './HeaderMultiMenu';

const AppHeader = () => {
  return (
    <div className="App-Header fl fl-row-cntr fl-jstf-between">
      <HeaderProfile />
      <HeaderLinks />
      <HeaderMultiMenu />
    </div>
  )
}

export default AppHeader