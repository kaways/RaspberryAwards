import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
import App from './App';
import Store from './store';

root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </Provider>,
);
