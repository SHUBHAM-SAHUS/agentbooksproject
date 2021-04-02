import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Main from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
<Main />
  </React.StrictMode>,
  document.getElementById('root')
);


