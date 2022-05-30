import { useEffect } from 'react';

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

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
