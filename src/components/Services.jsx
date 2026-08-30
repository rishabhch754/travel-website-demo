import React from 'react'

const SERVICES = [
  {
    title: 'Airport Transfer',
    desc: 'On-time pickup and drop between Vrindavan/Mathura and Delhi Airport, with live flight tracking so we\'re never late.',
    example: 'Vrindavan ⇄ Delhi Airport',
    icon: <><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></>,
  },
  {
    title: 'Outstation Trips',
    desc: 'Manali, Jaipur, Char Dham or anywhere you want to go — multi-day outstation packages with a single fixed driver.',
    example: 'Manali · Jaipur · Char Dham',
    icon: <><path d="M4 20 10 4h4l6 16" /><path d="M8 20h8" /><path d="M9.5 15.5h5" /></>,
  },
  {
    title: 'Temple Tours',
    desc: 'Guided darshan circuits across the Braj region — Vrindavan, Mathura, Barsana and Nandgaon in one comfortable trip.',
    example: 'Vrindavan · Mathura · Barsana · Nandgaon',
    icon: <><path d="M12 2C8 8 8 16 12 22C16 16 16 8 12 2Z" /></>,
  },
  {
    title: 'Hill Station Tours',
    desc: 'Escape to the hills with a driver who knows the mountain roads — Shimla, Manali, Nainital and more.',
    example: 'Shimla · Manali · Nainital',
    icon: <><path d="M3 20 9 8l4 7 3-5 5 10Z" /></>,
  },
  {
    title: 'Local Taxi Service',
    desc: 'Need a drop, a pickup, or both within the city? Book a local taxi for shopping, meetings or a day around town.',
    example: 'Drop only · Pickup only · Both',
    icon: <><rect x="3" y="11" width="18" height="7" rx="2" /><path d="M5 11 7 6h10l2 5M8 18v1M16 18v1" /></>,
  },
  {
    title: 'Group Travel',
    desc: 'Travelling as a family, society or kirtan mandali? Book a bigger vehicle sized for your whole group.',
    example: 'Family · Society · Group Bookings',
    icon: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M2 21v-1a6 6 0 0 1 12 0v1M14 21v-1a5 5 0 0 1 8-4" /></>,
  },
]

export default function Services() {
  // Scroll to contact section smoothly
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Function to handle booking with service name
  const handleBookNow = (serviceTitle) => {
    // Store the service name in session storage to pre-fill the contact form
    sessionStorage.setItem('selectedService', serviceTitle)
    scrollToContact()
  }

  return (
    <section className="services-section" id="services" style={{
      padding: '80px 20px 100px 20px',
      background: '#f8fafc',
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
    }}>
      <div className="container-xl" style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '620px',
          margin: '0 auto 56px auto',
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
            Our Services
          </span>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            color: '#1a1a2e',
            marginBottom: '12px',
          }}>
            Wherever you need to go, we'll take you there
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            lineHeight: '1.6',
          }}>
            From a quick airport run to a multi-day pilgrimage or hill station trip — pick a service below.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {SERVICES.map((s, index) => (
            <div 
              key={s.title}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px 28px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.03)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${index === 0 ? '#f59e0b' : index === 1 ? '#38b2ac' : index === 2 ? '#48bb78' : index === 3 ? '#a78bfa' : index === 4 ? '#f472b6' : '#f59e0b'}, ${index === 0 ? '#fbbf24' : index === 1 ? '#4fd1c5' : index === 2 ? '#68d391' : index === 3 ? '#c4b5fd' : index === 4 ? '#f9a8d4' : '#fbbf24'})`,
                borderRadius: '20px 20px 0 0',
              }} />

              {/* Icon with gradient background */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: `linear-gradient(135deg, ${index === 0 ? '#fef3c7' : index === 1 ? '#e6fffa' : index === 2 ? '#f0fff4' : index === 3 ? '#ede9fe' : index === 4 ? '#fdf2f8' : '#fef3c7'}, ${index === 0 ? '#fde68a' : index === 1 ? '#b2f5ea' : index === 2 ? '#c6f6d5' : index === 3 ? '#ddd6fe' : index === 4 ? '#fce7f3' : '#fde68a'})`,
                marginBottom: '16px',
                color: index === 0 ? '#d97706' : index === 1 ? '#2c7a7b' : index === 2 ? '#276749' : index === 3 ? '#6d28d9' : index === 4 ? '#be185d' : '#d97706',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: '26px', height: '26px' }}>
                  {s.icon}
                </svg>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: '600',
                color: '#1a1a2e',
                margin: '0 0 8px 0',
              }}>
                {s.title}
              </h3>

              {/* Description - flex: 1 to push button to bottom */}
              <p style={{
                fontSize: '0.9rem',
                color: '#64748b',
                lineHeight: '1.7',
                margin: '0 0 16px 0',
                flex: 1,
              }}>
                {s.desc}
              </p>

              {/* Example badge */}
              <div style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: '500',
                color: '#f59e0b',
                background: 'rgba(245,158,11,0.08)',
                padding: '4px 14px',
                borderRadius: '30px',
                border: '1px solid rgba(245,158,11,0.1)',
                marginBottom: '16px',
              }}>
                {s.example}
              </div>

              {/* Call to Book Button with Animation */}
            <a 
              href="tel:+911234567890" 
              className="btn-rk btn-rk-outline" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.3rem 1.2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '400',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: '#1a1a2e',
                background: '#38b2ac',
                backdropFilter: 'blur(8px)',
                fontSize: '1.02rem',
                fontFamily: "'Poppins', 'Segoe UI', sans-serif",
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Ripple Effect Background */}
              <span style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)',
                animation: 'ripple 3s ease-in-out infinite',
                pointerEvents: 'none',
              }} />
              
              {/* Phone Icon */}
              <span style={{
                display: 'inline-flex',
                animation: 'phonePulse 1.5s ease-in-out infinite',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              Call to Book
            </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}