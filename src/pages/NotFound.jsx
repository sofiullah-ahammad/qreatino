import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 1rem' }}>
      <div>
        <div style={{ fontSize: '7rem', fontWeight: 900, color: '#4361ee', lineHeight: 1 }}>404</div>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: '1rem 0' }}>Page Not Found</h1>
        <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '440px', margin: '0 auto 2.5rem' }}>
          The page you are looking for doesn't exist or has been moved to another location.
        </p>
        <Link
          to="/"
          style={{
            backgroundColor: '#111',
            color: '#fff',
            padding: '0.85rem 2rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontWeight: 600,
            display: 'inline-block'
          }}
        >
          Return to Home →
        </Link>
      </div>
    </main>
  );
}
