import React, { useState, useRef} from 'react';
import logo from './logo.svg';
import github from './github.png';
import CanvasDraw from 'react-canvas-draw';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  //I need to add comments to this file. Above every line or function, lets make
  //sure we have a comment explaining what it does. This will help us understand.

  // This is a React hook. It is a way to store state in a functional component.
  const [drawingDataUrl, setDrawingDataUrl] = useState('');

  // This assigns a reference to the canvas so we can access it later.
  const saveableCanvas = useRef();

  // This function clears the canvas.
  const handleClear = () => {
    saveableCanvas.current.clear();
  }

  // This function captures the canvas and converts it to a data URL. 
  const capture = () => {
    const canvas = saveableCanvas.current.canvasContainer.children[1];
    html2canvas(canvas).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      setDrawingDataUrl(imgData);
    });
  };

  // This function is called when the user releases the mouse button.
  const handleMouseUp = () => {
    //Note that this calls the capture function above.
    capture();
    alert("Drawing finished!"); 
  };

  // This function uploads the image to the server.
  // The server needs to be changed and tested.
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

  // This is the HTML that is rendered to the page.
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>

          {/* This is the title of the page, and the logo*/}
          <p  className='title' style={{ marginRight: '50px', marginTop: '-85px' }}>
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

        {/* Image is drawn to screen, this is an example */}
        <img src={drawingDataUrl} alt="drawing" className='test-image'/>

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
