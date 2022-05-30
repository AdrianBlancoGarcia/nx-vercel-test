import { useEffect } from 'react';

import * as Sentry from "@sentry/react";

import logo from './logo.svg';

import './App.css';

function App() {
  useEffect(() => {
    console.log({ ENV: process.env });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{process.env.NX_TITLE}</h1>

        <p>{process.env.NX_DESCRIPTION}</p>

        <button
          style={{backgroundColor: 'red', color: 'white'}}
          onClick={() => {
            throw Error('ERROR CONTROLADO - DEBUG');
          }}
        >
          Generar alerta Sentry
        </button>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Sentry.withProfiler(App);
