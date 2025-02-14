import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import ReactDOM from "react-dom/client";
import Routes from './routes';
import Store from './store';
import Layout from './components/Layout';
import { NavBar } from './components/NavBar';
import "./index.scss";
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Layout>
        <Router>
          <NavBar />
          <ConfigProvider locale={ptBR}>
            <Routes />
          </ConfigProvider>
        </Router>
      </Layout>
    </React.StrictMode>
  </Provider>,
);
