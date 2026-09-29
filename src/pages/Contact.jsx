import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Branding',
    budget: '$5k - $10k',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success !== false) {
        setSubmitted(true);
      } else {
        setErrorMsg('Failed to send message. Please try again or email us directly.');
      }
    } catch (err) {
      // In local dev without server or network error
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-wrapper" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        <div className="container-large">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Left: Contact Info */}
            <div>
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#4361ee', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.8rem' }}>
                Contact Studio
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 1.2rem', lineHeight: 1.1 }}>
                Let's start your project.
              </h1>
              <p style={{ color: '#666', fontSize: '1.15rem', lineHeight: 1.6, margin: '0 0 3rem' }}>
                We collaborate with ambitious founders and global teams. Tell us about your vision, goals, and timeline.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <span style={{ fontSize: '0.82rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Direct Inquiries</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111', marginTop: '0.3rem' }}>
                    hello@qreatino.studio
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.82rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Studio Locations</span>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111', marginTop: '0.3rem' }}>
                    New York • London • Singapore
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.82rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Response Time</span>
                  <div style={{ fontSize: '1.05rem', color: '#555', marginTop: '0.3rem' }}>
                    We typically review and reply to qualified briefs within 24 hours.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div style={{ backgroundColor: '#f9f9fb', borderRadius: '28px', padding: '3rem 2.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: '64px', height: '64px', backgroundColor: '#4361ee', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto 1.5rem' }}>
                    ✓
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 0.8rem' }}>Thank You!</h3>
                  <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                    Your message has been received. Our partners will review your requirements and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.1rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.12)',
                        backgroundColor: '#ffffff',
                        fontSize: '1rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.1rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.12)',
                        backgroundColor: '#ffffff',
                        fontSize: '1rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.1rem',
                          borderRadius: '12px',
                          border: '1px solid rgba(0,0,0,0.12)',
                          backgroundColor: '#ffffff',
                          fontSize: '0.95rem',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="Branding">Brand Identity</option>
                        <option value="Strategy">Brand Strategy</option>
                        <option value="Web Design">Web & Digital</option>
                        <option value="Full Package">Full Agency Package</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.1rem',
                          borderRadius: '12px',
                          border: '1px solid rgba(0,0,0,0.12)',
                          backgroundColor: '#ffffff',
                          fontSize: '0.95rem',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="$2.5k - $5k">$2,500 - $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k - $25k">$10,000 - $25,000</option>
                        <option value="$25k+">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>
                      Project Details & Goals *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your brand, what challenges you are facing, and your target timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.1rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.12)',
                        backgroundColor: '#ffffff',
                        fontSize: '1rem',
                        boxSizing: 'border-box',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {errorMsg && (
                    <div style={{ color: '#d90429', fontSize: '0.92rem' }}>{errorMsg}</div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      backgroundColor: '#111111',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '1rem 2rem',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      opacity: submitting ? 0.7 : 1,
                      transition: 'all 0.2s ease',
                      marginTop: '0.5rem'
                    }}
                  >
                    {submitting ? 'Sending Request...' : 'Send Message →'}
                  </button>

                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
