import React from 'react';
import logo from './logo.svg';
import './App.css';
import KonvaComponentHooked from './ColorCube';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/konvajs/react-konva"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Konva
        </a>
        <KonvaComponentHooked />
      </header>
    </div>
  );
}

export default App;
