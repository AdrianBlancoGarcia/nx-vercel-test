import React from 'react';
import ReactDOM from 'react-dom';

import * as Sentry from "@sentry/react";

import { BrowserTracing } from "@sentry/tracing";

import App from './App';

import './index.css';

Sentry.init({
  dsn: "https://2990a5cb084440a0836dbe2da3c21a22@o1267595.ingest.sentry.io/6454133",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
