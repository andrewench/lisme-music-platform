import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useMatch } from 'react-router-dom';

const Artists = () => {
  let {path} = useMatch();

  return (
    <div className="App-Artists">
      <h3>Artists</h3>

      <Router>
        <Link to="/poylow">Poylow</Link>
        <Routes>
          <Route path={`${path}/:contentId`} element={<Content />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

const Content = () => {
  let {contentId} = useParams();

  return (
    <div>
      <h3>{contentId}</h3>
    </div>
  )
}

export default Artists