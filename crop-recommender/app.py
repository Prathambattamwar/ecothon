from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)

# Load model artifacts
model = joblib.load('model.pkl')
le = joblib.load('label_encoder.pkl')

def validate_input(data):
    """Validate and normalize input parameters"""
    required = {
        'N': (0, 150),
        'P': (0, 150),
        'K': (1, 250),  # Minimum 1 to prevent division by zero
        'temperature': (0, 50),
        'humidity': (10, 100),
        'ph': (3, 9),
        'rainfall': (0, 500)
    }
    
    errors = []
    normalized = {}
    
    for field, (min_val, max_val) in required.items():
        value = data.get(field)
        if value is None:
            errors.append(f"Missing field: {field}")
            continue
            
        try:
            num = float(value)
            if not (min_val <= num <= max_val):
                errors.append(f"{field} must be between {min_val}-{max_val}")
            normalized[field] = num
        except ValueError:
            errors.append(f"Invalid value for {field}: {value}")
    
    return normalized, errors

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
        # Validate input
        params, errors = validate_input(data)
        if errors:
            return jsonify({"errors": errors}), 400
        
        # Calculate engineered features
        nutrient_balance = (params['N'] + params['P']) / params['K']
        temp_humidity_index = (params['temperature'] * params['humidity']) / 100
        
        # Create feature DataFrame with correct column order
        features = pd.DataFrame([{
            'N': params['N'],
            'P': params['P'],
            'K': params['K'],
            'temperature': params['temperature'],
            'humidity': params['humidity'],
            'ph': params['ph'],
            'rainfall': params['rainfall'],
            'nutrient_balance': nutrient_balance,
            'temp_humidity_index': temp_humidity_index
        }])
        
        # Get predictions
        probabilities = model.predict_proba(features)[0]
        crop_probs = sorted(zip(le.classes_, probabilities), 
                          key=lambda x: x[1], reverse=True)
        
        # Format output
        recommendations = []
        for crop, prob in crop_probs:
            if prob > 0.01:  # Only show crops with >1% probability
                recommendations.append({
                    "crop": crop,
                    "probability": round(float(prob), 4),
                    "confidence": "High" if prob > 0.7 else 
                                 "Medium" if prob > 0.3 else "Low"
                })
        
        return jsonify({
            "recommendations": recommendations[:5],  # Top 5 crops
            "input_parameters": params,
            "engineered_features": {
                "nutrient_balance": round(nutrient_balance, 2),
                "temp_humidity_index": round(temp_humidity_index, 2)
            },
            "available_crops": list(le.classes_)
        })
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/crops', methods=['GET'])
def list_crops():
    """Get list of all supported crops"""
    return jsonify({"crops": list(le.classes_)})

@app.route('/')
def home():
    return """
    <h1>Crop Recommendation API</h1>
    <p>Endpoints:</p>
    <ul>
        <li>POST /predict - Get crop recommendations</li>
        <li>GET /crops - List supported crops</li>
    </ul>
    """

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)