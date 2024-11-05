import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import ReactDOM from "react-dom/client";
import App from './App';
import Store from './store';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </Provider>,
);
