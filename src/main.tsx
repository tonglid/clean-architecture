import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store, { history } from './application/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
