import React from 'react'
import Car1 from '../assets/images/Car1.jpg'
import Car2 from '../assets/images/Car2.jpg'
import Car3 from '../assets/images/Car3.jpg'

const FLEET = [
  {
    name: 'Swift Dzire',
    seats: '5 Seater',
    fuel: 'Petrol/CNG',
    ac: 'AC',
    desc: 'Best for airport transfers, local drops and small-family temple visits — easy on fuel, easy on parking.',
    image: Car1,
  },
  {
    name: 'Ertiga',
    seats: '7 Seater',
    fuel: 'Petrol/CNG',
    ac: 'AC',
    desc: 'Extra boot space and legroom, ideal for a full family temple tour or a short outstation trip.',
    image: Car2,
  },
  {
    name: 'Ciaz',
    seats: '5 Seater',
    fuel: 'Diesel',
    ac: 'AC',
    desc: 'Our top pick for outstation and hill station trips — comfortable on long routes and hill roads.',
    image: Car3,
  },
]

export default function Fleet() {
  return (
    <section className="fleet-section" id="fleet" style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)',
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
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#f59e0b',
            background: 'rgba(245,158,11,0.12)',
            padding: '6px 18px',
            borderRadius: '30px',
            justifyContent: 'center',
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
              <rect x="3" y="11" width="18" height="7" rx="2" />
              <path d="M5 11 7 6h10l2 5M8 18v1M16 18v1" />
            </svg>
            Our Fleet
          </span>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '12px',
          }}>
            A car for every group size
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: '1.6',
          }}>
            5-seater to 7-seater, every vehicle is AC, sanitised and driven by a verified local driver.
          </p>
        </div>

        {/* Fleet Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {FLEET.map((c) => (
            <div 
              key={c.name}
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              }}
            >
              {/* Car Image */}
              <div style={{
                height: '200px',
                overflow: 'hidden',
                background: 'rgba(0,0,0,0.3)',
                position: 'relative',
              }}>
                <img 
                  src={c.image} 
                  alt={c.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Badge on image */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(245,158,11,0.9)',
                  color: '#1a1a2e',
                  padding: '4px 14px',
                  borderRadius: '30px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {c.seats}
                </div>
              </div>

              {/* Car Details */}
              <div style={{
                padding: '24px 24px 28px 24px',
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  margin: '0 0 6px 0',
                }}>
                  {c.name}
                </h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: '1.6',
                  margin: '0 0 16px 0',
                }}>
                  {c.desc}
                </p>

                {/* Specs */}
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap',
                  padding: '12px 0',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: '16px', height: '16px' }}>
                      <circle cx="9" cy="8" r="3" />
                      <path d="M2 21v-1a6 6 0 0 1 12 0v1" />
                      <circle cx="17" cy="9" r="2.5" />
                      <path d="M14 21v-1a5 5 0 0 1 8-4" />
                    </svg>
                    {c.seats}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: '16px', height: '16px' }}>
                      <path d="M12 2v20M2 12h20" />
                    </svg>
                    {c.ac}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: '16px', height: '16px' }}>
                      <path d="M3 22h18M6 22V10l6-6 6 6v12" />
                    </svg>
                    {c.fuel}
                  </div>
                </div>

                {/* Book Now Button */}
                <button
                  onClick={() => {
                    sessionStorage.setItem('selectedService', c.name)
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '12px',
                    borderRadius: '10px',
                    border: '1px solid rgba(245,158,11,0.3)',
                    background: 'rgba(245,158,11,0.08)',
                    color: '#f59e0b',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f59e0b'
                    e.currentTarget.style.color = '#1a1a2e'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(245,158,11,0.08)'
                    e.currentTarget.style.color = '#f59e0b'
                  }}
                >
                  Book This Car →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}