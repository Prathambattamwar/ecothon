from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

# Load dataset and models
df = pd.read_csv('crop_data.csv')
model = joblib.load('model.pkl')
le = joblib.load('label_encoder.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        required = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
        
        if not all(k in data for k in required):
            return jsonify({'error': 'Missing fields'}), 400

        df = pd.DataFrame([data])
        df['nutrient_balance'] = (df['N'] + df['P']) / df['K']
        df['temp_humidity_index'] = (df['temperature'] * df['humidity']) / 100
        
        features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall',
                   'nutrient_balance', 'temp_humidity_index']
        
        prediction = model.predict(df[features])
        crop = le.inverse_transform(prediction)[0]
        
        return jsonify({'crop': crop, 'features': df[features].iloc[0].to_dict()})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/crops', methods=['GET'])
def get_crops():
    return jsonify({'crops': list(le.classes_)})

@app.route('/crop-conditions', methods=['POST'])
def get_conditions():
    try:
        crop = request.json.get('crop')
        crop_data = df[df['label'] == crop]
        
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
    app.run(host='0.0.0.0', port=5000)