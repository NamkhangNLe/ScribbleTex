import React, { useState, useRef} from 'react';
import logo from './logo.svg';
import github from './github.png';
import CanvasDraw from 'react-canvas-draw';
import './App.css';
import Latex from 'react-latex';
import html2canvas from 'html2canvas';
import 'katex/dist/katex.min.css';
import axios from "axios";

function App() {


  // This is a React hook. It is a way to store state in a functional component.
  // State: set of data or properties that control output of component
  // Current state is drawingDataUrl, setDrawingDataUrl is a function that updates State, '' is initialized state
  const [drawingDataUrl, setDrawingDataUrl] = useState(''); // To update a state, you do setDrawingDataUrl(newState)

  // This assigns a reference to the canvas so we can access it later.
  // DOM = Document Object Module
  const saveableCanvas = useRef(); // saveableCanvas is a reference in the DOM

  // Need a string defined that will be updated in the future.
  // Current text is '' called text, setText will can set new text
  const [text, setText] = useState('');

  // This will be a combined set of latex script that can be saved!
  const [output, setOutput] = useState('');

  //This is a function to add newly translated text to the output string.
  const saveText = () => {
      output += text + '\n';
  }

  //These are functions to handle the mouse events
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseOut, setIsMouseOut] = useState(false);

  // This function clears the canvas.
  const handleClear = () => {
    saveableCanvas.current.clear();
  }

  // This function captures the canvas and converts it to a data URL. 
  const capture = () => {
    const canvas = saveableCanvas.current.canvasContainer.children[1];
    html2canvas(canvas).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpg'); //Converts to base64
      setDrawingDataUrl(imgData);
      
    });
  };

  //This downloads the image to the user's computer.
  //Probably a placeholder since it will be uploaded to the server.
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = drawingDataUrl;
    link.download = 'scribbletex.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClear();    
  }

  const sendToBackend = async () => {
    const formData = new FormData();
    formData.append("file", drawingDataUrl);

    console.log(formData);

    // try {
    //   const response = await axios.post("http://localhost:5000/upload", formData);
    //   console.log(response.data.message);
    //   alert("Image uploaded successfully");
    // } catch (error) {
    //   if (error.response) {
    //     console.error(error.response.data);
    //   } else if (error.request) {
    //     console.error("The request was made but no response was received");
    //   } else {
    //     console.error("An error occurred while sending the request", error.message);
    //   }
    // }


    try {
      var data = new FormData();
      var file = new Blob(["file contents"], {type: "text/plain"});
      data.append("file", file, "filename.txt");

      const response = await axios.post("http://localhost:5000/test", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        }
      });
      console.log(response.data.message);
    } catch {
      console.error("An error occurred while sending the request");
    }
  };


  // This function is called when the user releases the mouse button.
  const handleMouseUp = () => {
    //Note that this calls the capture function above.
    capture();
    downloadImage();
    // sendToBackend();
    // alert("Drawing finished!"); 
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


  // This function is called to download the txt output
  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([output], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "scribbletex.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }


  // This is the HTML that is rendered to the page.
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo */}


        <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
        <img src={logo} className="App-logo" alt="logo" style={{ width: '150px', marginTop: '-100px' }} />
          {/* This is the title of the page, and the logo*/}
          <p  className='title' style={{ marginRight: '50px', marginTop: '-85px' }}>
            ScribbleTex
          </p>
          
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
            <CanvasDraw ref={saveableCanvas} brushRadius={8} brushColor="black" lazyRadius="5" canvasWidth={500} canvasHeight={500} />
          </div>

          {/* Placeholder Text */}
          <div className="placeholder-text">
            <p>   </p>
          </div>
        </div>

        <div className='button-container'>
        <button onClick={saveText}>Save Text</button>
        </div>

        <div className='latex-container'>
          <Latex>{output}</Latex>
        </div>

        <div className="button-container">
        <button onClick={downloadText}>Download Text</button>
        </div>
        
        <div className='spacer' />


        {/* Buttons */}
        <div className="button-container">
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleUpload}>Upload</button>
        </div>

        {/* Image is drawn to screen, this is an example
        <img src={drawingDataUrl} alt="drawing" className='test-image'/>

        <div className='spacer' />

        <div className='spacer' /> */}

        {/* GitHub link */}
        <a
          className="App-link"
          href="https://github.com/namkhangnle/ScribbleTex"
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