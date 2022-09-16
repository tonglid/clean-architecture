import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './ui/styles/index.css';
import { Provider } from 'react-redux';
import store, {history} from './application/store';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
