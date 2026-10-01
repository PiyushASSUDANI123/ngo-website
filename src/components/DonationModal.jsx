import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const API = import.meta.env.VITE_API_URL || 'https://envision.piyushassudani.in/api';

const DonationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [intentId, setIntentId] = useState(null);
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    phone: '',
    amount: '1000',
    address: '',
    city: '',
    state: ''
  });

  useEffect(() => {
    const handleOpen = (e) => {
      if (e.detail && e.detail.amount) {
        setFormData(prev => ({ ...prev, amount: e.detail.amount }));
      }
      setIsOpen(true);
      setStep(1);
    };
    window.addEventListener('open-donation', handleOpen);
    return () => window.removeEventListener('open-donation', handleOpen);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = async () => {
    try {
      if (step === 1) {
        // Progressive save
        if (!intentId) {
          const res = await axios.post(`${API}/donations/intent`, { ...formData, status: 'initiated' });
          setIntentId(res.data.donation._id);
        } else {
          await axios.put(`${API}/donations/intent/${intentId}`, { ...formData, status: 'partial' });
        }
      }
      setStep(step + 1);
    } catch (err) {
      console.error(err);
      setStep(step + 1); // proceed anyway for UX
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (intentId) {
        await axios.put(`${API}/donations/intent/${intentId}`, { ...formData, status: 'completed' });
      } else {
        await axios.post(`${API}/donations/intent`, { ...formData, status: 'completed' });
      }
      setStep(3); // success screen
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setIntentId(null);
      setFormData({
        donorName: '', email: '', phone: '', amount: '1000', address: '', city: '', state: ''
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
        }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{
              background: 'white', borderRadius: '20px', width: '90%', maxWidth: '500px',
              padding: '2.5rem', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            <button onClick={close} style={{
              position: 'absolute', top: '15px', right: '20px', background: 'transparent',
              border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#666'
            }}>×</button>

            {step === 1 && (
              <div>
                <h3 style={{ fontSize: '1.8rem', color: '#031533', marginBottom: '1.5rem', fontFamily: 'Playfair Display, serif' }}>
                  Make a <span style={{ color: '#DE9E36' }}>Donation</span>
                </h3>
                <p style={{ color: '#5A6A80', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  Please provide your basic details. We save this securely to contact you if needed.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="text" name="donorName" placeholder="Full Name" value={formData.donorName} onChange={handleChange} className="form-control" required />
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="form-control" required />
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="form-control" required />
                  <input type="number" name="amount" placeholder="Amount (INR)" value={formData.amount} onChange={handleChange} className="form-control" required />
                  <button onClick={handleNext} className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    Next step →
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 style={{ fontSize: '1.8rem', color: '#031533', marginBottom: '1.5rem', fontFamily: 'Playfair Display, serif' }}>
                  Billing <span style={{ color: '#DE9E36' }}>Details</span>
                </h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="form-control" required />
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="form-control" required style={{ flex: 1 }} />
                    <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="form-control" required style={{ flex: 1 }} />
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button type="button" onClick={() => setStep(1)} className="btn-outline-dark" style={{ flex: 1, padding: '0.8rem' }}>Back</button>
                    <button type="submit" className="btn-gold" style={{ flex: 2, justifyContent: 'center', padding: '0.8rem' }}>Complete Donation</button>
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '4rem', color: '#10B981', marginBottom: '1rem' }}>♥</div>
                <h3 style={{ fontSize: '1.8rem', color: '#031533', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>Thank You!</h3>
                <p style={{ color: '#5A6A80', marginBottom: '2rem' }}>Your generosity helps us bring brighter tomorrows to children in need.</p>
                <button onClick={close} className="btn-outline-dark">Close</button>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DonationModal;
