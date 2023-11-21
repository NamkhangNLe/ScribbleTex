import React from 'react';
import logo from './logo.svg';
import github from './github.png';
import CanvasDraw from 'react-canvas-draw';
import Latex from 'react-latex';

const HostUi = ({ saveableCanvas, setIsMouseOut, setIsMouseDown, handleMouseUp, handleClear, text}) => {
    // This is the HTML that is rendered to the page.
    return (
    <div className="App">
      <header className="App-header" style={{ alignItems: 'flex-start'}}>
        {/* Scribble Logo */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '10px',
          marginLeft: '10px'
        }}>
          <img src={logo} className="App-logo" alt="logo" />
          <p className='title'>ScribbleTex</p>
          {/* Spacer to push all subsequent items to the right */}
          <div style={{ marginLeft: 'auto' }}></div>
          {/* GitHub link */}
          <a
            className="App-link"
            href="https://github.com/josephmasson26/ScribbleTex"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: '50px', marginTop: '5px' }} // Adjusted style
          >
            <img src={github} alt="GitHub" style={{ width: '50px', height: '50px' }} />
          </a>
        </div>

        <div className='spacer' />

        <div className = 'hbox' style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* Canvas */}
          <div className="canvas-container"
            onMouseUp={() => {
              setIsMouseDown(false);
              handleMouseUp(); // Trigger download on mouse up
            }}
            onMouseLeave={() => setIsMouseOut(true)}
            onMouseEnter={() => setIsMouseDown(true)}
          >
            <CanvasDraw
            ref={saveableCanvas}
            brushRadius={8}
            brushColor="black"
            lazyRadius={5}
            canvasWidth={window.innerWidth}
            canvasHeight={window.innerHeight}
            />
          </div>
        </div>
        
        {/* DEPCRECATED AFTER MAKING SWITCH TO HOST/SERVER
        <div className="button-container">
            <button onClick={handleClear}>Clear</button>
          </div>
        
        } 
        <div className='latex-container'>
            <Latex style="color: white">{text}</Latex>
        </div>
        
        <div className="button-container">
        <button onClick={downloadText}>Download Text</button>
        </div> */}
        


        {/* Buttons */}

        {/* Image is drawn to screen, this is an example
        <img src={drawingDataUrl} alt="drawing" className='test-image'/>

        <div className='spacer' />

        <div className='spacer' /> */}

        
      </header>
    </div>
  );

}
export default HostUi;
