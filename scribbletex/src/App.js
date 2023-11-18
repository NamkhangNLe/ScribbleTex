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

  //Function called when mouse is released
  const handleMouseUp = () => {
    const drawing = saveableCanvas.current.getSaveData("png");
    setDrawingDataUrl(drawing);
    alert("Drawing finished!"); 
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ScribbleTex
        </p>

        <div className='spacer' />

        <div className="hbox">
          <div onMouseUp={handleMouseUp} >
          <CanvasDraw ref = {saveableCanvas} brushRadius={1} brushColor="rgba(155,12,60,0.3)" lazyRadius="5" canvasWidth={600} canvasHeight={500}/>
          </div>
          <div className="placeholder"> Placeholder Output</div>
        </div>

        
      
        <button onClick = {handleClear}>Clear</button>
        <button onClick = {handleUpload}>Upload</button>

        <div className='spacer' />

        <img src = {drawingDataUrl} alt = "drawing" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//hbox for canvas and output
//github repo and credits at bottom



