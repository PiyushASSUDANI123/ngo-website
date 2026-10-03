import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import SEO from '../components/SEO';

const API = import.meta.env.VITE_API_URL || 'https://envision.piyushassudani.in/api';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });
  
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await axios.get(`${API}/website/volunteer-config`);
        setConfig(res.data);
        
        // Initialize form data
        if (res.data.formFields) {
          const initialData = {};
          res.data.formFields.forEach(f => { initialData[f.name] = ''; });
          setFormData(initialData);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchConfig();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });
    try {
      await axios.post(`${API}/website/applications`, formData);
      setStatus({ loading: false, message: 'Application submitted successfully! We will contact you soon.', type: 'success' });
      
      // Reset form data
      const resetData = {};
      Object.keys(formData).forEach(k => resetData[k] = '');
      setFormData(resetData);
    } catch (error) {
      setStatus({ loading: false, message: 'Failed to submit. Please try again later.', type: 'error' });
    }
  };

  if (loading) {
    return <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>;
  }

  if (!config) {
    return <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Form unavailable</div>;
  }

  return (
    <div style={{ background: 'var(--bg-light)', minHeight: '100vh', padding: '120px 5% 60px' }}>
      <SEO title="Apply for Volunteer" description="Join EnVision Foundation and empower underprivileged children." url="/apply" />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '3rem', background: 'white', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)' }}>
        
        {/* Left Side: Recruitment Poster */}
        <div style={{ flex: '1 1 450px', background: 'linear-gradient(135deg, #FEF9F0 0%, #FDF3DF 100%)', padding: '4rem 3rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '10px', background: '#DE9E36' }}></div>
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontSize: '2rem', color: '#031533', marginBottom: '1rem', fontFamily: 'Playfair Display, serif', lineHeight: '1.3' }}>
              {config.title}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#5A6A80', marginBottom: '1.5rem' }} dangerouslySetInnerHTML={{ __html: config.subtitle?.replace(/\n/g, '<br/>') }}></p>

            <h3 style={{ fontSize: '1.3rem', color: '#DE9E36', marginBottom: '0.8rem', fontFamily: 'Playfair Display, serif' }}>
              {config.visionTitle}
            </h3>
            <p style={{ color: '#5A6A80', marginBottom: '1rem' }}>
              {config.visionText}
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, color: '#333', marginBottom: '2rem' }}>
              {config.visionPoints && config.visionPoints.map((point, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>{point}</li>
              ))}
            </ul>

            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#031533', marginBottom: '1rem' }}>💼 We’re looking for passionate volunteers in:</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {config.formFields?.find(f => f.name === 'department')?.options?.map((role, idx) => (
                  <span key={idx} style={{ background: '#F8FAFC', padding: '5px 12px', borderRadius: '20px', fontSize: '0.9rem', color: '#5A6A80', border: '1px solid #E2E8F0' }}>
                    {role}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#5A6A80' }}>✨ And many more!</p>
            </div>

            <p style={{ color: '#5A6A80', fontSize: '0.95rem', marginBottom: '1rem' }} dangerouslySetInnerHTML={{ __html: config.footerText?.replace(/\n/g, '<br/>') }}></p>

          </motion.div>
        </div>

        {/* Right Side: Form */}
        <div style={{ flex: '1 1 450px', padding: '4rem 3rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ color: '#DE9E36', fontWeight: 'bold', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Apply Now</span>
              <h2 style={{ fontSize: '2.5rem', color: '#031533', fontFamily: 'Playfair Display, serif' }}>Join the Team</h2>
            </div>

            {status.message && (
              <div style={{ 
                padding: '1rem', marginBottom: '1.5rem', borderRadius: '10px', 
                background: status.type === 'success' ? '#D1FAE5' : '#FEE2E2',
                color: status.type === 'success' ? '#065F46' : '#991B1B'
              }}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {config.formFields && config.formFields.map((field, index) => (
                <div key={index}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#5A6A80', fontWeight: '500' }}>
                    {field.label} {field.required && '*'}
                  </label>
                  
                  {field.type === 'textarea' ? (
                    <textarea 
                      name={field.name} required={field.required} 
                      className="form-control" style={{ background: '#F8FAFC', minHeight: '100px' }} 
                      value={formData[field.name] || ''} onChange={handleChange} 
                      placeholder={field.placeholder}
                    />
                  ) : field.type === 'radio' ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                      {field.options && field.options.map(opt => (
                        <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: '#333' }}>
                          <input 
                            type="radio" name={field.name} value={opt} 
                            checked={formData[field.name] === opt} onChange={handleChange} required={field.required} 
                            style={{ accentColor: '#DE9E36', width: '16px', height: '16px' }} 
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  ) : (
                    <input 
                      type={field.type || 'text'} name={field.name} required={field.required} 
                      className="form-control" style={{ background: '#F8FAFC' }} 
                      value={formData[field.name] || ''} onChange={handleChange} 
                      placeholder={field.placeholder} 
                    />
                  )}
                </div>
              ))}

              <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '1.2rem', fontSize: '1.1rem' }} disabled={status.loading}>
                {status.loading ? 'Submitting...' : 'Apply Now 🚀'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;
