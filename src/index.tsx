import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/index.css';
import { AuthProvider } from './hooks/useAuth';
import { PopupProvider } from './hooks/usePopup';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PopupProvider>
          <App />
        </PopupProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
