import React from 'react';
import ReactDOM from 'react-dom';

import * as Sentry from "@sentry/react";

import { BrowserTracing } from "@sentry/tracing";

import App from './App';

import './index.css';

const RELEASE = process.env.npm_package_version

Sentry.init({
  dsn: "https://2990a5cb084440a0836dbe2da3c21a22@o1267595.ingest.sentry.io/6454133",
  integrations: [new BrowserTracing()],
  debug: true,
  release: "nx-vercel-test@1.0.0",
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
