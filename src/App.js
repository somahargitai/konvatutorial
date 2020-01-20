import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kanvas from './Kanvas';
import ColorCubeItem from './ColorCubeItem';
import DragTextItem from './DragTextItem';

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
        <Kanvas>
          <ColorCubeItem />
          <DragTextItem />
        </Kanvas>
      </header>
    </div>
  );
}

export default App;
