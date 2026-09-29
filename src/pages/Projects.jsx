import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const allProjects = [
    {
      id: 'elevate',
      title: 'Elevate',
      year: '2024',
      category: 'Branding',
      tags: ['Brand Identity', 'Web Design'],
      image: '/assets/69b29dd8f780820fa8d7a163_project-img-02.jpg',
      desc: 'Complete digital rebrand for a next-generation SaaS enterprise platform.',
      href: '/project/elevate'
    },
    {
      id: 'origin',
      title: 'Origin',
      year: '2023',
      category: 'Digital',
      tags: ['Design Systems', 'Experience'],
      image: '/assets/69b29df108e3c109b1ae9c8e_project-img-04.jpg',
      desc: 'Interactive 3D product showcase and digital experience platform.',
      href: '/project/origin'
    },
    {
      id: 'beyond',
      title: 'Beyond',
      year: '2025',
      category: 'Identity',
      tags: ['Product Strategy', 'Visual Identity'],
      image: '/assets/69b29dcff780820fa8d79904_project-img-01.jpg',
      desc: 'Redefining the creative visual language for an architecture & spatial design firm.',
      href: '/project/beyond'
    },
    {
      id: 'horizon',
      title: 'Horizon',
      year: '2026',
      category: 'Branding',
      tags: ['Corporate Branding', 'Art Direction'],
      image: '/assets/69b5aaa4ba5e05b459dc1ed1_project-img-03.jpg',
      desc: 'Comprehensive brand architecture and interactive identity system for global capital.',
      href: '/project/horizon'
    }
  ];

  const categories = ['All', 'Branding', 'Digital', 'Identity'];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <main className="main-wrapper" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        <div className="container-large">
          
          {/* Header */}
          <div style={{ marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#4361ee', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.8rem' }}>
              Portfolio
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 1.2rem', lineHeight: 1.1 }}>
              Selected Works
            </h1>
            <p style={{ color: '#666', fontSize: '1.15rem', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
              A curated selection of brands, products, and experiences crafted with precision, emotion, and impact.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  backgroundColor: filter === cat ? '#111111' : '#f0f0f3',
                  color: filter === cat ? '#ffffff' : '#333333',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.55rem 1.4rem',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem' }}>
            {filteredProjects.map((p) => (
              <Link 
                key={p.id} 
                to={p.href}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div style={{ borderRadius: '24px', overflow: 'hidden', backgroundColor: '#f5f5f7', border: '1px solid rgba(0,0,0,0.06)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                  <div style={{ height: '420px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                    />
                    <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: '#111' }}>
                      ({p.year})
                    </div>
                  </div>
                  <div style={{ padding: '2rem 1.8rem 2.2rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}>
                      {p.tags.map((t, idx) => (
                        <span key={idx} style={{ fontSize: '0.82rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          {t} {idx < p.tags.length - 1 ? '•' : ''}
                        </span>
                      ))}
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.6rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {p.title}
                      <span style={{ fontSize: '1.3rem' }}>↗</span>
                    </h2>
                    <p style={{ color: '#666', fontSize: '0.96rem', lineHeight: 1.6, margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
