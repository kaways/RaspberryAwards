import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import GridMessages from '../pages/GridMessages';

export const paths = require('./paths');

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path={paths.gridMessages} element={<GridMessages />} />
      <Route exact path={paths.welcome} element={<Welcome />} />
      <Route render={() => <h1>404</h1>} />
    </Routes>
  );
}
