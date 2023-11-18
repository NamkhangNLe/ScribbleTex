import React, { useState, useRef} from 'react';
import logo from './logo.svg';
import CanvasDraw from 'react-canvas-draw';
import './App.css';

function App() {

  const [drawingDataUrl, setDrawingDataUrl] = useState('');

  const saveableCanvas = useRef();

  const handleClear = () => {
    saveableCanvas.current.clear();
  }

  const handleUpload = async () => {
    const drawing = saveableCanvas.current.getSaveData("png");
    setDrawingDataUrl(drawing);
    alert("Image Uploaded!");
    String (drawing);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ position: 'absolute', top: '0', right: '0', width: '200px' }} />
        <p style={{ position: 'absolute', top: '0', left: '100' }}>
          ScribbleTex
        </p>

        <div className='spacer' />

        <div className="canvas-container" style={{ marginTop: '200px' }}>
          <CanvasDraw ref={saveableCanvas} brushRadius={1} brushColor="rgba(155,12,60,0.3)" lazyRadius="5" canvasWidth={500} canvasHeight={500} />
        </div>
          
        <div className="button-container">
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleUpload}>Upload</button>
        </div>

        <div className='spacer' />

        <img src={drawingDataUrl} alt="drawing" />

        <a
          className="App-link"
          href="https://github.com/josephmasson26/ScribbleTex"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
