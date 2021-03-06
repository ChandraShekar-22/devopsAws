import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from 'app';
import reportWebVitals from './reportWebVitals';
import { configureAppStore } from 'store/root-state';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

const store = configureAppStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
