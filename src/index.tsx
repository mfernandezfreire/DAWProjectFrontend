import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { AppRouter } from './router/Approuter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
