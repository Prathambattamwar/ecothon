// components/WasteManagement/WasteDashboard.jsx
import React, { useState } from 'react';
import './WasteManagement.css';
import { useNavigate } from 'react-router-dom';

// Sub-components
const WasteTypeBadge = ({ type }) => (
  <span className={`waste-badge ${type}`}>
    {type.charAt(0).toUpperCase() + type.slice(1)}
  </span>
);


const RecyclingOptions = ({ wasteType }) => {
  const options = {
    organic: ['Composting', 'Biogas', 'Animal Feed'],
    'non-organic': ['Recycling Centers', 'Reuse Programs'],
    chemical: ['Hazardous Waste Disposal', 'Chemical Recycling']
  };

  return (
    <div className="recycling-options">
      {options[wasteType].map(option => (
        <button key={option} className="recycling-option">
          {option}
        </button>
      ))}
    </div>
  );
};

// Main Component
const WasteDashboard = () => {
  const navigate = useNavigate();

  const handleSchedulePickup = () => {
    navigate('/schedule-pickup');
  };
  const [wasteEntries, setWasteEntries] = useState([
    { id: 1, type: 'organic', quantity: '200 kg', location: 'Field A' },
    { id: 2, type: 'non-organic', quantity: '50 kg', location: 'Storage Unit' },
  ]);

  const [newEntry, setNewEntry] = useState({
    type: 'organic',
    quantity: '',
    location: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEntry.quantity || !newEntry.location) return;

    setWasteEntries([...wasteEntries, {
      ...newEntry,
      id: Date.now(),
      timestamp: new Date().toLocaleString()
    }]);

    setNewEntry({ type: 'organic', quantity: '', location: '' });
  };

  return (
    <div className="waste-management-dashboard">
      <h2>Agricultural Waste Management</h2>

      {/* Waste Entry Form */}
      <form onSubmit={handleSubmit} className="waste-entry-form">
        <div className="form-group">
          <label>Waste Type:</label>
          <select
            value={newEntry.type}
            onChange={(e) => setNewEntry({ ...newEntry, type: e.target.value })}
          >
            <option value="organic">Organic</option>
            <option value="non-organic">Non-Organic</option>
            <option value="chemical">Chemical</option>
          </select>
        </div>

        <div className="form-group">
          <label>Quantity (kg):</label>
          <input
            type="number"
            value={newEntry.quantity}
            onChange={(e) => setNewEntry({ ...newEntry, quantity: e.target.value })}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={newEntry.location}
            onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Waste Entry
        </button>
      </form>

      {/* Waste Inventory Table */}
      <div className="waste-entries-table">
        <h3>Current Waste Inventory</h3>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Disposal Options</th>
            </tr>
          </thead>
          <tbody>
            {wasteEntries.map(entry => (
              <tr key={entry.id}>
                <td><WasteTypeBadge type={entry.type} /></td>
                <td>{entry.quantity}</td>
                <td>{entry.location}</td>
                <td><RecyclingOptions wasteType={entry.type} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Redistribution Channels */}
      <div className="redistribution-options">
        <h3>Waste Redistribution Channels</h3>
        <div className="options-grid">
          <div className="option-card compost">
            <h4>Compost Conversion</h4>
            <p>Transform organic waste into nutrient-rich compost</p>
            <button className="action-btn" onClick={handleSchedulePickup}>Schedule Pickup</button>
          </div>

          <div className="option-card biogas">
            <h4>Biogas Production</h4>
            <p>Convert organic waste to renewable energy</p>
            <button className="action-btn">Request Collection</button>
          </div>

          <div className="option-card recycling">
            <h4>Material Recycling</h4>
            <p>Recycle non-organic materials</p>
            <button className="action-btn">Find Centers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteDashboard;