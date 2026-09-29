import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Dark hero pages: Home and About and Project detail have dark hero backgrounds at top
  const isDarkTop = ['/', '/about', '/contact', '/project/elevate', '/project/origin', '/project/beyond', '/project/horizon'].includes(location.pathname);

  return (
    <>
      <div 
        className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}
        data-theme-top={isDarkTop ? 'dark' : 'light'}
        role="banner"
      >
        <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <div className="container-large" style={{ width: '100%' }}>
            <div className="nav-content-wrapper" style={{ position: 'relative' }}>
              
              <div 
                className="w-layout-grid nav-component-grid" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {/* Brand Logo Text */}
                <Link to="/" className="brand-link">
                  <div className="logo-wrap">
                    <span className="brand-name-text">Qreatino</span>
                  </div>
                </Link>

                {/* Desktop Left Nav Menu */}
                <div className="left-nav-menu">
                  <div className="nav-link-overflow">
                    <Link to="/" className="nav-link">
                      <div className="nav-link-block">
                        <span className="nav-text">Home</span>
                      </div>
                    </Link>
                  </div>
                  <div className="nav-link-overflow">
                    <Link to="/about" className="nav-link">
                      <div className="nav-link-block">
                        <span className="nav-text">Studio</span>
                      </div>
                    </Link>
                  </div>
                  <div className="nav-link-overflow">
                    <Link to="/projects" className="nav-link">
                      <div className="nav-link-block">
                        <span className="nav-text">Projects</span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Desktop Right Nav Menu */}
                <div className="right-nav-menu">
                  <div className="nav-link-overflow">
                    <Link to="/services" className="nav-link">
                      <div className="nav-link-block">
                        <span className="nav-text">Services</span>
                      </div>
                    </Link>
                  </div>
                  <div className="nav-link-overflow">
                    <Link to="/blog" className="nav-link">
                      <div className="nav-link-block">
                        <span className="nav-text">Blog</span>
                      </div>
                    </Link>
                  </div>
                  <div className="nav-link-overflow">
                    <Link to="/contact" className="nav-link">
                      <div className="nav-link-block">
                        <span className="nav-text">Start a Project →</span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Mobile Menu Hamburger Button */}
                <button
                  className="menu-button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle navigation menu"
                  style={{
                    background: isScrolled ? 'rgba(0,0,0,0.06)' : (isDarkTop ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.06)'),
                    border: 'none',
                    borderRadius: '12px',
                    width: '42px',
                    height: '42px',
                    display: 'none',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <span style={{
                    display: 'block',
                    width: '20px',
                    height: '2px',
                    backgroundColor: isScrolled ? '#111' : (isDarkTop ? '#fff' : '#111'),
                    transition: 'all 0.2s ease',
                    transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                  }} />
                  <span style={{
                    display: 'block',
                    width: '20px',
                    height: '2px',
                    backgroundColor: isScrolled ? '#111' : (isDarkTop ? '#fff' : '#111'),
                    transition: 'all 0.2s ease',
                    opacity: mobileMenuOpen ? 0 : 1
                  }} />
                  <span style={{
                    display: 'block',
                    width: '20px',
                    height: '2px',
                    backgroundColor: isScrolled ? '#111' : (isDarkTop ? '#fff' : '#111'),
                    transition: 'all 0.2s ease',
                    transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                  }} />
                </button>

              </div>

              {/* Glassy Background Container */}
              <div 
                className="nav-background" 
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1
                }}
              />

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Studio</Link>
          <Link to="/projects" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link to="/services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/blog" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link 
            to="/contact" 
            className="mobile-nav-link" 
            onClick={() => setMobileMenuOpen(false)}
            style={{
              backgroundColor: '#111',
              color: '#fff',
              borderRadius: '9999px',
              padding: '0.65rem 1.2rem',
              textAlign: 'center',
              marginTop: '0.5rem'
            }}
          >
            Start a Project →
          </Link>
        </div>
      )}
    </>
  );
}
