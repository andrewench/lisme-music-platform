import React from 'react';
import HeaderProfile from '../components/HeaderProfile';
import HeaderLinks from '../components/HeaderLinks';
import HeaderMultiMenu from '../components/HeaderMultiMenu';

const AppHeader = () => {
  return (
    <div className="App-Header fl fl-row-cntr fl-jstf-between">
      <HeaderLinks />
    </div>
  )
}

export default AppHeader