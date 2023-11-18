import React, { useState, useRef} from 'react';
import logo from './logo.svg';
import CanvasDraw from 'react-canvas-draw';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  
  const [drawingDataUrl, setDrawingDataUrl] = useState('');

  const saveableCanvas = useRef();

  const handleClear = () => {
    saveableCanvas.current.clear();
  }

  

  

  const capture = () => {
    const canvas = saveableCanvas.current.canvasContainer.children[1];
    html2canvas(canvas).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      setDrawingDataUrl(imgData);
    });
  };

  const handleMouseUp = () => {
    capture();
    alert("Drawing finished!"); 
  };

  const handleUpload = async () => {
    const response = await fetch('https://your-server.com/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: drawingDataUrl,
      }),
    });

    if (response.ok) {
      alert('Image uploaded successfully!');
    } else {
      alert('Failed to upload image.');
    }
  };


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
                    <div className="canvas-container" style={{ marginTop: '-50px' }} onMouseUp={handleMouseUp}>
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
                      GitHub
                    </a>
                  </header>
                </div>
              );
            }

            export default App;
