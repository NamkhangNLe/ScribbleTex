# ScribbleTex

ScribbleTex is a web application that leverages machine learning to convert handwritten text to LaTeX code. This application utilizes a React frontend with a Flask backend, integrating a machine learning model hosted on Google Cloud for handwriting recognition.

## Features

- **Handwriting to LaTeX Conversion:** Convert handwritten text into LaTeX code.
- **User-Friendly Interface:** Simple and intuitive interface for smooth user experience.
- **React Frontend:** Interactive frontend built using React for dynamic user interactions.
- **Flask Backend:** Robust backend using Flask for handling requests and interfacing with the ML model.
- **Google Cloud Hosted ML Model:** Utilizes a machine learning model hosted on Google Cloud for accurate text recognition.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NamkhangNLe/ScribbleTex.git
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Frontend (React)
   cd ScribbleTex/scribbleTex
   npm install
   
   # Backend (Flask)
   cd ../backend
   pip install flask
   pip install flask_cors
   pip install pillow
   ```

## Usage

1. Start the backend server:
   ```bash
   # From the 'backend' directory
   python server.py
   ```

2. Launch the frontend:
   ```bash
   # From the 'ScribbleTex/scribbleTex' directory
   npm start
   ```

3. Access the application via the provided URL (typically: http://localhost:3000) in your web browser.

## Configuration

To configure the application to use your own Google Cloud-hosted ML model:
1. Replace the existing model with your own trained model.
2. Update the necessary credentials and endpoints in the backend Flask application.

## Contributing

Contributions are welcome! If you'd like to contribute to ScribbleTex, please follow these steps:
1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.
