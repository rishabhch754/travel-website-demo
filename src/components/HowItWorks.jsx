import React from 'react'

const STEPS = [
  { title: 'Tell us your trip', desc: 'Fill the booking form or call us with your route, date and group size.' },
  { title: 'Get a fixed quote', desc: 'We confirm the vehicle and price — no hidden charges, no surprises.' },
  { title: 'We pick you up', desc: 'Your driver arrives on time at your pickup point, ready to go.' },
  { title: 'Enjoy the ride', desc: 'Sit back and relax — we handle the roads, the parking and the timing.' },
]

export default function HowItWorks() {
  return (
    <section className="steps-section">
      <div className="container-xl">
        <div className="text-center mx-auto" style={{ maxWidth: 620 }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            How Booking Works
          </span>
          <h2>Four steps to your next ride</h2>
        </div>
        <div className="steps-wrap">
          {STEPS.map((s, i) => (
            <div className="step-item" key={s.title}>
              <div className="step-num">{i + 1}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
