import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './struct/AppHeader';
import AppContent from './struct/AppContent';
import AppFooter from './struct/AppFooter';
import './styles/App.sass';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
    </Router>
  )
}

export default App