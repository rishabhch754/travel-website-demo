import React, { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container-xl">
          <a href="#home" className="brand">
            <span className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 13l1.6-4.8A2 2 0 0 1 6.5 7h11a2 2 0 0 1 1.9 1.2L21 13" />
                <rect x="3" y="13" width="18" height="6" rx="2" />
                <circle cx="7.5" cy="19" r="1.6" fill="currentColor" />
                <circle cx="16.5" cy="19" r="1.6" fill="currentColor" />
              </svg>
            </span>
            <span>
              Tour & Travels
              <small>Taxi &amp; Tour Service</small>
            </span>
          </a>

          <nav className="main-nav">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-call" href="tel:+911234567890">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 12345 67890
            </a>
            <a href="#contact" className="btn-rk btn-rk-amber btn-rk-sm">Book Now</a>
            <button className="nav-toggle" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-overlay${drawerOpen ? ' show' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`mobile-drawer${drawerOpen ? ' open' : ''}`}>
        <button className="drawer-close" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setDrawerOpen(false)}>{l.label}</a>
        ))}
        <a className="header-call" href="tel:+911234567890">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" />
          </svg>
          +91 12345 67890
        </a>
      </aside>
    </>
  )
}
