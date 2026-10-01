import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/favicon.jpg" alt="EnVision Logo" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%' }} />
        <div className="nav-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', color: '#031533', margin: 0, fontWeight: '800' }}>
            En<span style={{ color: '#DE9E36' }}>V</span>ision Foundation
          </h1>
          <p style={{ fontSize: '0.65rem', color: '#8892A0', letterSpacing: '3px', margin: 0, textTransform: 'uppercase' }}>Learning Beyond Books</p>
        </div>
      </Link>
      
      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ display: 'none', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', marginLeft: 'auto', marginRight: '1rem' }}
      >
        ☰
      </button>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link active" style={{ color: '#DE9E36', fontWeight: '600', position: 'relative' }}>
          Home
          <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px', backgroundColor: '#DE9E36' }}></span>
        </Link>
        <Link to="/about" className="nav-link" style={{ color: '#5A6A80', fontWeight: '500' }}>About</Link>
        <Link to="/impact" className="nav-link" style={{ color: '#5A6A80', fontWeight: '500' }}>Our Work</Link>
        <Link to="/apply" className="nav-link" style={{ color: '#5A6A80', fontWeight: '500' }}>Get Involved</Link>
        <Link to="/gallery" className="nav-link" style={{ color: '#5A6A80', fontWeight: '500' }}>Gallery</Link>
        <Link to="/contact" className="nav-link" style={{ color: '#5A6A80', fontWeight: '500' }}>Contact</Link>
        <button 
          onClick={() => { window.dispatchEvent(new CustomEvent('open-donation', { detail: { amount: 1000 } })); setIsMenuOpen(false); }} 
          className="btn-gold mobile-donate-btn" 
          style={{ display: 'none', padding: '0.8rem 1.8rem', fontSize: '1rem', borderRadius: '50px', border: 'none', cursor: 'pointer', marginTop: '1rem', width: '100%', justifyContent: 'center' }}
        >
          <span style={{ marginRight: '8px' }}>♡</span> Donate Now
        </button>
      </div>

      <div className="nav-donate-btn">
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('open-donation', { detail: { amount: 1000 } }))} 
          className="btn-gold" 
          style={{ padding: '0.8rem 1.8rem', fontSize: '1rem', borderRadius: '50px', border: 'none', cursor: 'pointer' }}
        >
          <span style={{ marginRight: '8px' }}>♡</span> Donate Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
