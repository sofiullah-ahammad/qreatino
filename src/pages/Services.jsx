import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const serviceList = [
    {
      title: 'Brand Strategy & Positioning',
      subtitle: 'The Strategic Anchor',
      desc: 'We define the core purpose, market positioning, target audience personas, and competitive differentiation that establish an unshakeable foundation for growth.',
      deliverables: ['Audience Persona Modeling', 'Competitive Brand Audits', 'Value Proposition & Vision', 'Brand Voice & Messaging Framework', 'Naming & Narrative Strategy'],
      icon: '🎯'
    },
    {
      title: 'Visual Identity & Design Systems',
      subtitle: 'The Aesthetic Identity',
      desc: 'We author comprehensive visual identity systems that translate strategic intent into evocative, memorable graphic languages across all media.',
      deliverables: ['Logo & Symbolic Mark Suite', 'Custom Typography & Color Systems', 'Iconography & Graphic Patterns', 'Brand Guidelines & Design Tokens', 'Stationery & Collateral Design'],
      icon: '✦'
    },
    {
      title: 'Digital Experience & Web Design',
      subtitle: 'The Interactive Touchpoint',
      desc: 'We engineer high-performance web applications and digital interfaces that harmonize artistic craft with conversion-driven usability.',
      deliverables: ['UI/UX Interaction Architecture', 'High-Fidelity Wireframes & Prototypes', 'Modern React Web Development', 'Micro-Animations & Smooth Motion', 'Cross-Device Responsiveness'],
      icon: '⚡'
    },
    {
      title: 'Campaigns & Creative Direction',
      subtitle: 'The Market Expansion',
      desc: 'We orchestrate multi-channel brand campaigns and digital launch assets that captivate audiences and accelerate market adoption.',
      deliverables: ['Product Launch Strategy', 'Social Media Asset Kits', 'Motion Design & Video Direction', 'Content Art Direction', 'Ongoing Brand Guardianship'],
      icon: '🚀'
    }
  ];

  return (
    <main className="main-wrapper" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        <div className="container-large">
          
          {/* Header */}
          <div style={{ marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#4361ee', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.8rem' }}>
              Capabilities
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 1.2rem', lineHeight: 1.1 }}>
              Brand Services
            </h1>
            <p style={{ color: '#666', fontSize: '1.15rem', maxWidth: '640px', lineHeight: 1.6, margin: 0 }}>
              End-to-end creative and digital solutions designed to elevate visionary companies from initial strategy to global presence.
            </p>
          </div>

          {/* Services Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {serviceList.map((srv, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#f9f9fb',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '28px',
                  padding: '3rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '3rem',
                  alignItems: 'flex-start'
                }}
              >
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{srv.icon}</div>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#4361ee', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{srv.subtitle}</span>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.025em', margin: '0.6rem 0 1.2rem' }}>{srv.title}</h2>
                  <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>{srv.desc}</p>
                </div>

                <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '2.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 1.5rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#111' }}>
                    What We Deliver
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {srv.deliverables.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#444', fontSize: '0.98rem' }}>
                        <span style={{ color: '#4361ee', fontWeight: 700 }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ marginTop: '5rem', backgroundColor: '#090a0f', color: '#ffffff', borderRadius: '28px', padding: '4rem 3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, margin: '0 0 1rem' }}>
              Need a bespoke package?
            </h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
              We tailor our services to align with your exact project milestones, stage of growth, and timeline requirements.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                backgroundColor: '#ffffff',
                color: '#090a0f',
                padding: '0.95rem 2.2rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.05rem'
              }}
            >
              Consult With Our Team →
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
