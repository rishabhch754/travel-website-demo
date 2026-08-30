import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-xl" style={{ paddingTop: 50 }}>
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span className="brand-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 13l1.6-4.8A2 2 0 0 1 6.5 7h11a2 2 0 0 1 1.9 1.2L21 13" />
                  <rect x="3" y="13" width="18" height="6" rx="2" />
                  <circle cx="7.5" cy="19" r="1.6" fill="currentColor" />
                  <circle cx="16.5" cy="19" r="1.6" fill="currentColor" />
                </svg>
              </span>
              Tour & Travels
            </div>
            <p>
              Your trusted partner for safe and comfortable taxi services. We provide reliable
              transportation solutions for all your travel needs — airport transfers, outstation
              trips, temple tours, hill stations, local taxi and group travel.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6C16.4 4.56 15.4 4.47 14.24 4.47c-2.4 0-4.05 1.47-4.05 4.16v2.32H7.5v3.1h2.69V22h3.31z" /></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.2-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 4.72 2.67c.46-.16 1.26-.35 2.43-.4C8.42 2.21 8.8 2.2 12 2.2zm0 5.66a4.14 4.14 0 1 0 0 8.28 4.14 4.14 0 0 0 0-8.28z" /></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12s0-3.4-.44-5a2.78 2.78 0 0 0-1.94-1.94C17.94 4.6 12 4.6 12 4.6s-5.94 0-7.62.42A2.78 2.78 0 0 0 2.44 7C2 8.6 2 12 2 12s0 3.4.44 5a2.78 2.78 0 0 0 1.94 1.94c1.68.42 7.62.42 7.62.42s5.94 0 7.62-.42A2.78 2.78 0 0 0 21.56 17c.44-1.6.44-5 .44-5zM10 15V9l5.2 3-5.2 3z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#fleet">Our Fleet</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5>Our Services</h5>
            <ul>
              <li><a href="#services">Airport Transfer</a></li>
              <li><a href="#services">Outstation Trips</a></li>
              <li><a href="#services">Temple Tours</a></li>
              <li><a href="#services">Hill Station Tours</a></li>
              <li><a href="#services">Local Taxi Service</a></li>
              <li><a href="#services">Group Travel</a></li>
            </ul>
          </div>

          <div>
            <h5>Contact Info</h5>
            <ul className="foot-contact">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" /></svg>
                <span><a href="tel:+919634728358">+91 9634728358</a> — 24/7 Available</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m3 6 9 7 9-7M3 6v12h18V6" /></svg>
                <span><a href="mailto:rishabhch754@gmail.com.com">demo@gmail.com</a></span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Vrindavan, UP – 281121</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-bar">
          <span>&copy; {new Date().getFullYear()} Tour & Travels. All rights reserved.</span>
          <span>Demo design — content, prices &amp; images to be finalised</span>
        </div>
      </div>
    </footer>
  )
}
