import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-component" style={{ backgroundColor: '#090a0f', color: '#ffffff', padding: '5rem 0 3rem' }}>
      <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        <div className="container-large">
          
          {/* Top Footer Banner */}
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3.5rem', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem' }}>
              <div>
                <span style={{ fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '0.8rem' }}>
                  Have an ambitious project?
                </span>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0 }}>
                  Let's make something <br />
                  <span style={{ color: '#4361ee' }}>extraordinary together.</span>
                </h2>
              </div>
              <div>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    backgroundColor: '#ffffff',
                    color: '#090a0f',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    padding: '0.95rem 2rem',
                    borderRadius: '9999px',
                    boxShadow: '0 8px 24px rgba(255,255,255,0.12)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Start a Project <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
            
            {/* Column 1: Brand */}
            <div>
              <Link to="/" style={{ textDecoration: 'none', color: '#ffffff', display: 'inline-block', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.025em' }}>Qreatino</span>
              </Link>
              <p style={{ color: '#888', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '280px' }}>
                A modern creative branding studio crafting digital experiences, visual identities, and standout growth.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Navigation
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link to="/" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Home</Link>
                <Link to="/about" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Studio</Link>
                <Link to="/projects" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Selected Projects</Link>
                <Link to="/services" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Services</Link>
                <Link to="/blog" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Insights & Blog</Link>
              </div>
            </div>

            {/* Column 3: Work */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Featured Work
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link to="/project/elevate" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Elevate (2024)</Link>
                <Link to="/project/origin" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Origin (2023)</Link>
                <Link to="/project/beyond" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Beyond (2025)</Link>
                <Link to="/project/horizon" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Horizon (2026)</Link>
              </div>
            </div>

            {/* Column 4: Connect */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Connect
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>X (Twitter)</a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Instagram</a>
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Dribbble</a>
                <a href="https://behance.net/" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.94rem' }}>Behance</a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', color: '#666', fontSize: '0.85rem' }}>
            <div>
              © {new Date().getFullYear()} Qreatino™ Studio. All rights reserved. Built with React & Vite.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Settings</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
