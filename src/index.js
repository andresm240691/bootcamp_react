import React from 'react';
import ReactDOM from 'react-dom/client';
// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// ESTILOS PROPIOS
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import AppRoutingFinal from './AppRoutingFinal';

// Redux imports
import { createAppAsyncStore, createAppStore } from './store/config/storeConfig';
import { Provider } from 'react-redux';
import AppSagas from './AppSagas';

let store = createAppStore();

// let appAsyncStore = createAppAsyncStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      {/* <AppRoutingOne></AppRoutingOne> */}
      {/* <AppRoutingFinal></AppRoutingFinal> */}
      {/* <AppSagas></AppSagas> */}
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
