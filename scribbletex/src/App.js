// Import necessary dependencies
import React, { useState, useRef} from 'react';
import logo from './logo.svg';
import CanvasDraw from 'react-canvas-draw';
import './App.css';

// Define the main App component
function App() {

  // State to store the data URL of the drawing
  const [drawingDataUrl, setDrawingDataUrl] = useState('');

  // Reference to the CanvasDraw component
  const saveableCanvas = useRef();

  // Function to handle the clear button click event
  const handleClear = () => {
    saveableCanvas.current.clear();
  }

  // Function to handle the upload button click event
  const handleUpload = async () => {
    // Get the drawing data as a PNG image
    const drawing = saveableCanvas.current.getSaveData("png");
    // Set the drawing data URL to the state
    setDrawingDataUrl(drawing);
    // Show an alert to indicate that the image has been uploaded
    alert("Image Uploaded!");
    // Convert the drawing data to a string (not sure why this is done)
    String (drawing);
  }

  // Function called when mouse is released
  const handleMouseUp = () => {
    // Get the drawing data as a PNG image
    const drawing = saveableCanvas.current.getSaveData("png");
    // Set the drawing data URL to the state
    setDrawingDataUrl(drawing);
    // Show an alert to indicate that the drawing is finished
    alert("Drawing finished!"); 
  }

  // Render the App component
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '50px' }}>
            ScribbleTex
          </p>
          <img src={logo} className="App-logo" alt="logo" style={{ width: '150px' }} />
        </div>

        <div className='spacer' />

        {/* Canvas */}
        <div className="canvas-container" style={{ marginTop: '0px' }}>
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
