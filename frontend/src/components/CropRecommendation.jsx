import React, { useState, useEffect } from 'react';
import './CropRecommendation.css';

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
        fetch('http://localhost:5000/crops')
            .then(res => res.json())
            .then(data => setCrops(data.crops))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (selectedCrop) {
            fetch('http://localhost:5000/crop-conditions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ crop: selectedCrop })
            })
                .then(res => res.json())
                .then(data => setCropConditions(data.conditions))
                .catch(err => setError('Failed to load conditions'));
        }
    }, [selectedCrop]);

    const handleInputChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            });

            if (!response.ok) throw new Error('Prediction failed');
            const data = await response.json();
            setRecommendation(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="crop-recommendation-container">
            <h1>Crop Recommendation System</h1>

            <div className="main-grid">
                {/* Input Form */}
                <div className="input-section">
                    <h2>Enter Parameters</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-grid">
                            {['N', 'P', 'K'].map((param) => (
                                <div className="input-group" key={param}>
                                    <label>{param} (ppm)</label>
                                    <input type="number" name={param} value={inputs[param]}
                                        onChange={handleInputChange} required min="0" />
                                </div>
                            ))}
                            {['temperature', 'humidity', 'ph', 'rainfall'].map((param) => (
                                <div className="input-group" key={param}>
                                    <label>
                                        {param.charAt(0).toUpperCase() + param.slice(1)}
                                        {param === 'temperature' ? ' (°C)' :
                                            param === 'humidity' ? ' (%)' :
                                                param === 'ph' ? ' Level' : ' (mm)'}
                                    </label>
                                    <input type="number" step={param === 'ph' ? '0.1' : '1'}
                                        name={param} value={inputs[param]}
                                        onChange={handleInputChange} required
                                        min={param === 'ph' ? '0' : '0'}
                                        max={param === 'humidity' ? '100' : undefined} />
                                </div>
                            ))}
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Analyzing...' : 'Get Recommendation'}
                        </button>
                    </form>
                    {error && <div className="error">{error}</div>}
                </div>

                {/* Crop Selection */}
                <div className="crop-selection">
                    <h2>View Crop Requirements</h2>
                    <select value={selectedCrop} onChange={(e) => setSelectedCrop(e.target.value)}>
                        <option value="">Select a crop</option>
                        {crops.map(crop => <option key={crop} value={crop}>{crop}</option>)}
                    </select>

                    {cropConditions && (
                        <div className="conditions">
                            <h3>{selectedCrop} Requirements</h3>
                            <div className="conditions-grid">
                                {Object.entries(cropConditions).map(([key, value]) => (
                                    <div key={key} className="condition">
                                        <div className="condition-label">{key}</div>
                                        <div className="condition-value">
                                            {typeof value === 'number' ? value.toFixed(2) : value}
                                        </div>
                                        {inputs[key] && (
                                            <div className="condition-diff">
                                                {Math.abs(value - inputs[key]).toFixed(2)}
                                                {value > inputs[key] ? ' higher needed' : ' lower needed'}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Recommendation Result */}
            {recommendation && (
                <div className="result">
                    <h2>Recommended Crop: {recommendation.crop}</h2>
                    <div className="parameters">
                        {Object.entries(recommendation.features).map(([key, value]) => (
                            <div key={key} className="param">
                                <span>{key}:</span>
                                <span>{typeof value === 'number' ? value.toFixed(2) : value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CropRecommendation;