import "bootstrap/dist/css/bootstrap.min.css";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import "react-mdl/extra/material.js";

import "react-mdl/extra/material.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
