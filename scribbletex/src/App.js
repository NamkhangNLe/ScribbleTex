import React, { useState, useRef} from 'react';
import logo from './logo.svg';
import github from './github.png';
import CanvasDraw from 'react-canvas-draw';
import './App.css';
import Latex from 'react-latex';
import html2canvas from 'html2canvas';
import 'katex/dist/katex.min.css';

function App() {


  // This is a React hook. It is a way to store state in a functional component.
  const [drawingDataUrl, setDrawingDataUrl] = useState('');

  // This assigns a reference to the canvas so we can access it later.
  const saveableCanvas = useRef();

  // Need a string defined that will be updated in the future.
  const [text, setText] = useState('');

  // This will be a combined set of latex script that can be saved!
  const [output, setOutput] = useState('');

  //This is a function to add newly translated text to the output string.
  const saveText = () => {
      output += text + '\n';
  }

  const translate_latex = (intputtext) => {
    const category_index = {
      "0": "0",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "=": "=",
      "(": "(",
      ")": ")",
      "forall": "\\forall",
      "int": "\\int",
      "log": "\\log",
      "X": "x",
      "y": "y",
      "z": "z",
      "+": "+",
      "-": "-",
      "pi": "\\pi"
    }

    return category_index[intputtext];
  }

  //These are functions to handle the mouse events
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseOut, setIsMouseOut] = useState(false);

  // This function clears the canvas.
  const handleClear = () => {
    setText('');
  }

  // This function captures the canvas and converts it to a data URL. 
  const capture = () => {
    // Get the second child of the 'canvasContainer' of 'saveableCanvas'
    const canvas = saveableCanvas.current.canvasContainer.children[1];

    // Use 'html2canvas' to take a screenshot of the canvas
    html2canvas(canvas).then((canvas) => {
      // Convert the screenshot to a base64-encoded JPG image
      const imgData = canvas.toDataURL('image/jpg');
      setDrawingDataUrl(imgData);

      downloadImage(imgData);
    });
  };

  //This downloads the image to the user's computer.a
  //Probably a placeholder since it will be uploaded to the server.
  const downloadImage = async (imgPath) => {

    const byteCharacters = atob(imgPath.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/jpeg' });

    const formData = new FormData();
    formData.append('image', blob);

    // Make an HTTP request to your backend here
    // You can use the fetch API or any HTTP library of your choice

    // For demonstration purposes, let's log the formData
    console.log(formData);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.result);
        const cur_latex = translate_latex(result.result);

        if (text === '') {
          setText("$" + cur_latex + "$");
        } else {
          setText(text.substring(0, text.length - 1) + cur_latex + "$");
        }
        
        setOutput(result.result);
        saveableCanvas.current.clear();
 
        // Handle the response from the server, e.g., display a success message
      } else {
        console.error('Failed to upload file:', response.status, response.statusText);
        // Handle errors, e.g., display an error message
        saveableCanvas.current.clear();
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle other errors, e.g., display an error message
      saveableCanvas.current.clear();
    }


    // const link = document.createElement('a');
    // link.href = imgPath;
    // link.download = 'scribbletex.jpg';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    // handleClear();    
  }


  // This function is called when the user releases the mouse button.
  const handleMouseUp = () => {
    //Note that this calls the capture function above.
    capture();
    // alert("Drawing finished!"); 
  };

  const predictModel = async () => {

    const formData = new FormData();
    formData.append('image', drawingDataUrl);

    // Make an HTTP request to your backend here
    // You can use the fetch API or any HTTP library of your choice

    // For demonstration purposes, let's log the formData
    console.log(formData);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // Handle the response from the server, e.g., display a success message
      } else {
        console.error('Failed to upload file:', response.status, response.statusText);
        // Handle errors, e.g., display an error message
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle other errors, e.g., display an error message
    }
  }

  // This function uploads the image to the server.
  // The server needs to be changed and tested.
  const handleUpload = async () => {
    // const response = await fetch('https://your-server.com/upload', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     image: drawingDataUrl,
    //   }),
    // });

    // if (response.ok) {
    //   alert('Image uploaded successfully!');
    // } else {
    //   alert('Failed to upload image.');
    // }

    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    // Make an HTTP request to your backend here
    // You can use the fetch API or any HTTP library of your choice

    // For demonstration purposes, let's log the formData
    console.log(formData);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // Handle the response from the server, e.g., display a success message
      } else {
        console.error('Failed to upload file:', response.status, response.statusText);
        // Handle errors, e.g., display an error message
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle other errors, e.g., display an error message
    }

  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  }


  // This function is called to download the txt output
  const downloadText = () => {
  const element = document.createElement("a");
  const file = new Blob([text.join('')], {type: 'text/plain'}); // Join 'text' into a single string
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
            <p>{"\\begin{document}"}</p>
            <p className='tab'>{"\\begin{aligned*}"}</p>
            <p className='double_tab'> {text} </p>
            <p className='tab'>{"\\begin{aligned*}"}</p>
            <p>{"\\end{document}"}</p>
          </div>
        </div>
        
        <div className='latex-container'>
            <Latex style="color: white">{text}</Latex>
        </div>

        <div className="button-container">
        <button onClick={downloadText}>Download Text</button>
        </div>
        
        <div className='spacer' />


        {/* Buttons */}
        <div className="button-container">
          <button onClick={handleClear}>Clear</button>
        </div>

        {/* Image is drawn to screen, this is an example
        <img src={drawingDataUrl} alt="drawing" className='test-image'/>

        <div className='spacer' />

        <div className='spacer' /> */}

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
