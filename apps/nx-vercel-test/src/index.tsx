import React from 'react';
import ReactDOM from 'react-dom';

import * as Sentry from "@sentry/react";

import { BrowserTracing } from "@sentry/tracing";

import App from './App';

import './index.css';

const RELEASE = process.env.npm_package_version

Sentry.init({
  dsn: "http://b65310dd0ebd49afaa65bccd0a9ef4ba@@2ac4-139-47-24-207.ngrok.io",
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
