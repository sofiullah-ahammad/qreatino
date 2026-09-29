import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
  const { slug } = useParams();

  const details = {
    elevate: {
      name: 'Elevate',
      client: 'Elevate Technologies Ltd.',
      year: '2024',
      service: 'Brand Identity & Web Experience',
      deliverables: ['Brand Architecture', 'Visual Design System', 'Responsive Website', '3D Motion'],
      heroImg: '/assets/69b29dd8f780820fa8d7a163_project-img-02.jpg',
      gallery: [
        '/assets/69b4510006764516345ec466_project-img-02-2.jpg',
        '/assets/69b45105fc1a6c4b27a3c3d5_project-img-02-3.jpg',
        '/assets/69b4510b06764516345ecc58_project-img-02-4.jpg'
      ],
      overview: 'Elevate is a leading enterprise software provider aiming to unify developer operations with intuitive analytics. Our task was to reimagine their visual identity from the ground up, establishing an authoritative presence in the modern cloud landscape.',
      challenge: 'The existing brand was fragmented across product verticals and lacked a cohesive narrative. It required a unifying visual framework that felt technically robust yet human and approachable.',
      solution: 'We engineered a high-precision graphic identity, featuring customized typographic balance, clean monochromatic accents with electric cobalt blue touches, and a modular digital design system.'
    },
    origin: {
      name: 'Origin',
      client: 'Origin Digital Inc.',
      year: '2023',
      service: 'Design Systems & Interactive 3D',
      deliverables: ['Product Strategy', 'Interactive 3D Elements', 'Design System', 'Mobile App UI'],
      heroImg: '/assets/69b29df108e3c109b1ae9c8e_project-img-04.jpg',
      gallery: [
        '/assets/69b451e158126ced9b642527_project-img-04-2.jpg',
        '/assets/69b451e4e38d23804f6eaf11_project-img-04-3.jpg',
        '/assets/69b451e73fa320919ad4b031_project-img-04-4.jpg'
      ],
      overview: 'Origin is an interactive next-generation workspace exploring the intersection of spatial computing and productivity. We shaped their core brand narrative and created a fluid digital experience.',
      challenge: 'Conveying spatial dimensions on flat screen devices without overloading performance or confusing first-time users.',
      solution: 'We developed an ultra-lightweight custom web experience utilizing optimized 3D scenes, minimal chrome, and crisp typography.'
    },
    beyond: {
      name: 'Beyond',
      client: 'Beyond Spatial Studios',
      year: '2025',
      service: 'Branding & Architecture Experience',
      deliverables: ['Brand Storytelling', 'Visual Identity', 'Lookbook & Print', 'Digital Showcase'],
      heroImg: '/assets/69b29dcff780820fa8d79904_project-img-01.jpg',
      gallery: [
        '/assets/69b44feb2576b51c07aa887c_project-img-01-2.jpg',
        '/assets/69b44ff61e73a388f8be22fb_project-img-01-3.jpg',
        '/assets/69b450000a68d0e722fc3ea6_project-img-01-4.jpg'
      ],
      overview: 'Beyond is an architectural practice specializing in bespoke sustainable residential environments. We designed their brand identity to mirror the refined materiality of their physical buildings.',
      challenge: 'Balancing minimalist restraint with tactile warmth and deep emotional resonance.',
      solution: 'A monochrome identity anchored by generous negative space, refined serif editorial accents, and cinematic architectural photography.'
    },
    horizon: {
      name: 'Horizon',
      client: 'Horizon Capital Group',
      year: '2026',
      service: 'Corporate Branding & Art Direction',
      deliverables: ['Corporate Identity', 'Digital Platform', 'Investor Collateral', 'Brand Guidelines'],
      heroImg: '/assets/69b5aaa4ba5e05b459dc1ed1_project-img-03.jpg',
      gallery: [
        '/assets/69b451b4e834eceba1c00d4b_project-img-03-2.jpg',
        '/assets/69b451c0e605ade1aaffe790_project-img-03-3.jpg',
        '/assets/69b451c72d37f4a6fab9fab9_project-img-03-4.jpg'
      ],
      overview: 'Horizon Capital is an international investment firm backing generational innovation. We crafted an elegant, confident identity that conveys financial security and forward-looking momentum.',
      challenge: 'Standing out within conservative institutional finance while preserving utmost credibility and governance standards.',
      solution: 'A commanding identity rooted in classic proportions, dark atmospheric backdrops, and modern digital elegance.'
    }
  };

  const project = details[slug?.toLowerCase()] || details.elevate;

  return (
    <main className="main-wrapper">
      {/* Project Hero Header */}
      <header style={{ backgroundColor: '#090a0f', color: '#ffffff', paddingTop: '9rem', paddingBottom: '5rem' }}>
        <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <div className="container-large">
            <Link to="/projects" style={{ color: '#4361ee', textDecoration: 'none', fontSize: '0.94rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
              ← Back to Projects
            </Link>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', marginBottom: '3rem' }}>
              <div>
                <span style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem' }}>
                  Case Study ({project.year})
                </span>
                <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0, lineHeight: 1 }}>
                  {project.name}
                </h1>
              </div>

              <div style={{ display: 'flex', gap: '2.5rem', borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '2rem' }}>
                <div>
                  <div style={{ color: '#888', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Client</div>
                  <div style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginTop: '0.3rem' }}>{project.client}</div>
                </div>
                <div>
                  <div style={{ color: '#888', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Service</div>
                  <div style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginTop: '0.3rem' }}>{project.service}</div>
                </div>
              </div>
            </div>

            {/* Main Showcase Hero Image */}
            <div style={{ borderRadius: '28px', overflow: 'hidden', height: 'clamp(360px, 60vh, 680px)', width: '100%' }}>
              <img src={project.heroImg} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

          </div>
        </div>
      </header>

      {/* Case Study Details */}
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
        <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <div className="container-large">
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 1rem' }}>Project Overview</h3>
                <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 1rem' }}>Deliverables</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {project.deliverables.map((deliv, i) => (
                    <span key={i} style={{ backgroundColor: '#f0f0f3', borderRadius: '9999px', padding: '0.5rem 1.1rem', fontSize: '0.92rem', fontWeight: 500, color: '#222' }}>
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Images */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
              {project.gallery.map((imgUrl, i) => (
                <div key={i} style={{ borderRadius: '20px', overflow: 'hidden', height: '420px', backgroundColor: '#f5f5f7' }}>
                  <img src={imgUrl} alt={`${project.name} detail`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
              <div style={{ backgroundColor: '#f9f9fb', borderRadius: '24px', padding: '3rem 2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1rem' }}>The Challenge</h3>
                <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                  {project.challenge}
                </p>
              </div>

              <div style={{ backgroundColor: '#090a0f', color: '#ffffff', borderRadius: '24px', padding: '3rem 2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1rem', color: '#4361ee' }}>Our Solution</h3>
                <p style={{ color: '#aaa', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                  {project.solution}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
