import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

const NewsletterSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#111827', color: 'white' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '3.5rem', color: '#FBBF24' }}>
            <HiOutlineMail />
          </div>
        </div>
        
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Add Impact To Your Inbox</h2>
        <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginBottom: '2.5rem' }}>Get our emails to stay in the know about our latest projects and impact.</p>
        
        <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#cbd5e1' }}>FIRST NAME</label>
            <input type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #374151', borderRadius: '8px', background: '#1f2937', color: 'white' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#cbd5e1' }}>LAST NAME</label>
            <input type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #374151', borderRadius: '8px', background: '#1f2937', color: 'white' }} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#cbd5e1' }}>EMAIL ADDRESS *</label>
            <input type="email" required style={{ width: '100%', padding: '1rem', border: '1px solid #374151', borderRadius: '8px', background: '#1f2937', color: 'white' }} />
          </div>
        </form>

        <button style={{
          width: '100%',
          padding: '1.2rem',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          background: '#4F46E5',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.2s',
          marginTop: '1rem'
        }}>
          SUBSCRIBE TO UPDATES
        </button>

      </div>
    </section>
  );
};

export default NewsletterSection;
