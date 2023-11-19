from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Importing deps for image prediction
from tensorflow.keras.preprocessing import image
from PIL import Image
import numpy as np
from tensorflow.keras.models import load_model

app = Flask(__name__) #Creates the web application in Flask, __name__ can be swapped for the name of the script or python main
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) #Allows flask to talk with frontend

@app.route("/") #tells Flask what to do/run if someone visits page where url looks like youtube.com/     
def home(): #Functionality one (just calls the home function)
    return {"message": "Hello from backend"}

@app.route("/upload", methods=['POST']) #Methods gives a POST request which gives out data
def upload(): #Called function if the /upload is done
    file = request.files['file']
    file.save('uploads/' + file.filename)

    # Load the image to predict
    img_path = f"./uploads/{file.filename}"
    img = image.load_img(img_path, target_size=(150, 150))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x /= 255

    loaded_model = load_model('./model/dogs_cat_model.h5')

    # Make the prediction
    prediction = loaded_model.predict(x)
    if os.path.exists(f"./uploads/{file.filename}"):
        os.remove(f"uploads/{file.filename}")
        
    if prediction < 0.5:
        return jsonify({"message": "Cat"})
    else:
        return jsonify({"message": "Dog"})


if __name__ == '__main__':
    app.run(debug=True)