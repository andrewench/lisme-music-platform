import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Podcasts from './pages/Podcasts';
import Playlists from './pages/Playlists';
import Artists from './pages/Artists';
import Albums from './pages/Albums';
import AppHeader from './components/AppHeader';
import './styles/App.sass';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <div className="AppContent">
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
    </Router>
  )
}

export default App