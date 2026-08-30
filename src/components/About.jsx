import React from 'react'
import iskconImg from '../assets/images/iskcon-temple.jpg'

export default function About() {
  return (
    <section className="about-section" id="about" style={{
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #eef2f7 100%)',
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
    }}>
      <div className="container-xl" style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Centered Heading Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
        }}>
          <span style={{
            display: 'inline-block',
            fontSize: '1rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#f59e0b',
            background: 'rgba(245,158,11,0.08)',
            padding: '0px 14px',
            borderRadius: '30px',
          }}>
            About Us
          </span>
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* Left - Image Section */}
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          }}>
            <img 
              src={iskconImg} 
              alt="ISKCON Temple, Vrindavan — one of the routes Tour & Travels covers"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '20px',
                transition: 'transform 0.5s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>

          {/* Right - Content Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            {/* Heading */}
            <h2 style={{
              fontSize: '2.4rem',
              fontWeight: '700',
              color: '#1a1a2e',
              margin: '0',
              lineHeight: '1.2',
            }}>
              Tour & Travels — <br/>
              <span style={{ color: '#f59e0b' }}>Your Trusted Travel Partner</span>
            </h2>

            {/* Description */}
            <p style={{
              fontSize: '0.95rem',
              color: '#475569',
              lineHeight: '1.8',
              margin: '0',
            }}>
              Based in Vrindavan, Tour & Travels has been driving pilgrims, families and travellers
              safely across Braj and beyond for years. Whether it's an early morning airport drop,
              a temple darshan circuit, or a long outstation trip to the hills, we plan the route and
              drive it ourselves — so you can sit back and enjoy the journey.
            </p>

            <p style={{
              fontSize: '0.95rem',
              color: '#475569',
              lineHeight: '1.8',
              margin: '0',
            }}>
              Every car in our fleet is checked before it leaves the yard, and every driver is
              local, licensed and familiar with the roads — from Braj's temple lanes to
              Himalayan hill routes.
            </p>

            {/* Features List - Updated with icons */}
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '4px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.9rem',
                color: '#334155',
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(245,158,11,0.12)',
                  color: '#f59e0b',
                  flexShrink: 0,
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                    <path d="m20 6-11 11-5-5" />
                  </svg>
                </span>
                Clean, sanitised cars with verified, experienced drivers
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.9rem',
                color: '#334155',
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(245,158,11,0.12)',
                  color: '#f59e0b',
                  flexShrink: 0,
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                    <path d="m20 6-11 11-5-5" />
                  </svg>
                </span>
                Transparent, Best pricing — no surprise charges
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.9rem',
                color: '#334155',
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(245,158,11,0.12)',
                  color: '#f59e0b',
                  flexShrink: 0,
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                    <path d="m20 6-11 11-5-5" />
                  </svg>
                </span>
                24/7 booking support by call or WhatsApp and Email
              </li>
            </ul>

            {/* Stats Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              margin: '8px 0 4px 0',
              padding: '20px',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.03)',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#f59e0b',
                }}>5+</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  fontWeight: '500',
                }}>Years Experience</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#f59e0b',
                }}>6,000+</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  fontWeight: '500',
                }}>Trips Completed</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#f59e0b',
                }}>4.6/5</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  fontWeight: '500',
                }}>Customer Rating</div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="#contact" 
              className="btn-rk btn-rk-amber" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                background: '#f59e0b',
                color: '#1a1a2e',
                boxShadow: '0 4px 20px rgba(245,158,11,0.3)',
                transition: 'all 0.3s ease',
                width: 'fit-content',
                marginTop: '4px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#d97706'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(245,158,11,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f59e0b'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,158,11,0.3)'
              }}
            >
              Book Your Ride
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px' }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 992px) {
          .container-xl > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}