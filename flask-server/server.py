from flask import Flask, request, jsonify
import base64
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename


# Importing deps for image prediction
#from tensorflow.keras.preprocessing import image
from PIL import Image
import numpy as np
#from tensorflow.keras.models import load_model

app = Flask(__name__) #Creates the web application in Flask, __name__ can be swapped for the name of the script or python main
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) #Allows flask to talk with frontend
FOLDER = 'scribbletex/src/temp' #This is the folder where png screenshots go

@app.route("/") #tells Flask what to do/run if someone visits page where url looks like youtube.com/     
def home(): #Functionality one (just calls the home function)
    return {"message": "Hello from backend"}

@app.route("/upload", methods=['POST']) #Methods gives a POST request which gives out data
def upload(): #Called function if the /upload is done

    # Clear the images folder
    for filename in os.listdir(FOLDER):
        file_path = os.path.join(FOLDER, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
        except Exception as e:
            return jsonify({'message': f'Failed to delete {filename}. Reason: {e}'}), 500
        
    imageData = request.json['image'] #imageData in base64 format (it's a Json file)
    imageData = base64.b64decode(imageData.split(",")[1]) #The .split gets the important part, then decodes into binary deta
    path = os.path.join(os.path.join(FOLDER, secure_filename("canvas.png"))) #create the new path
    with open(path, 'wb') as f: #open the folder and write to it
        f.write(imageData)
    
    return jsonify({'message': 'Image saved successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)

