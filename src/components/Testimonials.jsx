import React, { useState, useEffect } from 'react'

const REVIEWS = [
  {
    name: 'Rekha Sharma',
    loc: 'Delhi',
    text: 'Booked an airport drop from Vrindavan at 4 AM — the driver was already waiting when I came down. Smooth ride, clean car, very professional.',
  },
  {
    name: 'Vikram Chaturvedi',
    loc: 'Jaipur',
    text: 'Took the Innova Crysta for a Manali trip with family. The driver knew the hill roads well and made sure we never felt unsafe. Highly recommend.',
  },
  {
    name: 'Anjali Rao',
    loc: 'Hyderabad',
    text: 'Did a full-day temple tour — Vrindavan, Mathura and Barsana — all planned around darshan timings. Tour & Travels made it completely stress-free.',
  },
  {
    name: 'Suresh Patel',
    loc: 'Ahmedabad',
    text: 'Best taxi service in Vrindavan! Punctual, polite drivers, and very reasonable rates. Used them for 5 days straight for local sightseeing.',
  },
  {
    name: 'Priya Singh',
    loc: 'Lucknow',
    text: 'Booked a last-minute car for Delhi airport. They arranged it within 30 minutes. The car was spotless and the driver was very courteous.',
  },
  {
    name: 'Amit Kumar',
    loc: 'Mumbai',
    text: 'Excellent service for our Char Dham Yatra. The driver was experienced, the vehicle was comfortable, and we felt safe throughout the journey.',
  },
  {
    name: 'Neha Gupta',
    loc: 'Kanpur',
    text: 'Very reliable and trustworthy. Used their services for temple tours and every time the experience was top-notch. Strongly recommend!',
  },
  {
    name: 'Rajesh Verma',
    loc: 'Delhi',
    text: 'From Vrindavan to Manali and back, they made our family trip memorable. Professional drivers, clean cars, and great customer service.',
  },
]

function Stars() {
  return (
    <div style={{
      display: 'flex',
      gap: '2px',
      marginBottom: '12px',
      color: '#f59e0b',
      justifyContent: 'center',
    }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Get next review index for smooth transition
  const nextIndex = (currentIndex + 1) % REVIEWS.length
  const prevIndex = (currentIndex - 1 + REVIEWS.length) % REVIEWS.length

  return (
    <section className="testi-section" id="reviews" style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)',
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      overflow: 'hidden',
    }}>
      <div className="container-xl" style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '620px',
          margin: '0 auto 48px auto',
        }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.85rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#f59e0b',
            background: 'rgba(245,158,11,0.12)',
            padding: '6px 18px',
            borderRadius: '30px',
          }}>
            Customer Reviews
          </span>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '8px',
          }}>
            What our riders say
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
          }}>
            Real reviews from real travellers who trusted us with their journey.
          </p>
        </div>

        {/* Carousel Container */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '20px',
        }}>
          {/* Animated Carousel Track */}
          <div style={{
            display: 'flex',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
            {REVIEWS.map((r, index) => (
              <div
                key={index}
                style={{
                  minWidth: '100%',
                  padding: '0 10px',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  padding: '40px 32px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center',
                  maxWidth: '700px',
                  margin: '0 auto',
                  transition: 'all 0.3s ease',
                }}>
                  <Stars />
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: 'rgba(255,255,255,0.85)',
                    margin: '0 0 24px 0',
                    fontStyle: 'italic',
                    maxWidth: '550px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1a1a2e',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      flexShrink: 0,
                    }}>
                      {r.name.charAt(0)}
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#ffffff',
                      }}>
                        {r.name}
                      </div>
                      <div style={{
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.5)',
                      }}>
                        {r.loc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '32px',
        }}>
          {REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: index === currentIndex ? '32px' : '10px',
                height: '10px',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.5s ease',
                background: index === currentIndex ? '#f59e0b' : 'rgba(255,255,255,0.2)',
                padding: '0',
              }}
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.background = 'rgba(245,158,11,0.5)'
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                }
              }}
            />
          ))}
        </div>

        {/* Review Counter */}
        <div style={{
          textAlign: 'center',
          marginTop: '12px',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.3)',
        }}>
          {currentIndex + 1} / {REVIEWS.length}
        </div>
      </div>
    </section>
  )
}