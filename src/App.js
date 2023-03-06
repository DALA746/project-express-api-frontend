import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from 'components/NavBar';
import { ShowList } from './components/ShowsList';
import { ShowDetails } from './components/ShowDetails';
import { Documentation } from './components/Documentation';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ShowList />} />
      </Routes>
      <Routes>
        <Route exact path="/shows" element={<ShowList />} />
      </Routes>
      <Routes>
        <Route exact path="/shows/:showID" element={<ShowDetails />} />
      </Routes>
      <Routes>
        <Route exact path="/documentation" element={<Documentation />} />
      </Routes>
    </Router>
  );
};
