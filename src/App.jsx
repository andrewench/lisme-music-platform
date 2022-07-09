import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppPreloader from './components/AppPreloader';
import ElectronTitleBar from './components/ElectronTitleBar';
import AppContent from './struct/AppContent';
import AppFooter from './struct/AppFooter';
import './styles/App.sass';

const App = () => {
  return (
    <Router>
      <div className="App">
        <ElectronTitleBar />
        <AppPreloader />
        <AppContent />
        {/* <AppFooter /> */}
      </div>
    </Router>
  )
}

export default App