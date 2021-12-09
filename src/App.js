import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from 'components/NavBar';
import { Jambotron } from 'components/Jambotron';
import { ShowList } from './components/ShowsList';
import { ShowDetails } from './components/ShowDetails';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Jambotron />
      <Routes>
        <Route exact path="/" element={<ShowList />} />
      </Routes>
      <Routes>
        <Route exact path="/showDetails" element={<ShowDetails />} />
      </Routes>
    </Router>
  )
}
