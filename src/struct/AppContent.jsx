import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import Home from '../pages/Home';
import Podcasts from '../pages/Podcasts';
import Playlists from '../pages/Playlists';
import Artists from '../pages/Artists';
import Albums from '../pages/Albums';
import ProfileSideBar from '../components/ProfileSideBar';

const AppContent = () => {
  return (
    <div className="AppContent fl">
      <ProfileSideBar />

      <div className="Content-Component">
        <AppHeader />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/podcasts" element={<Podcasts />}></Route>
          <Route path="/playlists" element={<Playlists />}></Route>
          <Route path="/artists" element={<Artists />}></Route>
          <Route path="/albums" element={<Albums />}></Route>
        </Routes>
      </div>

    </div>
  )
}

export default AppContent