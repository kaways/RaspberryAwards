import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
import Layout from "../components/Layout";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
