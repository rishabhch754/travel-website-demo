import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const SERVICE_OPTIONS = [
  'Airport Transfer',
  'Outstation Trip',
  'Local Taxi',
  'Temple Tour',
  'Hill Station Tour',
  'Hourly Rental',
  'Group Travel',
  'Other',
]

const initialForm = { name: '', phone: '', email: '', service: '', message: '' }

export default function BookingForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.phone || !form.service || !form.message) {
      setStatus({ state: 'error', message: 'Please fill all the required (*) fields.' })
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        state: 'error',
        message:
          'Email service is not configured yet. Add your EmailJS keys to the .env file (see README.md) to activate this form.',
      })
      return
    }

    setStatus({ state: 'sending', message: 'Sending your request…' })
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          phone: form.phone,
          email: form.email || 'Not provided',
          service: form.service,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus({ state: 'success', message: 'Thank you! Your request has been sent — we will call you shortly.' })
      setForm(initialForm)
      setShowPopup(true) // Show popup on success
    } catch (err) {
      console.error(err)
      setStatus({ state: 'error', message: 'Something went wrong sending your request. Please call us directly instead.' })
      setShowPopup(true) // Show popup on error too
    }
  }

  const closePopup = () => {
    setShowPopup(false)
    setStatus({ state: 'idle', message: '' })
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container-xl">
        <div className="text-center mx-auto" style={{ maxWidth: 620 }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" /></svg>
            Book Your Ride Now
          </span>
          <h2>Fill the form or call us directly</h2>
          <p>Tell us your route and dates below and we&rsquo;ll get back to you with the best rates and availability — or just call, both work.</p>
        </div>

        <div className="row-flex" style={{ marginTop: 52 }}>
          <div className="contact-info-card">
            <h3>Contact Info</h3>
            <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '.9rem' }}>
              Your trusted partner for safe and comfortable taxi services. We provide reliable
              transportation solutions for all your travel needs.
            </p>

            <div className="contact-row" style={{ marginTop: 28 }}>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" /></svg>
              </span>
              <div>
                <span className="lbl-sm">24/7 Available</span>
                <a href="tel:+911234567890">+91 12345 67890</a>
              </div>
            </div>

            <div className="contact-row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m3 6 9 7 9-7M3 6v12h18V6" /></svg>
              </span>
              <div>
                <span className="lbl-sm">Email Us</span>
                <a href="mailto:demo@gmail.com">demo@gmail.com</a>
              </div>
            </div>

            <div className="contact-row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              <div>
                <span className="lbl-sm">Our Base</span>
                <span>Vrindavan, UP – 281121</span>
              </div>
            </div>

            <div className="contact-socials">
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

          <div className="booking-card">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row-2">
                <div className="form-group-rk">
                  <label htmlFor="name">Your Name <span className="req">*</span></label>
                  <input
                    className="form-control-rk" id="name" name="name" type="text"
                    placeholder="Your Name" value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className="form-group-rk">
                  <label htmlFor="phone">Phone Number <span className="req">*</span></label>
                  <input
                    className="form-control-rk" id="phone" name="phone" type="tel"
                    placeholder="e.g. 98765 43210" value={form.phone} onChange={handleChange} required
                  />
                </div>
              </div>

              <div className="form-group-rk">
                <label htmlFor="email">Email Address</label>
                <input
                  className="form-control-rk" id="email" name="email" type="email"
                  placeholder="you@example.com" value={form.email} onChange={handleChange}
                />
              </div>

              <div className="form-group-rk">
                <label htmlFor="service">Service Required <span className="req">*</span></label>
                <select
                  className="form-control-rk" id="service" name="service"
                  value={form.service} onChange={handleChange} required
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option value={s} key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="form-group-rk">
                <label htmlFor="message">Your Message <span className="req">*</span></label>
                <textarea
                  className="form-control-rk" id="message" name="message" rows={4}
                  placeholder="Tell us your pickup point, destination, date and number of passengers…"
                  value={form.message} onChange={handleChange} required
                />
              </div>

              <button type="submit" className="btn-rk btn-rk-amber btn-rk-block" disabled={status.state === 'sending'}>
                {status.state === 'sending' ? 'Sending…' : 'Send Message'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>

              {status.state !== 'idle' && status.state !== 'success' && status.state !== 'error' && (
                <div className={`form-status ${status.state === 'sending' ? 'sending' : status.state}`}>
                  {status.message}
                </div>
              )}

              <p className="form-note">
                Prefer to talk? Call <a href="tel:+911234567890" style={{ fontWeight: 600, color: 'var(--navy)' }}>+91 12345 67890</a> — available 24/7.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          animation: 'fadeIn 0.3s ease',
        }}
        onClick={closePopup}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e, #2d2d44)',
            borderRadius: '24px',
            padding: '40px 48px',
            maxWidth: '480px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.06)',
            animation: 'scaleIn 0.3s ease',
          }}
          onClick={(e) => e.stopPropagation()}>
            {/* Icon */}
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              margin: '0 auto 20px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: status.state === 'success' 
                ? 'linear-gradient(135deg, #22c55e, #16a34a)' 
                : 'linear-gradient(135deg, #ef4444, #dc2626)',
              fontSize: '36px',
              boxShadow: status.state === 'success'
                ? '0 8px 30px rgba(34,197,94,0.3)'
                : '0 8px 30px rgba(239,68,68,0.3)',
            }}>
              {status.state === 'success' ? '✅' : '❌'}
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '12px',
            }}>
              {status.state === 'success' ? 'Thank You!' : 'Something Went Wrong'}
            </h3>

            {/* Message */}
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: '1.7',
              marginBottom: '28px',
            }}>
              {status.message}
            </p>

            {/* OK Button */}
            <button
              onClick={closePopup}
              style={{
                padding: '12px 48px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: '#1a1a2e',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(245,158,11,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(245,158,11,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,158,11,0.3)'
              }}>
              OK
            </button>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}