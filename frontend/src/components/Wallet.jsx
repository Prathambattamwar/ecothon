import React, { useState, useEffect } from 'react';

import Banner from './Banner';

const Wallet = () => {
  const [balance, setBalance] = useState('0.00');
  const [transactions, setTransactions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  // Mock authentication (replace with actual OTP verification in real app)
  const handleLogin = () => {
    // In real implementation, verify phone number with OTP
    setIsLoggedIn(true);
    setBalance('15000.00'); // Mock balance
  };

  // Mock transactions related to farming activities
  const mockTransactions = [
    { id: 1, type: 'received', amount: '5000.00', description: 'Crop Sale - Wheat', date: '2024-03-15' },
    { id: 2, type: 'sent', amount: '1200.00', description: 'Fertilizer Purchase', date: '2024-03-14' },
    { id: 3, type: 'received', amount: '3000.00', description: 'Government Subsidy', date: '2024-03-12' },
  ];

  useEffect(() => {
    setTransactions(mockTransactions);
  }, [mockTransactions]);

  return (
    <>
      <Banner/>
      <div className="wallet-container">
        <div className="wallet-header">
          <h1>Kisan Digital Purse</h1>
          {isLoggedIn ? (
            <div className="wallet-info">
              <span className="phone-number">{phoneNumber || 'Indian farmer'}</span>
            </div>
          ) : (
            <div className="login-section">
              <input
                type="tel"
                placeholder="Please enter the Mobile-Number"
                className="phone-input"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button className="connect-btn" onClick={handleLogin}>
              log in
              </button>
            </div>
          )}
        </div>

        {isLoggedIn && (
          <>
            <div className="balance-card">
              <h2>
              total balance</h2>
              <div className="balance-amount">
                <div className="balance-grid">
                  <span className="balance-value">₹{balance}</span>
                </div>
              </div>
              <div className="action-buttons">
                <button className="action-btn send">Send</button>
                <button className="action-btn receive">Receive</button>
                <button className="action-btn schemes">Schemes</button>
              </div>
            </div>

            <div className="transaction-history">
              <h3>
              recent transactions</h3>
              <div className="transaction-list">
                {transactions.map((tx) => (
                  <div key={tx.id} className="transaction-item">
                    <div className="tx-icon">{tx.type === 'sent' ? '⬆️' : '⬇️'}</div>
                    <div className="tx-details">
                      <span className="tx-description">{tx.description}</span>
                      <span className="tx-date">{tx.date}</span>
                    </div>
                    <div className={`tx-amount ${tx.type}`}>
                      {tx.type === 'sent' ? '-' : '+'}₹{tx.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="farming-features">
              <button className="feature-btn">buy seeds</button>
              <button className="feature-btn">Equipment Rental</button>
              <button className="feature-btn">weather update</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Wallet;