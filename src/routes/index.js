import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ListMovies from '../pages/ListMovies';

export const paths = require('./paths');

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path={paths.listMovies} element={<ListMovies />} />
      <Route exact path={paths.dashboard} element={<Dashboard />} />
      <Route render={() => <h1>404</h1>} />
    </Routes>
  );
}
