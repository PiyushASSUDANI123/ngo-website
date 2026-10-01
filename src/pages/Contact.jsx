import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const Contact = () => {
  return (
    <div style={{ paddingTop: '100px', background: '#FAFCFF', minHeight: '100vh' }}>
      <SEO title="Contact Us" description="Get in touch with EnVision Foundation. We'd love to hear from you!" url="/contact" />

      <section className="section" style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-header center">GET IN TOUCH</div>
          <h1 className="section-heading center">We'd Love to <span className="gold-text">Hear From You</span></h1>
          <p className="about-desc" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '700px' }}>
            Have a question, want to volunteer, or looking to partner with us? Reach out and we'll get back to you soon.
          </p>
        </div>

        <div className="about-grid" style={{ gap: '3rem' }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Contact <span className="gold-text">Information</span></h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div className="floating-card-icon" style={{ width: '55px', height: '55px' }}>
                  <HiOutlineMail style={{ fontSize: '1.5rem' }} />
                </div>
                <div>
                  <h4 style={{ color: '#031533', marginBottom: '0.3rem' }}>Email Us</h4>
                  <p style={{ color: '#5A6A80' }}>envisionfoundation@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div className="floating-card-icon" style={{ width: '55px', height: '55px' }}>
                  <HiOutlinePhone style={{ fontSize: '1.5rem' }} />
                </div>
                <div>
                  <h4 style={{ color: '#031533', marginBottom: '0.3rem' }}>Call Us</h4>
                  <p style={{ color: '#5A6A80' }}>+91 9413879444</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div className="floating-card-icon" style={{ width: '55px', height: '55px' }}>
                  <HiOutlineLocationMarker style={{ fontSize: '1.5rem' }} />
                </div>
                <div>
                  <h4 style={{ color: '#031533', marginBottom: '0.3rem' }}>Location</h4>
                  <p style={{ color: '#5A6A80' }}>New Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            }}
          >
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', color: '#031533', marginBottom: '2rem' }}>Send us a Message</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#031533', fontSize: '0.95rem' }}>Your Name</label>
                <input
                  type="text"
                  required
                  style={{ width: '100%', padding: '1rem 1.2rem', borderRadius: '10px', border: '1px solid #E2E8F0', fontFamily: 'Inter, sans-serif', fontSize: '1rem', transition: 'border-color 0.2s' }}
                  onFocus={(e) => e.target.style.borderColor = '#DE9E36'}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#031533', fontSize: '0.95rem' }}>Your Email</label>
                <input
                  type="email"
                  required
                  style={{ width: '100%', padding: '1rem 1.2rem', borderRadius: '10px', border: '1px solid #E2E8F0', fontFamily: 'Inter, sans-serif', fontSize: '1rem', transition: 'border-color 0.2s' }}
                  onFocus={(e) => e.target.style.borderColor = '#DE9E36'}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                />
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#031533', fontSize: '0.95rem' }}>Message</label>
                <textarea
                  rows="5"
                  required
                  style={{ width: '100%', padding: '1rem 1.2rem', borderRadius: '10px', border: '1px solid #E2E8F0', fontFamily: 'Inter, sans-serif', fontSize: '1rem', resize: 'vertical', transition: 'border-color 0.2s' }}
                  onFocus={(e) => e.target.style.borderColor = '#DE9E36'}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                ></textarea>
              </div>
              <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '1.1rem', borderRadius: '10px', fontSize: '1.1rem' }}>
                Send Message &rarr;
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
