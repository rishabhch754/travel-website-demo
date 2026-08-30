import React from 'react'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container-xl">
        <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" /></svg>
          Ready When You Are
        </span>
        <h2>Book your next ride in under a minute</h2>
        <p>Call us directly or fill the booking form — either way, we&rsquo;ll confirm your ride with a fixed price, fast.</p>
        <div className="cta-buttons">
          <a href="#contact" className="btn-rk btn-rk-amber">Get a Free Quote</a>
          <a href="tel:+919634728358" className="btn-rk btn-rk-outline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" /></svg>
            +91 9634728358
          </a>
        </div>
      </div>
    </section>
  )
}
