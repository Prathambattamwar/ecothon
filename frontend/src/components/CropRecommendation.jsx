import React, { useState, useEffect } from 'react';
import './CropRecommendation.css';
const API_URL = "https://your-backend-service.onrender.com";


const CropRecommendation = () => {
    const [inputs, setInputs] = useState({
        N: '', P: '', K: '', temperature: '', humidity: '', ph: '', rainfall: ''
    });
    const [crops, setCrops] = useState([]);
    const [selectedCrop, setSelectedCrop] = useState('');
    const [cropConditions, setCropConditions] = useState(null);
    const [recommendation, setRecommendation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('${API_URL}/crops')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch crops');
                return res.json();
            })
            .then(data => setCrops(data.crops))
            .catch(err => setError(err.message));
    }, []);

    useEffect(() => {
        if (selectedCrop) {
            fetch('${API_URL}/crop-conditions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ crop: selectedCrop })
            })
                .then(res => {
                    if (!res.ok) throw new Error('Failed to load conditions');
                    return res.json();
                })
                .then(data => setCropConditions(data.conditions))
                .catch(err => setError(err.message));
        }
    }, [selectedCrop]);

    const validateNumber = (value) => /^-?\d*\.?\d*$/.test(value);

    const handleInputChange = (e) => {
        if (!validateNumber(e.target.value)) return;
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setRecommendation(null);

        try {
            const response = await fetch('${API_URL}/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Prediction failed');

            setRecommendation(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="crop-container">
            <h1>Crop Recommendation AI</h1>

            <div className="main-grid">
                <div className="input-section">
                    <h2>Input Parameters</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-grid">
                            {['N', 'P', 'K'].map((param) => (
                                <div className="input-group" key={param}>
                                    <label>{param} (ppm)</label>
                                    <input
                                        type="text"
                                        name={param}
                                        value={inputs[param]}
                                        onChange={handleInputChange}
                                        pattern="^-?\d*\.?\d*$"
                                        required
                                    />
                                </div>
                            ))}
                            {['temperature', 'humidity', 'ph', 'rainfall'].map((param) => (
                                <div className="input-group" key={param}>
                                    <label>
                                        {param.charAt(0).toUpperCase() + param.slice(1)}
                                        {param === 'temperature' && ' (°C)'}
                                        {param === 'humidity' && ' (%)'}
                                        {param === 'ph' && ' Level'}
                                        {param === 'rainfall' && ' (mm)'}
                                    </label>
                                    <input
                                        type="text"
                                        name={param}
                                        value={inputs[param]}
                                        onChange={handleInputChange}
                                        pattern="^-?\d*\.?\d*$"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Analyzing...' : 'Get Recommendation'}
                        </button>
                    </form>
                    {error && <div className="error-message">{error}</div>}
                </div>

                <div className="crop-info">
                    <h2>Crop Requirements</h2>
                    <select
                        value={selectedCrop}
                        onChange={(e) => setSelectedCrop(e.target.value)}
                    >
                        <option value="">Select a crop</option>
                        {crops.map(crop => (
                            <option key={crop} value={crop}>{crop}</option>
                        ))}
                    </select>

                    {cropConditions && (
                        <div className="conditions-grid">
                            {Object.entries(cropConditions).map(([key, value]) => (
                                <div key={key} className="condition-card">
                                    <div className="condition-header">{key}</div>
                                    <div className="condition-value">
                                        {typeof value === 'number' ? value.toFixed(2) : value}
                                    </div>
                                    {inputs[key] && (
                                        <div className="condition-diff">
                                            {Math.abs(value - parseFloat(inputs[key])).toFixed(2)}
                                            {value > parseFloat(inputs[key]) ? ' ↓' : ' ↑'}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {recommendation && (
                <div className="result-section">
                    <h2>Recommended Crop: {recommendation.crop}</h2>
                    <div className="parameter-grid">
                        {Object.entries(recommendation.features).map(([key, value]) => (
                            <div key={key} className="parameter-card">
                                <span className="param-name">{key}</span>
                                <span className="param-value">
                                    {typeof value === 'number' ? value.toFixed(2) : value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CropRecommendation;
