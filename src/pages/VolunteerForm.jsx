import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import SEO from '../components/SEO';

const API = import.meta.env.VITE_API_URL || 'https://envision.piyushassudani.in/api';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '', className: '', school: '', location: '', department: '', reason: '', contact: '', experience: '', reference: ''
  });
  
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const res = await axios.get(`${API}/fields`);
        setDepartments(res.data.map(field => field.name));
      } catch (err) {
        setDepartments(['Social Media', 'Writing', 'HR', 'Event Planning', 'Finance and marketing', 'Outreach']); // Fallback
      }
    };
    fetchFields();
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
      setFormData({
        name: '', className: '', school: '', location: '', department: '',
        reason: '', contact: '', experience: '', reference: ''
      });
    } catch (error) {
      setStatus({ loading: false, message: 'Failed to submit. Please try again later.', type: 'error' });
    }
  };

  return (
    <div style={{ background: 'var(--bg-light)', minHeight: '100vh', padding: '120px 5% 60px' }}>
      <SEO title="Apply for Volunteer" description="Join EnVision Foundation and empower underprivileged children." url="/apply" />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '3rem', background: 'white', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)' }}>
        
        {/* Left Side: Recruitment Poster */}
        <div style={{ flex: '1 1 450px', background: 'linear-gradient(135deg, #FEF9F0 0%, #FDF3DF 100%)', padding: '4rem 3rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '10px', background: '#DE9E36' }}></div>
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontSize: '2rem', color: '#031533', marginBottom: '1rem', fontFamily: 'Playfair Display, serif', lineHeight: '1.3' }}>
              🚨✨ WE’RE RECRUITING VOLUNTEERS! ✨🚨
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#5A6A80', marginBottom: '1.5rem' }}>
              Hey everyone! 💌🌷<br/>
              Want to be a part of something meaningful and create a real impact? 💫
            </p>

            <h3 style={{ fontSize: '1.3rem', color: '#DE9E36', marginBottom: '0.8rem', fontFamily: 'Playfair Display, serif' }}>
              🌸 EnVision Foundation 🌸
            </h3>
            <p style={{ color: '#5A6A80', marginBottom: '1rem' }}>
              is a youth-led initiative working towards empowering underprivileged children through:
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, color: '#333', marginBottom: '2rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>📚 Equal access to education & opportunities</li>
              <li style={{ marginBottom: '0.5rem' }}>🎨 Platforms to express creativity & imagination</li>
              <li style={{ marginBottom: '0.5rem' }}>🤝 Mentoring, guidance & support</li>
            </ul>

            <h3 style={{ fontSize: '1.2rem', color: '#031533', marginBottom: '0.5rem' }}>🌍 Our Vision:</h3>
            <p style={{ color: '#5A6A80', fontStyle: 'italic', marginBottom: '2rem', paddingLeft: '1rem', borderLeft: '3px solid #DE9E36' }}>
              A world where every child has the support, voice, opportunities, and freedom to reach their full potential. 💗✨
            </p>

            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#031533', marginBottom: '1rem' }}>💼 We’re looking for passionate volunteers in:</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['📱 Social Media', '✍🏻 Writing', '💰 Finance', '🎉 Event Planning', '🤝 HR', '📢 Marketing'].map(role => (
                  <span key={role} style={{ background: '#F8FAFC', padding: '5px 12px', borderRadius: '20px', fontSize: '0.9rem', color: '#5A6A80', border: '1px solid #E2E8F0' }}>
                    {role}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#5A6A80' }}>✨ And many more!</p>
            </div>

            <p style={{ color: '#031533', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              📍 We’re especially looking for ACTIVE NCR TEAM MEMBERS! 🚨
            </p>

            <p style={{ color: '#5A6A80', fontSize: '0.95rem', marginBottom: '1rem' }}>
              Whether you have ideas, skills, creativity, energy, or simply the willingness to make a difference — there’s a place for you here! 🫶🏻🌸
            </p>

            <p style={{ color: '#5A6A80', fontSize: '0.95rem', marginBottom: '2rem' }}>
              🌷 Don’t just scroll past — step forward, join us, and be a part of the change! 💫<br/>
              <strong>Your time. Your skills. Your impact. ❤️</strong>
            </p>

            <div style={{ textAlign: 'center', color: '#DE9E36', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>
              🌸 EnVision Foundation — Empower. Educate. Envision. 🌸
            </div>
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
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#5A6A80', fontWeight: '500' }}>Name *</label>
                  <input type="text" name="name" required className="form-control" style={{ background: '#F8FAFC' }} value={formData.name} onChange={handleChange} placeholder="Your full name" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#5A6A80', fontWeight: '500' }}>Contact *</label>
                  <input type="tel" name="contact" required className="form-control" style={{ background: '#F8FAFC' }} value={formData.contact} onChange={handleChange} placeholder="Phone number" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#5A6A80', fontWeight: '500' }}>Class/Year *</label>
                  <input type="text" name="className" required className="form-control" style={{ background: '#F8FAFC' }} value={formData.className} onChange={handleChange} placeholder="e.g. B.Tech 1st Year" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#5A6A80', fontWeight: '500' }}>Institution *</label>
                  <input type="text" name="school" required className="form-control" style={{ background: '#F8FAFC' }} value={formData.school} onChange={handleChange} placeholder="School/College Name" />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#5A6A80', fontWeight: '500' }}>Location (City, State) *</label>
                <input type="text" name="location" required className="form-control" style={{ background: '#F8FAFC' }} value={formData.location} onChange={handleChange} placeholder="Where are you from?" />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.9rem', color: '#5A6A80', fontWeight: '500' }}>Preferred Department *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {departments.map(dept => (
                    <label key={dept} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: '#333' }}>
                      <input 
                        type="radio" name="department" value={dept} 
                        checked={formData.department === dept} onChange={handleChange} required 
                        style={{ accentColor: '#DE9E36', width: '16px', height: '16px' }} 
                      />
                      {dept}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#5A6A80', fontWeight: '500' }}>Why do you want to join EnVision? *</label>
                <textarea name="reason" required className="form-control" style={{ background: '#F8FAFC', minHeight: '100px' }} value={formData.reason} onChange={handleChange} placeholder="Tell us your motivation..."></textarea>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#5A6A80', fontWeight: '500' }}>Past Experience / Resume Link</label>
                <input type="url" name="experience" className="form-control" style={{ background: '#F8FAFC' }} value={formData.experience} onChange={handleChange} placeholder="Link to Drive/LinkedIn/Portfolio" />
              </div>

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
