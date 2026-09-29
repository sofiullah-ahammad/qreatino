import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Modern Anatomy of a Scalable Brand Identity System',
      category: 'Design Systems',
      date: 'Sep 24, 2026',
      readTime: '6 min read',
      image: '/assets/69b45f94fdb752364028c020_blog-01.jpg',
      excerpt: 'Why rigid brand manuals are dead, and how dynamic tokenized systems create enduring visual coherence across emerging platforms.'
    },
    {
      id: 2,
      title: 'Motion as an Organic Extension of Graphic Identity',
      category: 'Motion Design',
      date: 'Sep 18, 2026',
      readTime: '5 min read',
      image: '/assets/69b45f9db54d2fe4cdd985bf_blog-02.jpg',
      excerpt: 'Exploring how subtle micro-interactions and deliberate easing physics reinforce perceived brand luxury and quality.'
    },
    {
      id: 3,
      title: 'Designing for Spatial Interfaces and Beyond Flat Displays',
      category: 'Creative Tech',
      date: 'Sep 12, 2026',
      readTime: '8 min read',
      image: '/assets/69b45fa652d900ca7e7486df_blog-03.jpg',
      excerpt: 'Translating traditional graphic rules to three dimensions without sacrificing legibility or cognitive ease.'
    },
    {
      id: 4,
      title: 'Why Strategic Positioning Always Precedes Visual Exploration',
      category: 'Strategy',
      date: 'Aug 29, 2026',
      readTime: '4 min read',
      image: '/assets/69b45faf4be9d2023715c644_blog-04.jpg',
      excerpt: 'How foundational market positioning clarifies design decisions and accelerates client consensus.'
    },
    {
      id: 5,
      title: 'The Art of Typographic Tension in Modern Editorial Web Design',
      category: 'Typography',
      date: 'Aug 20, 2026',
      readTime: '7 min read',
      image: '/assets/69b45fb6963dcfbb37f02d7a_blog-05.jpg',
      excerpt: 'Pairing geometric display types with functional grotesque body styles for maximum editorial character.'
    },
    {
      id: 6,
      title: 'Conversion Without Compromise: Elevating High-Ticket UX',
      category: 'Digital Experience',
      date: 'Aug 14, 2026',
      readTime: '5 min read',
      image: '/assets/69b45fbd877d483ced758e48_blog-06.jpg',
      excerpt: 'How leading premium agencies balance uncompromised aesthetic minimalism with high-converting buyer flows.'
    }
  ];

  return (
    <main className="main-wrapper" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="padding-global" style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        <div className="container-large">
          
          {/* Header */}
          <div style={{ marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#4361ee', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.8rem' }}>
              Insights
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 1.2rem', lineHeight: 1.1 }}>
              Studio Journal
            </h1>
            <p style={{ color: '#666', fontSize: '1.15rem', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
              Perspectives, deep dives, and methodologies on brand architecture, digital craft, and design systems.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
            {posts.map((post) => (
              <article 
                key={post.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem 1.8rem 2.2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', fontSize: '0.84rem', color: '#888' }}>
                    <span style={{ color: '#4361ee', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: '1.45rem', fontWeight: 700, margin: '0 0 0.8rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                    {post.title}
                  </h2>
                  <p style={{ color: '#666', fontSize: '0.94rem', lineHeight: 1.6, margin: '0 0 1.5rem', flexGrow: 1 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ fontSize: '0.85rem', color: '#999', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1rem' }}>
                    {post.date}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
