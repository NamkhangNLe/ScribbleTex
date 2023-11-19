from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from google.cloud import aiplatform
from vertexai import preview

import base64
from google.cloud import aiplatform
from google.cloud.aiplatform.gapic.schema import predict

from openCVMain import main_function

# Importing deps for image prediction
# from tensorflow.keras.preprocessing import image
from PIL import Image
import numpy as np
# from tensorflow.keras.models import load_model

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

credential_path = "/Users/maxko/.config/gcloud/application_default_credentials.json"
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path

def predict_image_classification_sample(
    project: str,
    endpoint_id: str,
    filename: str,
    location: str = "us-central1",
    api_endpoint: str = "us-central1-aiplatform.googleapis.com",
):
    # The AI Platform services require regional API endpoints.
    client_options = {"api_endpoint": api_endpoint}
    # Initialize client that will be used to create and send requests.
    # This client only needs to be created once, and can be reused for multiple requests.
    client = aiplatform.gapic.PredictionServiceClient(client_options=client_options)
    with open(filename, "rb") as f:
        file_content = f.read()

    # The format of each instance should conform to the deployed model's prediction input schema.
    encoded_content = base64.b64encode(file_content).decode("utf-8")
    instance = predict.instance.ImageClassificationPredictionInstance(
        content=encoded_content,
    ).to_value()
    instances = [instance]
    # See gs://google-cloud-aiplatform/schema/predict/params/image_classification_1.0.0.yaml for the format of the parameters.
    parameters = predict.params.ImageClassificationPredictionParams(
        confidence_threshold=0.5,
        max_predictions=5,
    ).to_value()
    endpoint = client.endpoint_path(
        project=project, location=location, endpoint=endpoint_id
    )
    response = client.predict(
        endpoint=endpoint, instances=instances, parameters=parameters
    )
    # print("response")
    # print(" deployed_model_id:", response.deployed_model_id)
    # See gs://google-cloud-aiplatform/schema/predict/prediction/image_classification_1.0.0.yaml for the format of the predictions.
    predictions = response.predictions
    for prediction in predictions:
        print(" prediction:", dict(prediction))

    return dict(prediction)['displayNames']


@app.route("/")
def home():
    return {"message": "Hello from backend"}

TEMP_FOLDER = 'temp'
app.config['TEMP_FOLDER'] = TEMP_FOLDER


@app.route('/api/upload', methods=['POST'])
def upload_image():

    if 'image' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['image']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    print("trying to see file")
    print(file)

    # Save the file to a temporary folder within the codebase
    temp_filepath = os.path.join(app.config['TEMP_FOLDER'], file.filename)

    file.save(temp_filepath)

    output = main_function(temp_filepath)

    print(output)

    prediction = predict_image_classification_sample(
        project="979947117365",
        endpoint_id="8843506162620956672",
        location="us-central1",
        filename=temp_filepath
    )

    # Process the image data as needed
    # For example, you can use the Pillow library to open and manipulate the image
    # image = Image.open(io.BytesIO(image_data))
    # result = predict_image_classification_sample(...)

    

    # Return a response indicating success
    return jsonify({'message': 'File processed successfully', 'result': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)