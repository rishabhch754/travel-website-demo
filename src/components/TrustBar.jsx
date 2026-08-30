import React from 'react'

const STATS = [
  {
    icon: <path d="M12 2v20M2 12h20" />,
    num: '5+',
    label: 'Years on the Road',
  },
  {
    icon: <><rect x="3" y="11" width="18" height="7" rx="2" /><path d="M5 11 7 6h10l2 5M8 18v1M16 18v1" /></>,
    num: '12+',
    label: 'Cars in Fleet',
  },
  {
    icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1" /></>,
    num: '5500+',
    label: 'Happy Customers',
  },
  {
    icon: <path d="M12 2C8 8 8 16 12 22C16 16 16 8 12 2Z" />,
    num: '24/7',
    label: 'Support & Booking',
  },
]

export default function TrustBar() {
  return (
    <section className="trust-section" style={{
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #eef2f7 100%)',
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
    }}>
      <div className="container-xl" style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Heading */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
        }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.85rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#f59e0b',
            background: 'rgba(245,158,11,0.08)',
            padding: '6px 18px',
            borderRadius: '30px',
            marginBottom: '12px',
          }}>
            Trust & Reliability
          </span>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            color: '#1a1a2e',
            margin: '8px 0 4px',
          }}>
            Why Choose Tour & Travels?
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Years of experience, thousands of happy customers, and a fleet ready for you.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginTop: '8px',
        }}>
          {STATS.map((s, index) => (
            <div 
              key={s.label}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px 20px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.03)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
              }}
            >
              {/* Subtle gradient accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${index === 0 ? '#f59e0b' : index === 1 ? '#38b2ac' : index === 2 ? '#48bb78' : '#a78bfa'}, ${index === 0 ? '#fbbf24' : index === 1 ? '#4fd1c5' : index === 2 ? '#68d391' : '#c4b5fd'})`,
                borderRadius: '20px 20px 0 0',
              }} />
              
              {/* Icon */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${index === 0 ? '#fef3c7' : index === 1 ? '#e6fffa' : index === 2 ? '#f0fff4' : '#ede9fe'}, ${index === 0 ? '#fde68a' : index === 1 ? '#b2f5ea' : index === 2 ? '#c6f6d5' : '#ddd6fe'})`,
                marginBottom: '16px',
                color: index === 0 ? '#d97706' : index === 1 ? '#2c7a7b' : index === 2 ? '#276749' : '#6d28d9',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" style={{ width: '30px', height: '30px' }}>
                  {s.icon}
                </svg>
              </div>
              
              {/* Number */}
              <div style={{
                fontSize: '2.4rem',
                fontWeight: '800',
                color: '#1a1a2e',
                letterSpacing: '-0.5px',
                lineHeight: '1.2',
              }}>
                {s.num}
              </div>
              
              {/* Label */}
              <div style={{
                fontSize: '0.9rem',
                color: '#64748b',
                fontWeight: '500',
                marginTop: '4px',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}