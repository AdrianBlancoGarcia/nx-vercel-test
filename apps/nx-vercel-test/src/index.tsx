import React from 'react';
import ReactDOM from 'react-dom';

import * as Sentry from "@sentry/react";

import { BrowserTracing } from "@sentry/tracing";

import App from './App';

import './index.css';

const RELEASE = process.env.npm_package_version

Sentry.init({
  dsn: "http://6e7c680d648941ac9df6d6e7e92e6dc9@2ac4-139-47-24-207.ngrok.io",
  integrations: [new BrowserTracing()],
  debug: true,
  release: "nx-vercel-test@1.1.2",
  tracesSampleRate: 0.5,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
