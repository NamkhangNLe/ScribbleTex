import React, { useState, useRef} from 'react';
import logo from './logo.svg';
import github from '/Users/Explo1t/Documents/ScribbleTex/scribbletex/src/github.png';
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

  //Function called when mouse is released
  const handleMouseUp = () => {
    const drawing = saveableCanvas.current.getSaveData("png");
    setDrawingDataUrl(drawing);
    alert("Drawing finished!"); 
  }



  return (
    <div className="App">
      <header className="App-header">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginRight: '50px', marginTop: '-100px' }}>
                        ScribbleTex
                      </p>
                      <img src={logo} className="App-logo" alt="logo" style={{ width: '150px', marginTop: '-100px' }} />
                    </div>

                    <div className='spacer' />

                    {/* Canvas */}
                    <div className="canvas-container" style={{ marginTop: '-50px' }}>
                      <CanvasDraw ref={saveableCanvas} brushRadius={1} brushColor="rgba(155,12,60,0.3)" lazyRadius="5" canvasWidth={500} canvasHeight={500} />
                    </div>
                      
                    {/* Buttons */}
                    <div className="button-container">
                      <button onClick={handleClear}>Clear</button>
                      <button onClick={handleUpload}>Upload</button>
                    </div>

                    <div className='spacer' />

                    {/* GitHub link */}
                    <a
                      className="App-link"
                      href="https://github.com/josephmasson26/ScribbleTex"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <img src={github} alt="GitHub" style={{ width: '50px', height: '50px', marginTop: '5px' }} />
                    </a>
                    </header>
                    </div>
              );
            }

            export default App;
