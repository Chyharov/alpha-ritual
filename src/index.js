import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

const getRouterBasename = () => {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    if (/^\/alpha-ritual(?=\/|$)/i.test(pathname)) {
      return '/alpha-ritual';
    }
  }

  if (process.env.PUBLIC_URL && process.env.PUBLIC_URL !== '.') {
    return process.env.PUBLIC_URL;
  }

  return '/';
};

const routerBasename = getRouterBasename();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={routerBasename} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
