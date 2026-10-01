import React, { useState } from 'react';
import { HiOutlineHeart } from 'react-icons/hi';

const DonationSection = () => {
  const [amount, setAmount] = useState('2500');
  const presetAmounts = ['500', '1000', '2500', '5000'];

  return (
    <section className="section bg-light" id="donate" style={{ backgroundColor: '#F8F9FA' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Make an Impact Today</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>Your contribution directly empowers underprivileged children with the resources they need to learn, grow, and succeed.</p>
        </div>

        <div style={{ 
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          padding: '3rem'
        }}>
          
          <div style={{ display: 'flex', borderBottom: '1px solid #eee', marginBottom: '2rem', margin: '-3rem -3rem 2rem -3rem', background: '#F8F9FA' }}>
            <div style={{ flex: 1, padding: '1.5rem', textAlign: 'center', color: '#888', fontWeight: 'bold' }}>
               MONTHLY 💧
            </div>
            <div style={{ flex: 1, padding: '1.5rem', textAlign: 'center', background: '#FBBF24', color: '#111', fontWeight: 'bold' }}>
               GIVE ONCE
            </div>
          </div>

          <h4 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#333' }}>CHOOSE/ENTER AN AMOUNT TO GIVE</h4>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
            {presetAmounts.slice(0, 3).map((amt) => (
              <button 
                key={amt}
                onClick={() => setAmount(amt)}
                style={{
                  padding: '1rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  background: amount === amt ? '#FBBF24' : '#EAEAEA',
                  color: amount === amt ? '#111' : '#666',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                ₹{amt} <span style={{ fontSize: '0.7rem', fontWeight: 'normal' }}>INR</span>
              </button>
            ))}
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', marginBottom: '15px' }}>
            <button 
              onClick={() => setAmount(presetAmounts[3])}
              style={{
                padding: '1rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                background: amount === presetAmounts[3] ? '#FBBF24' : '#EAEAEA',
                color: amount === presetAmounts[3] ? '#111' : '#666',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              ₹{presetAmounts[3]} <span style={{ fontSize: '0.7rem', fontWeight: 'normal' }}>INR</span>
            </button>
            <input 
              type="number" 
              placeholder="Other amount" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                padding: '1rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                background: '#EAEAEA',
                color: '#333',
                width: '100%',
                textAlign: 'center'
              }}
            />
          </div>

          <button style={{
            width: '100%',
            padding: '1rem',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            background: '#EAEAEA',
            color: '#666',
            cursor: 'pointer',
            marginBottom: '1.5rem',
            transition: 'all 0.2s'
          }}>
            Sponsor an entire education project
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
            <HiOutlineHeart style={{ color: '#FBBF24', fontSize: '1.5rem' }} />
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>
              Gives <strong style={{ color: '#111' }}>3 children</strong> access to learning materials.
            </p>
          </div>

          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-donation', { detail: { amount } }))}
            style={{
            width: '100%',
            padding: '1.2rem',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
            background: '#FBBF24',
            color: '#111',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(251, 191, 36, 0.4)',
            transition: 'all 0.2s'
          }}>
            DONATE NOW
          </button>

        </div>
      </div>
    </section>
  );
};

export default DonationSection;
