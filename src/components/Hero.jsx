import React from 'react'
import backgroundImage from '../assets/images/BackGroundImage.jpg'

const CHIPS = ['Airport Transfer', 'Temple Tours', 'Outstation Trips', 'Hill Stations']

export default function Hero() {
  return (
    <section 
      className="hero" 
      id="home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      }}
    >
      {/* Gradient Overlay - Softer blend */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05) 100%)',
        zIndex: 1,
      }} />
      
      {/* Subtle bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)',
        zIndex: 1,
      }} />
      
      <div className="container-xl hero-content" style={{ 
        position: 'relative', 
        zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        <div style={{
          maxWidth: '650px',
          width: '100%',
          textAlign: 'right',
        }}>
          {/* Heading with glass-morphism blend */}
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '1.2rem',
            color: '#ffffff',
            textShadow: '0 2px 20px rgba(0,0,0,0.15), 0 4px 40px rgba(0,0,0,0.1)',
            fontFamily: "'Poppins', 'Segoe UI', sans-serif",
            letterSpacing: '-0.5px',
            // background: 'rgba(255,255,255,0.08)',
            // backdropFilter: 'blur(2px)',
            padding: '8px 20px',
            // borderRadius: '12px',
            display: 'inline-block',
            // border: '1px solid rgba(255,255,255,0.06)',
          }}>
            Your Trusted Travel Partner for <span style={{ 
              color:  'rgba(255,255,255,0.92)',
              textShadow: '0 2px 20px rgba(251,191,36,0.15)',
              // background: 'rgba(251,191,36,0.08)',
              padding: '0 8px',
              // borderRadius: '6px',
            }}>Every Journey</span>
          </h1>
          
          {/* Paragraph with blended glass effect */}
          <div style={{
            // background: 'rgba(255,255,255,0.06)',
            // backdropFilter: 'blur(4px)',
            padding: '18px 24px',
            // borderRadius: '16px',
            // border: '1px solid rgba(255,255,255,0.05)',
            marginBottom: '2.5rem',
            boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
          }}>
            <p className="hero-sub" style={{
              fontSize: '1.2rem',
              lineHeight: '1.9',
              color: 'rgba(255,255,255,0.92)',
              textShadow: '0 1px 10px rgba(0,0,0,0.05)',
              fontFamily: "'Poppins', 'Segoe UI', sans-serif",
              fontWeight: '600',
              margin: 0,
            }}>
              Experience hassle-free travel with our premium taxi services. Whether it's a <strong style={{ 
                color:  'rgba(255,255,255,0.92)',
                fontWeight: '600',
                textShadow: '0 0 20px rgba(251,191,36,0.1)',
              }}>temple tour</strong>, 
              a <strong style={{ 
                color:  'rgba(255,255,255,0.92)',
                fontWeight: '600',
                textShadow: '0 0 20px rgba(251,191,36,0.1)',
              }}>hill station getaway</strong>, or a reliable <strong style={{ 
                color:  'rgba(255,255,255,0.92)',
                fontWeight: '600',
                textShadow: '0 0 20px rgba(251,191,36,0.1)',
              }}>airport transfer</strong> — 
              we ensure clean cars, professional drivers, and on-time service every time.
            </p>
          </div>
          
          <div className="hero-cta" style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
            justifyContent: 'flex-end',
          }}>
            <a href="#contact" className="btn-rk btn-rk-amber" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.9rem 2.5rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              background: '#f59e0b',
              color: '#1a1a2e',
              fontSize: '1.05rem',
              boxShadow: '0 8px 30px rgba(245,158,11,0.35)',
              fontFamily: "'Poppins', 'Segoe UI', sans-serif",
              cursor: 'pointer',
            }}>
              Book Your Ride
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px' }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            
            {/* Call to Book Button with Animation */}
            <a 
              href="tel:+919634728358" 
              className="btn-rk btn-rk-outline" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2.5rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: '#1a1a2e',
                background: '#f59e0b',
                backdropFilter: 'blur(8px)',
                fontSize: '1.05rem',
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
          
          <div className="hero-quick" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            justifyContent: 'flex-end',
          }}>
            {CHIPS.map((c) => (
              <span className="quick-chip" key={c} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1.2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                borderRadius: '30px',
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                fontFamily: "'Poppins', 'Segoe UI', sans-serif",
                fontWeight: '400',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', color: '#fbbf24' }}>
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
       
      {/* Animation for call logo */}
      <style>{`
        @keyframes phonePulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          25% {
            transform: scale(1.1) rotate(-5deg);
          }
          50% {
            transform: scale(1.15) rotate(5deg);
          }
          75% {
            transform: scale(1.05) rotate(-3deg);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: translate(0, 0) scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0.8;
          }
        }
        
        .btn-rk-outline {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>
    </section>
  )
}