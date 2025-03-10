from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load data and models
try:
    df = pd.read_csv('crop_data.csv')
    model = joblib.load('model.pkl')
    le = joblib.load('label_encoder.pkl')
except Exception as e:
    print(f"Error loading resources: {str(e)}")
    exit(1)

def safe_convert(value, default=0.0):
    try:
        return float(value)
    except (TypeError, ValueError):
        return default

def calculate_features(data):
    try:
        data['N'] = data['N'].apply(safe_convert)
        data['P'] = data['P'].apply(safe_convert)
        data['K'] = data['K'].apply(safe_convert)
        data['temperature'] = data['temperature'].apply(safe_convert)
        data['humidity'] = data['humidity'].apply(safe_convert)
        
        data['nutrient_balance'] = (data['N'] + data['P']) / data['K'].replace(0, 1e-6)
        data['temp_humidity_index'] = (data['temperature'] * data['humidity']) / 100
        return data
    except Exception as e:
        raise ValueError(f"Feature calculation error: {str(e)}")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.json
        required_fields = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
        
        # Validate and convert inputs
        converted = {field: safe_convert(input_data.get(field, 0)) for field in required_fields}
        
        data = pd.DataFrame([converted])
        data = calculate_features(data)
        
        features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall',
                   'nutrient_balance', 'temp_humidity_index']
        X = data[features]

        prediction = model.predict(X)
        return jsonify({
            'crop': le.inverse_transform(prediction)[0],
            'features': X.iloc[0].to_dict()
        })
    except Exception as e:
        app.logger.error(f"Prediction error: {str(e)}")
        return jsonify({'error': 'Prediction failed. Check input values.'}), 500

@app.route('/crops', methods=['GET'])
def get_crops():
    return jsonify({'crops': list(le.classes_)})

@app.route('/crop-conditions', methods=['POST'])
def get_crop_conditions():
    try:
        crop_name = request.json.get('crop')
        crop_data = df[df['label'] == crop_name]
        
        if crop_data.empty:
            return jsonify({'error': 'Crop not found'}), 404
            
        conditions = {
            'N': crop_data['N'].mean(),
            'P': crop_data['P'].mean(),
            'K': crop_data['K'].mean(),
            'temperature': crop_data['temperature'].mean(),
            'humidity': crop_data['humidity'].mean(),
            'ph': crop_data['ph'].mean(),
            'rainfall': crop_data['rainfall'].mean()
        }
        
        return jsonify({'conditions': conditions})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)