import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const awards = [
    { title: 'Awwwards Site of the Day', project: 'Horizon (2026)', desc: 'Recognized for cutting-edge website design & motion craft.' },
    { title: 'Behance Featured', project: 'Beyond (2025)', desc: 'Selected for exemplary creative branding and visual identity.' },
    { title: 'CSS Design Awards - Best UI', project: 'Origin (2023)', desc: 'Honored for interactive digital experience & interface fidelity.' },
    { title: 'The Webby Awards Honoree', project: 'Elevate (2024)', desc: 'Distinguished in the Websites & Mobile Sites category.' }
  ];

  const team = [
    { name: 'Marcus Vance', role: 'Founder & Design Director', img: '/assets/69b5ee65f9de268996a86b91_member-04.jpg' },
    { name: 'Elena Rostova', role: 'Head of Brand Strategy', img: '/assets/69b4812ce9c877f4fa2de8a1_client-01.jpg' },
    { name: 'Liam Chen', role: 'Creative Technologist', img: '/assets/69b4812ce9c877f4fa2de89b_client-03.jpg' }
  ];

  return (
    <main className="main-wrapper">
      
      {/* ABOUT HERO */}
      <header className="section-about-header" style={{ backgroundColor: '#090a0f', color: '#ffffff', padding: '9rem 0 6rem' }}>
        <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <div className="container-large">
            <span style={{ fontSize: '0.9rem', color: '#4361ee', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
              We Are...
            </span>
            <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5.2rem)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.05, maxWidth: '900px', margin: '0 0 2rem' }}>
              Qreatino™ Studio
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#aaa', maxWidth: '640px', lineHeight: 1.6, margin: '0 0 3rem' }}>
              Designing brands that inspire trust, command attention, and drive long-term business growth.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '320px' }}>
                <img src="/assets/699dc746c86abe87c96d7391_image-04.webp" alt="Studio work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '320px' }}>
                <img src="/assets/699dc746d9f4df504dba9d99_image-14.webp" alt="Studio work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '320px' }}>
                <img src="/assets/699dc7469eea4d936dedee0a_image-06.webp" alt="Studio work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* PHILOSOPHY SECTION */}
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
        <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <div className="container-large">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Our Philosophy</span>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: '0.8rem 0 1.5rem', lineHeight: 1.15 }}>
                  Crafting distinctive brands that stand apart in noisy markets.
                </h2>
                <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  We believe great design isn't just about surface aesthetics—it is a strategic business instrument. Every line, color, type choice, and motion curve we author serves a deliberate purpose: to position your company at the pinnacle of its sector.
                </p>
                <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  From global enterprises to visionary startups, we engineer brand identities and digital experiences that captivate audiences and establish enduring authority.
                </p>
              </div>

              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 48px rgba(0,0,0,0.08)' }}>
                <img src="/assets/699dc746210764b6fc133cfe_image-08.webp" alt="Design process" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section style={{ padding: '6rem 0', backgroundColor: '#090a0f', color: '#ffffff' }}>
        <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <div className="container-large">
            
            <div style={{ marginBottom: '3.5rem' }}>
              <span style={{ fontSize: '0.88rem', color: '#4361ee', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Recognition</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: '0.5rem 0 0' }}>
                Awards & Accolades
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {awards.map((award, i) => (
                <div key={i} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '2rem', background: 'rgba(255,255,255,0.02)' }}>
                  <span style={{ color: '#4361ee', fontWeight: 700, fontSize: '0.88rem' }}>0{i + 1}</span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '0.8rem 0 0.3rem' }}>{award.title}</h3>
                  <div style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '0.8rem' }}>{award.project}</div>
                  <p style={{ color: '#777', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>{award.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section style={{ padding: '6rem 0', backgroundColor: '#f9f9fb' }}>
        <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <div className="container-large">
            
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>People</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: '0.5rem 0 0' }}>
                Meet the Team
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
              {team.map((member, i) => (
                <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ height: '360px', overflow: 'hidden' }}>
                    <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>{member.name}</h3>
                    <div style={{ color: '#666', fontSize: '0.92rem', marginTop: '0.3rem' }}>{member.role}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
