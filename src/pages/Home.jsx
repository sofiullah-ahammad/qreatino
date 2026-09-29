import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const projects = [
    {
      id: 'elevate',
      name: 'Elevate',
      year: '2024',
      image: '/assets/69b29dd8f780820fa8d7a163_project-img-02.jpg',
      category: 'Brand Identity & Web Design',
      href: '/project/elevate'
    },
    {
      id: 'origin',
      name: 'Origin',
      year: '2023',
      image: '/assets/69b29df108e3c109b1ae9c8e_project-img-04.jpg',
      category: 'Design Systems & Digital Experience',
      href: '/project/origin'
    },
    {
      id: 'beyond',
      name: 'Beyond',
      year: '2025',
      image: '/assets/69b29dcff780820fa8d79904_project-img-01.jpg',
      category: 'Product Strategy & Visual Identity',
      href: '/project/beyond'
    },
    {
      id: 'horizon',
      name: 'Horizon',
      year: '2026',
      image: '/assets/69b5aaa4ba5e05b459dc1ed1_project-img-03.jpg',
      category: 'Comprehensive Corporate Branding',
      href: '/project/horizon'
    }
  ];

  const services = [
    {
      number: '01',
      title: 'Branding',
      desc: 'We build distinctive brand identities that define how companies are seen and remembered in the market.',
      features: ['Identity', 'Strategy', 'Positioning', 'Voice', 'Guidelines', 'Consistency'],
      thumb: '/assets/699dc7469eea4d936dedee0a_image-06.webp'
    },
    {
      number: '02',
      title: 'Strategy',
      desc: 'We develop strategic foundations that guide brands toward clarity, differentiation, and long-term growth.',
      features: ['Research', 'Insights', 'Analysis', 'Positioning', 'Messaging', 'Planning'],
      thumb: '/assets/699dc746eda3367875fbbb4e_image-18.webp'
    },
    {
      number: '03',
      title: 'Design',
      desc: 'We craft visual identities that communicate personality, consistency, and a strong brand presence.',
      features: ['Logos', 'Colors', 'Typography', 'Icons', 'Layouts', 'Systems'],
      thumb: '/assets/699dc746210764b6fc133cfe_image-08.webp'
    },
    {
      number: '04',
      title: 'Marketing',
      desc: 'We craft marketing campaigns and visual content that engage audiences across all modern touchpoints.',
      features: ['Campaigns', 'Analytics', 'Marketing', 'Social', 'Launches', 'Scaling'],
      thumb: '/assets/699dc7462612980f21e7e522_image-17.webp'
    }
  ];

  const faqs = [
    {
      q: 'How long does a branding project take?',
      a: 'Most branding projects take between three and six weeks, depending on the scope, feedback cycles, and project complexity.'
    },
    {
      q: 'What services are included in branding?',
      a: 'Our branding services typically include strategy, visual identity design, brand guidelines, and supporting assets for consistent communication.'
    },
    {
      q: 'Do you work with startups and companies?',
      a: 'Yes, we collaborate with startups, growing businesses, and established companies looking to refine or elevate their brand presence.'
    },
    {
      q: 'Can you redesign an existing brand identity?',
      a: 'Absolutely. We help modernize and strengthen existing brands while preserving the core values and recognition that define them.'
    }
  ];

  return (
    <main className="main-wrapper">
      
      {/* HERO SECTION */}
      <header className="section-home-header">
        <div className="w-layout-grid header-grid">
          <div className="header-content-wrap">
            <div className="header-text">We Are...</div>
            <h1 className="header-title">Qreatino™</h1>
            <div className="header-description">Designing brands that inspire trust and growth</div>
          </div>

          <div className="header-bg-component">
            <div className="header-image-wrap">
              <div className="top-opacity"></div>
              
              <div className="horizontal-image-block">
                {/* Horizontal Sliding Top Row */}
                <div className="horizontal-image-wrap top-horizontal">
                  <div className="horizontal-image-row" style={{ display: 'flex', gap: '1rem' }}>
                    <div className="header-image-item">
                      <img src="/assets/699dc746c86abe87c96d7391_image-04.webp" alt="Creative Project" className="cover-image" />
                    </div>
                    <div className="header-image-item">
                      <img src="/assets/699dc746d9f4df504dba9d99_image-14.webp" alt="Creative Project" className="cover-image" />
                    </div>
                    <div className="header-image-item">
                      <img src="/assets/699dc7469eea4d936dedee0a_image-06.webp" alt="Creative Project" className="cover-image" />
                    </div>
                    <div className="header-image-item">
                      <img src="/assets/699dc74664d4b4deb3e37360_image-02.webp" alt="Creative Project" className="cover-image" />
                    </div>
                    <div className="header-image-item">
                      <img src="/assets/699dc7455bdf3e7405bf080a_image-11.webp" alt="Creative Project" className="cover-image" />
                    </div>
                  </div>
                </div>

                {/* Horizontal Sliding Bottom Row */}
                <div className="horizontal-image-wrap bottom-horizontal">
                  <div className="horizontal-image-row" style={{ display: 'flex', gap: '1rem' }}>
                    <div className="header-image-item">
                      <img src="/assets/699dc746210764b6fc133cfe_image-08.webp" alt="Creative Project" className="cover-image" />
                    </div>
                    <div className="header-image-item">
                      <img src="/assets/699dc746e05f9e00d837f3b3_image-03.webp" alt="Creative Project" className="cover-image" />
                    </div>
                    <div className="header-image-item">
                      <img src="/assets/699e516b8ea3bfa714a2a547_image-32.webp" alt="Creative Project" className="cover-image" />
                    </div>
                    <div className="header-image-item">
                      <img src="/assets/699dc746eb4cdb52d1a5a070_image-01.webp" alt="Creative Project" className="cover-image" />
                    </div>
                    <div className="header-image-item">
                      <img src="/assets/699dc7469eea4d936dedee21_image-05.webp" alt="Creative Project" className="cover-image" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="overlay-wrap"></div>
            </div>

            <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
              <div className="container-large">
                <div className="header-bottom-wrap">
                  <div className="w-layout-grid header-inner-grid" style={{ display: 'flex', gap: '1rem' }}>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X">
                      <div className="social-icon-wrap">
                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>𝕏</span>
                      </div>
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                      <div className="social-icon-wrap">
                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>IG</span>
                      </div>
                    </a>
                    <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Dribbble">
                      <div className="social-icon-wrap">
                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>DR</span>
                      </div>
                    </a>
                    <a href="https://behance.net/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Behance">
                      <div className="social-icon-wrap">
                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>BE</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="header-shape-wrap">
              <div className="header-shape"></div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED WORK / PROJECTS SECTION */}
      <section className="section-home-project" style={{ padding: '5rem 0' }}>
        <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <div className="container-large">
            
            <div className="top-content-wrap" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="subtitle-wrapper" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <img src="/assets/69b2a56b9efda71ded09de34_black-star.svg" alt="Star" className="subtitle-icon" style={{ width: '16px' }} />
                <span className="subtitle" style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Portfolio
                </span>
              </div>
              <h2 className="heading-style-h2" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
                Selected <span style={{ color: '#4361ee' }}>Projects</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
              {projects.map((proj) => (
                <Link key={proj.id} to={proj.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', group: 'true' }}>
                  <div style={{ borderRadius: '24px', overflow: 'hidden', backgroundColor: '#f5f5f7', position: 'relative', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                    <div style={{ height: '380px', overflow: 'hidden', position: 'relative' }}>
                      <img 
                        src={proj.image} 
                        alt={proj.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                        className="project-thumb-img"
                      />
                      <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: '#111' }}>
                        ({proj.year})
                      </div>
                    </div>
                    <div style={{ padding: '1.8rem 1.6rem 2rem' }}>
                      <span style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{proj.category}</span>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0.4rem 0 0', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        {proj.name}
                        <span style={{ fontSize: '1.2rem', transition: 'transform 0.2s ease' }}>↗</span>
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <Link 
                to="/projects" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#111',
                  color: '#fff',
                  padding: '0.85rem 2rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.96rem'
                }}
              >
                View All Projects →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / STATS SECTION */}
      <section className="section-home-why-choose-us" style={{ backgroundColor: '#090a0f', color: '#ffffff', padding: '6rem 0' }}>
        <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <div className="container-large">
            
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <img src="/assets/69b190c86410bb1ef02424f1_star.svg" alt="Star" style={{ width: '16px' }} />
                <span style={{ fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#aaa' }}>Brand Expertise</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0 }}>
                Why <span style={{ color: '#4361ee' }}>Choose Us</span>
              </h2>
              <div style={{ marginTop: '1.2rem', color: '#888', fontSize: '1.05rem' }}>
                200+ clients trust us • 4.9/5 Average Rating
              </div>
            </div>

            {/* Stats Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '2.5rem', backdropFilter: 'blur(20px)' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#4361ee', lineHeight: 1, marginBottom: '1rem' }}>+10</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.6rem' }}>● Years of Branding Expertise</h4>
                <p style={{ color: '#888', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                  With over a decade of experience, we craft digital experiences and build strong brands with strategy and creativity.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '2.5rem', backdropFilter: 'blur(20px)' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#4361ee', lineHeight: 1, marginBottom: '1rem' }}>99%</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.6rem' }}>● Customer Happiness Rate</h4>
                <p style={{ color: '#888', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                  Our success is defined by results. Clients rely on us to deliver bespoke solutions that consistently exceed expectations.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '2.5rem', backdropFilter: 'blur(20px)' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#4361ee', lineHeight: 1, marginBottom: '1rem' }}>35+</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.6rem' }}>● Global Industry Awards</h4>
                <p style={{ color: '#888', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                  Recognized by Awwwards, Webby, and CSS Design Awards for world-class digital innovation and craft.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOLUTIONS / SERVICES SECTION */}
      <section className="section-home-services" style={{ padding: '6rem 0' }}>
        <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <div className="container-large">
            
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <img src="/assets/69b2a56b9efda71ded09de34_black-star.svg" alt="Star" style={{ width: '16px' }} />
                <span style={{ fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#666', fontWeight: 600 }}>Solutions</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0 }}>
                Brand <span style={{ color: '#4361ee' }}>Services</span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {services.map((item) => (
                <div 
                  key={item.number} 
                  style={{
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '24px',
                    padding: '2.5rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '2rem',
                    alignItems: 'center',
                    backgroundColor: '#fafafa',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: '#4361ee', display: 'block', marginBottom: '0.5rem' }}>{item.number}</span>
                    <h3 style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>{item.title}</h3>
                  </div>

                  <div>
                    <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {item.features.map((feat) => (
                      <span 
                        key={feat}
                        style={{
                          backgroundColor: '#ffffff',
                          border: '1px solid rgba(0,0,0,0.08)',
                          borderRadius: '9999px',
                          padding: '0.35rem 0.85rem',
                          fontSize: '0.84rem',
                          fontWeight: 500,
                          color: '#333'
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="section-home-pricing" style={{ backgroundColor: '#090a0f', color: '#ffffff', padding: '6rem 0' }}>
        <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <div className="container-large">
            
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <img src="/assets/69b190c86410bb1ef02424f1_star.svg" alt="Star" style={{ width: '16px' }} />
                <span style={{ fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#aaa' }}>Transparent Costs</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.03em', margin: 0 }}>
                Flexible <span style={{ color: '#4361ee' }}>Pricing</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '980px', margin: '0 auto' }}>
              
              {/* Starter Plan */}
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '28px', padding: '3rem 2.5rem', backdropFilter: 'blur(20px)' }}>
                <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ddd', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: 600 }}>
                  Best for startups
                </span>
                <div style={{ margin: '1.5rem 0 0.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0 }}>Starter</h3>
                </div>
                <div style={{ fontSize: '3rem', fontWeight: 800, margin: '1rem 0' }}>
                  $2,500 <span style={{ fontSize: '1rem', color: '#888', fontWeight: 400 }}>/Month</span>
                </div>
                <p style={{ color: '#888', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  A basic branding package designed for new businesses that need a clean and professional identity.
                </p>

                <Link
                  to="/contact"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    padding: '0.85rem',
                    borderRadius: '9999px',
                    marginBottom: '2rem'
                  }}
                >
                  Get Started →
                </Link>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
                  <div style={{ fontSize: '0.88rem', color: '#aaa', marginBottom: '1rem', fontWeight: 600 }}>What's included:</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#ccc', fontSize: '0.92rem' }}>
                    <li>✓ Core Brand Strategy</li>
                    <li>✓ Custom Logo Design</li>
                    <li>✓ Defined Color Palette</li>
                    <li>✓ Basic Brand Guidelines</li>
                    <li>✓ Essential Visual Assets</li>
                    <li style={{ color: '#888', marginTop: '0.5rem' }}>⏱ Timeline: 1 - 2 weeks</li>
                  </ul>
                </div>
              </div>

              {/* Professional Plan */}
              <div style={{ background: 'linear-gradient(180deg, rgba(67, 97, 238, 0.16) 0%, rgba(255, 255, 255, 0.04) 100%)', border: '1px solid rgba(67, 97, 238, 0.35)', borderRadius: '28px', padding: '3rem 2.5rem', backdropFilter: 'blur(20px)', position: 'relative' }}>
                <span style={{ backgroundColor: '#4361ee', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: 600 }}>
                  Most popular
                </span>
                <div style={{ margin: '1.5rem 0 0.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0 }}>Professional</h3>
                </div>
                <div style={{ fontSize: '3rem', fontWeight: 800, margin: '1rem 0' }}>
                  $7,500 <span style={{ fontSize: '1rem', color: '#888', fontWeight: 400 }}>/Month</span>
                </div>
                <p style={{ color: '#aaa', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  A complete branding and digital solution for growing companies that want a strong, scalable presence.
                </p>

                <Link
                  to="/contact"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                    color: '#090a0f',
                    textDecoration: 'none',
                    fontWeight: 700,
                    padding: '0.85rem',
                    borderRadius: '9999px',
                    marginBottom: '2rem',
                    boxShadow: '0 6px 20px rgba(255,255,255,0.15)'
                  }}
                >
                  Get Started →
                </Link>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
                  <div style={{ fontSize: '0.88rem', color: '#aaa', marginBottom: '1rem', fontWeight: 600 }}>What's included:</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#fff', fontSize: '0.92rem' }}>
                    <li>✓ Advanced Brand Strategy</li>
                    <li>✓ Complete Visual Identity System</li>
                    <li>✓ Scalable Logo Suite</li>
                    <li>✓ Custom High-Performance Website</li>
                    <li>✓ Marketing & Social Assets</li>
                    <li style={{ color: '#888', marginTop: '0.5rem' }}>⏱ Timeline: 2 - 4 weeks</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-home-faq" style={{ padding: '6rem 0', backgroundColor: '#f9f9fb' }}>
        <div className="padding-global" style={{ maxWidth: '980px', margin: '0 auto', width: '100%' }}>
          <div className="container-large">
            
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>FAQ</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: '0.5rem 0 0' }}>
                Frequently Asked <span style={{ color: '#4361ee' }}>Questions</span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '1.4rem 1.6rem',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#111'
                    }}
                  >
                    <span>{idx + 1}. {item.q}</span>
                    <span style={{ fontSize: '1.4rem', color: '#4361ee', transform: openFaq === idx ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s ease' }}>
                      +
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div style={{ padding: '0 1.6rem 1.4rem', color: '#666', lineHeight: 1.6, fontSize: '0.96rem' }}>
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
