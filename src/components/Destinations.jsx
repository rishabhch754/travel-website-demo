import React, { useState } from 'react'
import premMandir from '../assets/images/prem-mandir.jpg'
import iskcon from '../assets/images/iskcon-temple.jpg'
import chandrodaya from '../assets/images/chandrodaya-mandir.jpg'
import lotus from '../assets/images/lotus-temple.jpg'
import manali from '../assets/images/manali.jpg'
import shimla from '../assets/images/shimla.jpg'
import nainital from '../assets/images/nainital.jpg'
import kedarnath from '../assets/images/kedarnath.jpg'
import badrinath from '../assets/images/badrinath.jpg'
import rishikesh from '../assets/images/rishikesh.jpg'
import haridwar from '../assets/images/haridwar.jpg'
import nandgaon from '../assets/images/nandgaon.jpg'
import radharaniJi from '../assets/images/radharani.jpg'
import janmboomi from '../assets/images/janmbhoomi.jpg'
import dwarkadish from '../assets/images/dwarkadish.jpg'
import dharmshala from '../assets/images/dharamshal.png'
const MountainIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 20 9 8l4 7 3-5 5 10Z" />
  </svg>
)
const TempleIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 2C8 8 8 16 12 22C16 16 16 8 12 2Z" />
  </svg>
)

const TEMPLES = [
  { name: 'Prem Mandir', place: 'Vrindavan', img: premMandir},
  { name: 'ISKCON Krishna Balaram', place: 'Vrindavan', img: iskcon},
  { name: 'Chandrodaya Mandir', place: 'Vrindavan', img: chandrodaya},
  { name: 'Lotus Mandir', place: 'Vrindavan', img: lotus},
  { name: 'Radha Rani Temple', place: 'Barsana', img: radharaniJi},
  { name: 'Nand Bhavan', place: 'Nandgaon', img: nandgaon},
  {name: 'Shri Krishna Janmasthan', place: 'Mathura', img: janmboomi},
  {name: 'Dwarkadhish temple', place: 'Mathura', img: dwarkadish}
]

const HILLS = [
  { name: 'Kedarnath Temple', place: 'Uttarakhand', img: kedarnath },
  { name: 'Badrinath Temple', place: 'Uttarakhand', img: badrinath },
  { name: 'Rishikesh', place: 'Uttarakhand', img: rishikesh },
  { name: 'Haridwar', place: 'Uttarakhand', img: haridwar },
  { name: 'Manali', place: 'Himachal Pradesh', img: manali },
  { name: 'Shimla', place: 'Himachal Pradesh', img: shimla },
  { name: 'Nainital', place: 'Uttarakhand', img: nainital },
  {name: 'Dalai Lama Temple', place: 'Dharamshala', img: dharmshala}
]

function DestCard({ item, icon }) {
  return (
    <div className="dest-card" style={{
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      transition: 'all 0.3s ease',
      cursor: 'default',
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.04)',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-6px)'
      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
    }}>
      {item.img ? (
        <img 
          src={item.img} 
          alt={`${item.name}, ${item.place}`} 
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <div
          className="dest-illustration"
          style={{ 
            background: item.gradient, 
            height: '200px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'rgba(255,255,255,.35)'
          }}
        >
          <div style={{ width: 56, height: 56 }}>{icon}</div>
        </div>
      )}
      <div className="dest-overlay" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '20px 20px 24px 20px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
        color: '#fff',
      }}>
        <div>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: 'rgba(255,255,255,0.7)',
          }}>{item.place}</span>
          <h4 style={{
            fontSize: '1.1rem',
            fontWeight: '600',
            margin: '4px 0 0 0',
            color: '#fff',
          }}>{item.name}</h4>
        </div>
      </div>
    </div>
  )
}

export default function Destinations() {
  const [tab, setTab] = useState('temples')
  const list = tab === 'temples' ? TEMPLES : HILLS
  const icon = tab === 'temples' ? TempleIcon : MountainIcon

  return (
    <section className="destinations-section" style={{
      padding: '80px 20px',
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
          margin: '0 auto 48px auto',
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
            background: 'rgba(245,158,11,0.08)',
            padding: '6px 18px',
            borderRadius: '30px',
            justifyContent: 'center',
          }}>            
            Popular Destinations
          </span>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            color: '#1a1a2e',
            marginBottom: '12px',
          }}>
            Places our customers travel to most
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            lineHeight: '1.6',
          }}>
            Temple darshan circuits around Braj, or a hill station escape — see where we usually take people.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '40px',
        }}>
          <button 
            onClick={() => setTab('temples')}
            style={{
              padding: '10px 28px',
              borderRadius: '30px',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: tab === 'temples' ? '#f59e0b' : 'transparent',
              color: tab === 'temples' ? '#1a1a2e' : '#64748b',
              boxShadow: tab === 'temples' ? '0 4px 20px rgba(245,158,11,0.3)' : 'none',
            }}
          >
           Temple Tours
          </button>
          <button 
            onClick={() => setTab('hills')}
            style={{
              padding: '10px 28px',
              borderRadius: '30px',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: tab === 'hills' ? '#f59e0b' : 'transparent',
              color: tab === 'hills' ? '#1a1a2e' : '#64748b',
              boxShadow: tab === 'hills' ? '0 4px 20px rgba(245,158,11,0.3)' : 'none',
            }}
          >
            Hill Stations
          </button>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}>
          {list.map((item) => (
            <DestCard item={item} icon={icon} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  )
}